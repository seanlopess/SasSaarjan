
import { NextResponse } from 'next/server'
import { supabase } from '@/lib/supabaseClient'
import { Resend } from 'resend'


export async function POST(request: Request) {
    const resend = new Resend(process.env.RESEND_API_KEY)

    try {
        const body = await request.json()
        const { name, email, phone, city } = body

        // Validate fields
        if (!name || !email || !phone || !city) {
            return NextResponse.json(
                { error: 'All fields are required' },
                { status: 400 }
            )
        }

        // Insert into Supabase
        const { error: dbError } = await supabase
            .from('book_interest')
            .insert([{ name, email, phone, city }])

        if (dbError) {
            console.error('Database error:', dbError)
            return NextResponse.json(
                { error: 'Failed to save interest' },
                { status: 500 }
            )
        }

        // Send email via Resend
        try {
            await resend.emails.send({
                from: 'SaSarjan <onboarding@resend.dev>', // or a verified domain
                to: email,
                subject: 'Thank you for your interest in "The Collective Path of Humanity"',
                html: `
          <div style="font-family: sans-serif; line-height: 1.6; color: #333;">
            <h2>Hello ${name},</h2>
            <p>Thank you for expressing your interest in <strong>"The Collective Path of Humanity"</strong>.</p>
            <p>We have received your details and will keep you updated on the book's availability and other news from SaSarjan.</p>
            <br/>
            <p>Warm regards,</p>
            <p>The SaSarjan Team</p>
          </div>
        `,
            })
        } catch (emailError) {
            console.error('Email sending error:', emailError)
            // We don't fail the request if email fails, as the interest is already recorded
        }

        return NextResponse.json({ success: true, message: 'Interest recorded successfully' })
    } catch (error) {
        console.error('Unexpected error:', error)
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        )
    }
}


export interface Initiative {
    id: string;
    title: string;
    subtitle: string;
    description: string;
    detailDescription?: string; // Expanded description for the detail page
    icon: string;
    slug: string;
    externalLink?: string; // If set, the detail page "Visit" button points here
    isInternalPage?: boolean; // If true, the card links directly to the internal route, bypassing the placeholder
}

export const initiatives: Initiative[] = [
    // Row 1
    {
        id: 'sasarjan',
        title: 'SaSarjan.com',
        subtitle: 'Parent Group - Co-Creating Together',
        description: 'Our parent company uniting stakeholders for collective prosperity',
        detailDescription: 'SaSarjan is the parent group dedicated to uniting stakeholders for collective prosperity. We believe in the power of co-creation to build sustainable ecosystems that benefit everyone involved.',
        icon: '🤝',
        slug: 'sasarjan'
    },
    {
        id: '10xgrowth',
        title: '10xGrowth.com',
        subtitle: 'Business Acceleration',
        description: 'Exponential growth strategies for businesses',
        detailDescription: '10xGrowth provides exponential growth strategies for businesses looking to scale rapidly. Our frameworks and mentorship programs are designed to help you achieve breakthrough results.',
        icon: '📈',
        slug: '10x-growth'
    },
    {
        id: 'collective-path',
        title: 'The Collective Path of Humanity',
        subtitle: 'Featured Resource',
        description: 'A blueprint for collective prosperity and co-creation.',
        icon: '📘',
        slug: 'collective-path-of-humanity',
        isInternalPage: true
    },

    // Row 2
    {
        id: 'bookbazaar',
        title: 'BookBazaar.com',
        subtitle: 'Book Marketing Platform',
        description: 'Discover, promote, and connect authors with readers through community-driven book marketing',
        detailDescription: 'BookBazaar is a community-driven book marketing platform that connects authors with readers. Discover new titles, promote your work, and engage with a vibrant literary community.',
        icon: '📚',
        slug: 'book-bazaar'
    },
    {
        id: 'talentexcel',
        title: 'TalentExcel.com',
        subtitle: 'Lifelong Learning Platform',
        description: 'Learning opportunities in business, technology & media with earning opportunities',
        detailDescription: 'TalentExcel offers learning opportunities in business, technology, and media, coupled with real-world earning opportunities. Empowering individuals to excel in their careers through continuous skill development.',
        icon: '🎓',
        slug: 'talent-excel',
        externalLink: 'https://talentexcel.vercel.app'
    },
    {
        id: 'sevapremi',
        title: 'SevaPremi.com',
        subtitle: 'Community Service Platform',
        description: 'Local area improvement through volunteers, solution designers & donors',
        detailDescription: 'SevaPremi connects volunteers, solution designers, and donors to drive local area improvement. Join us in making a tangible difference in your community through acts of service and collaboration.',
        icon: '🙏',
        slug: 'seva-premi',
        externalLink: 'https://sasarjan.notion.site/?source=copy_link'
    },

    // Row 3
    {
        id: 'happy247',
        title: 'Happy247.world',
        subtitle: 'Wellness & Happiness',
        description: 'Your journey to continuous happiness and wellbeing',
        detailDescription: 'Happy247 is dedicated to your journey of continuous happiness and wellbeing. Explore resources, practices, and a community focused on mental and emotional wellness.',
        icon: '😊',
        slug: 'happy-247',
        externalLink: 'https://www.instagram.com/happy247.world?igsh=NXZvb3ZicWx4cWYx'
    },
    {
        id: 'nanhasitara',
        title: 'NanhaSitara.com',
        subtitle: 'Youth Development',
        description: 'Nurturing young talents and future stars',
        detailDescription: 'NanhaSitara focuses on identifying and nurturing young talents. We provide a platform for the next generation to shine, offering support and opportunities to develop their unique skills as future stars.',
        icon: '⭐',
        slug: 'nanha-sitara'
    },
    {
        id: 'incubator',
        title: 'Incubator.in',
        subtitle: 'Startup Ecosystem',
        description: 'Incubation, mentorship, and growth for startups',
        detailDescription: 'Our Incubator program is designed to support the startup ecosystem through incubation, mentorship, and growth resources. We help early-stage ventures navigate the challenges of building a successful business.',
        icon: '🚀',
        slug: 'incubator'
    }
];

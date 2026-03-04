from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys

import time

# Setup Chrome driver

driver = webdriver.Chrome()

# Open website
driver.get("https://sas-saarjan.vercel.app/initiatives/collective-path-of-humanity")  # Replace with actual form URL

driver.maximize_window()

# Wait for page to load
time.sleep(2)

# Fill Name field
name = driver.find_element(By.ID, "name")
name.send_keys("Seanne Lopes")

# Fill Email field
email = driver.find_element(By.ID, "email")
email.send_keys("seanne@example.com")

phone = driver.find_element(By.ID,"phone")
phone.send_keys("9876543210")


city = driver.find_element(By.ID,"city")
city.send_keys("Mumbai")

# Fill Password field
#password = driver.find_element(By.ID, "password")
#password.send_keys("SecurePass123")

# Click Submit button
submit = driver.find_element(By.XPATH, "//button[contains(text(),'Submit')]")

submit.click()

# Wait to observe result
time.sleep(3)

# Close browser
driver.quit()


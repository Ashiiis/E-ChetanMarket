import requests
from bs4 import BeautifulSoup
import csv

# Step 1: Download the HTML content
url = "https://facilities.aicte-india.org/dashboard/pages/angulardashboard.php#!/approved"
print(f"Fetching URL: {url}")  # Checkpoint 1
try:
    response = requests.get(url)
    response.raise_for_status()  # Raise HTTPError for bad responses (4xx or 5xx)
    html_content = response.content
    print("URL fetched successfully.")  # Checkpoint 2
except requests.exceptions.RequestException as e:
    print(f"Error fetching URL: {e}")
    exit()

# Step 2: Save the HTML content to a file
file_path = "scraped_page.html"
try:
    with open(file_path, "wb") as file:  # Use 'wb' for writing bytes
        file.write(html_content)
    print(f"HTML content saved to {file_path}")  # Checkpoint A
except Exception as e:
    print(f"Error saving HTML content: {e}")
    exit()

# Step 3: Parse the HTML content using Beautiful Soup
try:
    with open(file_path, "r", encoding="utf-8") as file:
        html_content = file.read()
    soup = BeautifulSoup(html_content, 'html.parser')
    print("HTML parsed successfully.")  # Checkpoint 3
except Exception as e:
    print(f"Error parsing HTML from file: {e}")
    exit()

# Step 4: Find the table and extract data from td tags, excluding button tags
data_to_scrape = []
table = soup.find('table')  # Find the table
if table:
    print("Table found.")  # Checkpoint 4
    rows = table.find_all('tr')  # Find rows directly within the table
    for row in rows:
        cells = row.find_all('td')
        row_data = []
        for cell in cells:
            if cell.find('button') is None:  # Exclude cells containing button tags
                text = cell.text.strip()
                row_data.append(text)
                print(f"Extracted data: {text}")  # Print the extracted data to the terminal
        if row_data:
            data_to_scrape.append(row_data)
else:
    print("Table not found.")  # Checkpoint 5

print(f"Data to scrape: {data_to_scrape}")  # Checkpoint 6

# Step 5: Save the extracted data to a CSV file
csv_file = "scraped_data.csv"
try:
    with open(csv_file, "w", newline="", encoding="utf-8") as file:
        writer = csv.writer(file)
        # Write header row (optional, based on your needs)
        if data_to_scrape:
            writer.writerow([f'Column {i+1}' for i in range(len(data_to_scrape[0]))])  # Auto-generate headers
        # Write data rows
        for row in data_to_scrape:
            writer.writerow(row)
    print(f"Data saved to {csv_file}")
except Exception as e:
    print(f"Error writing to CSV file: {e}")

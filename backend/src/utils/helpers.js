// Import necessary modules
import fs from 'fs/promises';
import Papa from 'papaparse';

// Function to read the CSV file and convert it to an array of phone numbers
export async function getPhoneNumbersFromCSV(filePath) {
    try {
        const data = await fs.readFile(filePath, 'utf8');
        const results = Papa.parse(data, {
            header: true,
            skipEmptyLines: true
        });
        console.log(results);

        // Extract phone numbers into an array
        const phoneNumbers = results.data.map(row => row['Mobile Number']);
        return phoneNumbers;
    } catch (err) {
        console.error('Error reading the file:', err);
        throw err;
    }
}


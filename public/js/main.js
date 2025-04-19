document.addEventListener('DOMContentLoaded', function () {
    const csvFilePath = 'assets/database.csv'; // Path to your CSV file
    const tableBody = document.querySelector('#watches-table tbody');
    const errorMessage = document.createElement('tr'); // Create a new row for the error message

    // Fetch the CSV file
    fetch(csvFilePath)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })
        .then(data => {
            const rows = data.trim().split('\n').slice(1); // Split CSV data and skip the header

            // Check if there are rows to populate
            if (rows.length === 0) {
                throw new Error('CSV file is empty or no data found');
            }

            // Pass the rows to table.js for populating the table
            populateTable(rows); // populateTable is in table.js

            // Populate the default card view
            populateCardView(rows);

            // Initialize side panel only after rows are populated
            setTimeout(() => initializeSidePanel(), 0);
        })
        .catch(error => {
            // Handle errors and display an error message inside the table
            console.error('Error loading CSV file:', error);

            // Display the error message in the table
            errorMessage.innerHTML = `
                <td colspan="5" style="color: red; text-align: center;">
                    Error: ${error.message}. Please ensure the CSV file is available and try again.
                </td>`;
            tableBody.appendChild(errorMessage); // Append the error message as a table row
        });
});

function populateTable(rows) {
    const tableBody = document.querySelector('#watches-table tbody');

    rows.forEach(row => {
        if (row.trim() !== '') {
            const cols = row.split(',');

            // Create a new table row
            const tr = document.createElement('tr');

            // Set data attributes for the modal (including specs)
            tr.dataset.name = cols[0].trim();
            tr.dataset.description = cols[1].trim();
            tr.dataset.category = cols[2].trim();
            tr.dataset.price = cols[3].trim();
            tr.dataset.image = cols[4].trim();
            tr.dataset.specs = cols[5] ? cols[5].trim() : ''; 
            tr.dataset.Project_link = cols[6] ? cols[6].trim() : ''; 
            tr.dataset.Ref_link = cols[7] ? cols[7].trim() : ''; 

            // Create and append table cells
            cols.slice(0, 5).forEach((col, index) => {
                const td = document.createElement('td');
                if (index === 4) { // Image column
                    const img = document.createElement('img');
                    img.src = col.trim();
                    img.alt = cols[0].trim(); // Watch name as alt text
                    td.appendChild(img);
                } else {
                    td.textContent = col.trim(); // Remove extra whitespace
                }
                tr.appendChild(td);
            });

            // Append the row to the table body
            tableBody.appendChild(tr);
        }
    });
    
    // REMOVE THIS LINE to prevent automatic card display
    // displayCards();
}
// Select all cards
const cards = document.querySelectorAll('.card');

// Iterate over each card
cards.forEach(card => {
    const button = card.querySelector('.btn-home-arrow'); // The button inside each card
    
    // On mouse enter, trigger the hover state
    card.addEventListener('mouseenter', () => {
        button.classList.add('hover');
    });

    // On mouse leave, remove the hover state
    card.addEventListener('mouseleave', () => {
        button.classList.remove('hover');
    });
});

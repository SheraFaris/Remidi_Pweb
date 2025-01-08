// Function to handle sending data (POST request)
async function ambilData(url, data) {
    const jsonData = JSON.stringify(data);
    
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
  
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: headers,
            body: jsonData
        });
  
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
  
        const responseData = await response.json();
        console.log('Data saved:', responseData);
    } catch (error) {
        console.error('Error creating the item:', error);
    }
}

const _URL = "http://localhost:5000/Data";

// Event listener for the "Ambil Data" button
document.getElementById('ambilDataBtn').addEventListener('click', () => {
    const textbox1 = document.getElementById('textbox1').value;
    const textbox2 = document.getElementById('textbox2').value;

    // Validate the input fields
    if (textbox1.length === 4 && textbox2.length === 6) {
        const SEP = `0001R00${textbox1}0${textbox2}`;
        const goodSEP = SEP.trim();

        localStorage.setItem('SEPnumber', goodSEP);

        // Create the payload
        const _sep = {
            Number: goodSEP
        };

        // Send the data via POST request
        ambilData(_URL, _sep);

        // Show success message
        alert(`Data berhasil diambil: ${SEP}`);
        console.log(_sep);

        // Optional: Navigate to a new page with the data in the query string
        const newPageUrl = `Second/2ndPage.html?goodSEP=${encodeURIComponent(goodSEP)}`;
        window.location.href = newPageUrl;
    } else {
        alert('Harap mengisi textbox dengan format yang benar.');
    }
});

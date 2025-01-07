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
  
        const responseData = await response.json(); // Wait for the response to be read as JSON
        console.log('Data saved:', responseData);
  
    } catch (error) {
        console.error('Error creating the item:', error);
    }
}

// Event listener for the button click
document.getElementById('ambilDataBtn').addEventListener('click', () => {
    const textbox1 = document.getElementById('textbox1').value;
    const textbox2 = document.getElementById('textbox2').value;

    // Validate the input fields
    if (textbox1.length === 2 && textbox2.length === 6) {
        const SEP = "0001R00 " + textbox1 + " 0 " + textbox2;
        alert(`Data berhasil diambil: ${SEP}`);
        console.log(SEP);

        // Sample POST data
        const data = {
            nomor_sep: SEP,
            nama: "John Doe", 
            tanggal_lahir: "1990-01-01", 
            alamat: "Jl. Kebon Jeruk No. 20", 
            diagnosis: "Gastritis"
        };

        // Call the ambilData function to send data
        ambilData('http://your-api-url.com', data);

    } else {
        alert('Harap mengisi textbox dengan format yang benar.');
    }
});

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

const _URL = "http://localhost:5000/Data";

// Event listener for the button click
document.getElementById('ambilDataBtn').addEventListener('click', () => {
    const textbox1 = document.getElementById('textbox1').value;
    const textbox2 = document.getElementById('textbox2').value;

    // Validate the input fields
    if (textbox1.length === 4 && textbox2.length === 6) {
        const SEP = "0001R00" + textbox1 + "0" + textbox2;
        const goodSEP = (typeof SEP === 'string' && SEP.trim() !== '') ? SEP.trim() : 'default_user'; 
        const _sep = {
            Number: goodSEP
        };
        ambilData(_URL, _sep);
        alert(`Data berhasil diambil: ${SEP}`);
        console.log(_sep);
    } else {
        alert('Harap mengisi textbox dengan format yang benar.');
    }
});

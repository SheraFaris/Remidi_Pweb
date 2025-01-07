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
        console.error('Error creating the todo item:', error);
    }
  }
  


// Tambahkan event listener untuk tombol "Ambil Data"

const textbox1 = document.getElementById('textbox1').value;
const textbox2 = document.getElementById('textbox2').value;

document.getElementById('ambilDataBtn').addEventListener('click', () => {
    if (textbox1.length === 2 && textbox2.length === 6) {
        alert(`Data berhasil diambil: 0001R00${textbox1}\n 0 ${textbox2}`);
    } else {
        alert('Harap mengisi textbox dengan format yang benar.');
    }
});

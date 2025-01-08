async function ambilData2(url, data) {
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
document.getElementById('Save').addEventListener('click', () => {
    const txt1 = document.getElementById('Data1').value;
    const txt2 = document.getElementById('Data2').value;
    const SEPnumber = localStorage.getItem('SEPnumber');
    // Validate the input fields
    const SEP = `0001R00${txt1}0${txt2}`;
    // Show success message
    console.log(SEP);
    console.log(SEPnumber);
    
    alert(`Data berhasil diambil: ${SEP}`);


});

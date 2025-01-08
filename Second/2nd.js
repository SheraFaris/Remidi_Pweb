async function SendData2(url, data) {
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

async function GetDatabase(SEP) {
    try {
        const response = await fetch(`http://localhost:5000/Data/${SEP}`);
        if (!response.ok) {
            throw new Error(`Failed to fetch profile. Status: ${response.status}`);
        }
  
        const data = await response.json();
        console.log('Fetched profile data:', data);
        return data;
    } catch (error) {
        console.error('Error fetching profile data:', error);
        return null;
    }
}
  
const _URL = "http://localhost:5000/Data";

// Event listener for the "Ambil Data" button
document.getElementById('Save').addEventListener('click', () => {
    const txt1 = document.getElementById('noSEP').value;
    const txt2 = document.getElementById('noKartu').value;
    const txt3 = document.getElementById('tglMasuk').value;
    const txt4 = document.getElementById('tglPulang').value;
    const SEPnumber = localStorage.getItem('SEPnumber');

    // Create the payload
    const Data = {
        NomorSEP: txt1,
        Nomorkartu: txt2,
        Tgl_masuk: txt3,
        Tgl_pulang: txt4
    };
    // Validate the input fields
    //const SEP = `0001R00${txt1}0${txt2}`;
    // Show success message
    //console.log(SEP);
    SendData2(_URL, Data)
    console.log(SEPnumber);
    GetDatabase(txt1);
    
    alert(`Nomor SEP: ${SEPnumber} `);


});

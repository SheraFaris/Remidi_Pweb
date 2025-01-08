
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
const SEPnumber = localStorage.getItem('SEPnumber');
const txt1 = String(SEPnumber).trim();
GetDatabase(txt1);

// Event listener for the "Ambil Data" button
document.getElementById('Save').addEventListener('click', () => {
    const txt2 = document.getElementById('noKartu').value;
    const txt3 = document.getElementById('tglMasuk').value;
    const txt4 = document.getElementById('tglPulang').value;
    const txt5 = document.getElementById('crMasuk').value;
    const txt6 = document.getElementById('jnRawat').value;
    const txt7 = document.getElementById('klsRawat').value;
    const txt8 = document.getElementById('jnRawat').value;
    const txt9 = document.getElementById('adlKronik').value;
    const txt10 = document.getElementById('icIndikator').value;
    const txt11 = document.getElementById('icLos').value;
    const txt12 = document.getElementById('vJam').value;
    const txt13 = document.getElementById('useind').value;
    const txt14 = document.getElementById('strtDttm').value;
    const txt15 = document.getElementById('stpDttm').value;
    const txt16 = document.getElementById('upgrade_class_ind').value;
    const txt17 = document.getElementById('upgrade_class_class').value;
    const txt18 = document.getElementById('upgrade_class_los').value;
    const txt19 = document.getElementById('upgrade_class_payor').value;
    const txt20 = document.getElementById('add_payment_pct').value;
    const txt21 = document.getElementById('birth_weight').value;
    const txt22 = document.getElementById('sistole').value;
    const txt23 = document.getElementById('diastole').value;
    const txt24 = document.getElementById('discharge_status').value;
    const txt25 = document.getElementById('diagnosa').value;
    const txt26 = document.getElementById('procedure').value;
    const txt27 = document.getElementById('diagnosa_inagrouper').value;
    const txt28 = document.getElementById('procedure_inagrouper').value;
    const txt29 = document.getElementById('prosedur_non_bedah').value;
    const txt30 = document.getElementById('prosedur_bedah').value;
    const txt31 = document.getElementById('konsultasi').value;
    const txt32 = document.getElementById('tenaga_ahli').value;
    const txt33 = document.getElementById('keperawatan').value;
    const txt34 = document.getElementById('penunjang').value;
    const txt35 = document.getElementById('radiologi').value;
    const txt36 = document.getElementById('laboratorium').value;
    const txt37 = document.getElementById('pelayanan_darah').value;
    const txt38 = document.getElementById('rehabilitasi').value;
    const txt39 = document.getElementById('kamar').value;
    const txt40 = document.getElementById('rawat_intensif').value;
    const txt41 = document.getElementById('obat').value;
    const txt42 = document.getElementById('obat_kronis').value;
    const txt43 = document.getElementById('obat_kemoterapi').value;
    const txt44 = document.getElementById('alkes').value;
    const txt45 = document.getElementById('bmhp').value;
    const txt46 = document.getElementById('sewa_alat').value;
    const txt47 = document.getElementById('pemulasaraan_jenazah').value;
    const txt48 = document.getElementById('kantong_jenazah').value;
    const txt49 = document.getElementById('peti_jenazah').value;
    const txt50 = document.getElementById('plastik_erat').value;
    const txt51 = document.getElementById('desinfektan_jenazah').value;
    const txt52 = document.getElementById('mobil_jenazah').value;
    const txt53 = document.getElementById('desinfektan_mobil_jenazah').value;
    const txt54 = document.getElementById('covid19_status_cd').value;
    const txt55 = document.getElementById('nomor_kartu_t').value;
    const txt56 = document.getElementById('episodes').value;
    const txt57 = document.getElementById('covid19_cc_ind').value;
    const txt58 = document.getElementById('covid19_rs_darurat_ind').value;
    const txt59 = document.getElementById('covid19_co_insidense_ind').value;
    const txt60 = document.getElementById('lab_asam_laktat').value;
    const txt61 = document.getElementById('lab_procalcitonin').value;
    const txt62 = document.getElementById('lab_crp').value;
    const txt63 = document.getElementById('lab_kultur').value;
    const txt64 = document.getElementById('lab_d_dimer').value;
    const txt65 = document.getElementById('lab_pt').value;
    const txt66 = document.getElementById('lab_aptt').value;
    const txt67 = document.getElementById('lab_waktu_pendarahan').value;
    const txt68 = document.getElementById('lab_anti_hiv').value;
    const txt69 = document.getElementById('lab_analisa_gas').value;
    const txt70 = document.getElementById('lab_albumin').value;
    const txt71 = document.getElementById('rad_thorax_ap_pa').value;
    const txt72 = document.getElementById('terapi_konvalesen').value;
    const txt73 = document.getElementById('akses_naat').value;
    const txt74 = document.getElementById('isoman_ind').value;
    const txt75 = document.getElementById('bayi_lahir_status_cd').value;
    const txt76 = document.getElementById('dializer_single_use').value;
    const txt77 = document.getElementById('kantong_darah').value;
    const txt78 = document.getElementById('alteplase_ind').value;
    const txt79 = document.getElementById('apgar_menit_1_appearance').value;
    const txt80 = document.getElementById('apgar_menit_1_pulse').value;
    const txt81 = document.getElementById('apgar_menit_1_grimace').value;
    const txt82 = document.getElementById('apgar_menit_1_activity').value;
    const txt83 = document.getElementById('apgar_menit_1_respiration').value;
    const txt84 = document.getElementById('apgar_menit_5_appearance').value;
    const txt85 = document.getElementById('apgar_menit_5_pulse').value;
    const txt86 = document.getElementById('apgar_menit_5_grimace').value;
    const txt87 = document.getElementById('apgar_menit_5_activity').value;
    const txt88 = document.getElementById('apgar_menit_5_respiration').value;
    const txt89 = document.getElementById('usia_kehamilan').value;
    const txt90 = document.getElementById('gravida').value;
    const txt91 = document.getElementById('partus').value;
    const txt92 = document.getElementById('abortus').value;
    const txt93 = document.getElementById('onset_kontraksi').value;
    const txt94 = document.getElementById('tarif_poli_eks').value;
    const txt95 = document.getElementById('nama_dokter').value;
    const txt96 = document.getElementById('kode_tarif').value;
    const txt97 = document.getElementById('payor_id').value;
    const txt98 = document.getElementById('payor_cd').value;
    const txt99 = document.getElementById('cob_cd').value;
    const txt100 = document.getElementById('coder_nik').value;
    
    

    // Create the payload
    const Data = {
        NomorSEP: txt1,
        NomorKartu: txt2,
        TglMasuk: txt3,
        TglPulang: txt4,
        CaraMasuk: txt5,
        JenisRawat: txt6,
        KelasRawat: txt7,
        AdlSubAcute: txt8,
        AdlChronic: txt9,
        IcuIndikator: txt10,
        IcuLos: txt11,
        VentilatorJam: txt12,
        VentilatorUseInd: txt13,
        VentilatorStartDttm: txt14,
        VentilatorStopDttm: txt15,
        UpgradeClassInd: txt16,
        UpgradeClassClass: txt17,
        UpgradeClassLOS: txt18,
        UpgradeClassPayor: txt19,
        AddPaymentPCT: txt20,
        BirthWeight: txt21,
        Sistole: txt22,
        Diastole: txt23,
        DischargeStatus: txt24,
        Diagnosa: txt25,
        Procedure: txt26,
        DiagnosaINA_Grouper: txt27,
        ProcedureINA_Grouper: txt28,
        ProsedurNonBedah: txt29,
        ProsedurBedah: txt30,
        Konsultasi: txt31,
        TenagaAhli: txt32,
        Keperawatan: txt33,
        Penunjang: txt34,
        Radiologi: txt35,
        Laboratorium: txt36,
        PelayananDarah: txt37,
        Rehabilitasi: txt38,
        Kamar: txt39,
        RawatIntensif: txt40,
        Obat: txt41,
        ObatKronis: txt42,
        ObatKemoterapi: txt43,
        Alkes: txt44,
        BMHP: txt45,
        SewaAlat: txt46,
        PemulasaraanJenazah: txt47,
        KantongJenazah: txt48,
        PetiJenazah: txt49,
        PlastikErat: txt50,
        DesinfektanJenazah: txt51,
        MobilJenazah: txt52,
        DesinfektanMobilJenazah: txt53,
        COVID19StatusCD: txt54,
        NomorKartuT: txt55,
        Episodes: txt56,
        COVID19CCInd: txt57,
        COVID19RSDaruratInd: txt58,
        COVID19CoIncidenseInd: txt59,
        LabAsamLaktat: txt60,
        LabProcalcitonin: txt61,
        LabCRP: txt62,
        LabKultur: txt63,
        LabDDimer: txt64,
        LabPT: txt65,
        LabAPTT: txt66,
        LabWaktuPendarahan: txt67,
        LabAntiHIV: txt68,
        LabAnalisaGas: txt69,
        LabAlbumin: txt70,
        RadThoraxAPPA: txt71,
        TerapiKonvalesen: txt72,
        AksesNAAT: txt73,
        IsomanInd: txt74,
        BayiLahirStatusCD: txt75,
        DializerSingleUse: txt76,
        KantongDarah: txt77,
        AlteplaseInd: txt78,
        ApgarMenit1Appearance: txt79,
        ApgarMenit1Pulse: txt80,
        ApgarMenit1Grimace: txt81,
        ApgarMenit1Activity: txt82,
        ApgarMenit1Respiration: txt83,
        ApgarMenit5Appearance: txt84,
        ApgarMenit5Pulse: txt85,
        ApgarMenit5Grimace: txt86,
        ApgarMenit5Activity: txt87,
        ApgarMenit5Respiration: txt88,
        UsiaKehamilan: txt89,
        Gravida: txt90,
        Partus: txt91,
        Abortus: txt92,
        OnsetKontraksi: txt93,
        TarifPoliEks: txt94,
        NamaDokter: txt95,
        KodeTarif: txt96,
        PayorID: txt97,
        PayorCD: txt98,
        COB_CD: txt99,
        CoderNIK: txt100
    };
    
    // Validate the input fields
    //const SEP = `0001R00${txt1}0${txt2}`;
    // Show success message
    //console.log(SEP);
    SendData2(_URL, Data)
    console.log(txt1);
    GetDatabase(txt1);
    alert(`Nomor SEP: ${txt1} `);


});

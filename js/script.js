document.getElementById('hitung').onclick = function () {
    const panjangsisi = parseFloat(document.getElementById("panjangsisi").value);
    const tipepersegi = document.querySelector('input[name="tipepersegi"]:checked').value;

    if (!isNaN(panjangsisi)) {
        if (tipepersegi === "luas") {
            const area = panjangsisi * panjangsisi;
            document.getElementById("judulkalkulator").textContent = "Kalkulator Luas Persegi";
            document.getElementById("result").innerHTML = `L: S * S<br>L: ${panjangsisi} * ${panjangsisi}<br>Luas: ${area}`;
        } else {
            const perimeter = panjangsisi * panjangsisi * panjangsisi;
            document.getElementById("judulkalkulator").textContent = "Kalkulator Keliling Persegi";
            document.getElementById("result").innerHTML = `K: S * S * S<br>K: ${panjangsisi} * ${panjangsisi} * ${panjangsisi}<br>Keliling: ${perimeter}`;
        }
    } else {
        document.getElementById("result").innerHTML = "Masukkan panjang sisi yang valid.";
    }
}
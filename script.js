let ErrorMessage = [];

var data = [
    "Silverqueen",
    "Kecap",
    "Batrai",
    "Apel"
];

var harga = [
    15000,
    7000,
    3000,
    2000
];


function tampil() {
    var tabel = document.getElementById("tabel");
    tabel.innerHTML = "<tr><th>No</th><th>Item</th><th>Price</th><th width= '10%'>Count</th><th width= '30%'>Action</th></tr>";
    for (let i = 0; i < data.length; i++) {
        var btnEdit = "<button class='btn-edit' href='#' onclick='edit(" + i + ")'>Edit Item</button>";
        var btnEditPrice = "<button class='btn-editPrice' href='#' onclick='editPrice(" + i + ")'>Edit Price</button>";
        var btnHapus = "<button class='btn-hapus' href='#' onclick='hapus(" + i + ")'>Delete</button>";
        var jumlah = `<input type='text' class='form-jumlah' id='price${i}' />`
        j = i + 1;
        tabel.innerHTML += "<tr><td>" + j + "</td><td>" + data[i] + "</td><td>" + harga[i] + "</td><td>"+ jumlah +"</td><td>" + btnEdit + "   " + btnEditPrice + "   " + btnHapus + "</tr>";
    }
}

function tambah() {
    var inputBarang = document.querySelector("input[name=barang]").value;
    var inputHarga = document.querySelector("input[name=harga]").value;
    if (inputBarang == "" || inputHarga == "") {
        alert("Please fill the form completely")
    } else {
        data.push(inputBarang);
        harga.push(inputHarga);
        tampil();
        inputBarang.value = "";
        inputHarga.value = "";
    }
    
}

function edit(id) {
    var baru = prompt("Edit", data[id]);
    data[id] = baru;
    tampil();
}

function editPrice(id) {
    var baru = prompt("Edit", harga[id]);
    harga[id] = baru;
    tampil();
}

function hapus(id) {
    data.pop(id);
    tampil();
}

function totalDis(total) {
    let diskon = 0;
    if (total >= 250000) {
        diskon = 5;
    } else if (total >= 200000) {
        diskon = 4;
    } else if (total >= 150000) {
        diskon = 3;
    } else if (total >= 100000) {
        diskon = 2;
    } else if (total >= 50000) {
        diskon = 1;
    }
    return diskon;
}

function nilaiDis(total, diskon) {
    return total * (diskon/100);
}

function finalTotal(total, nilDiskon) {
    return total - nilDiskon;
}

function proses() {
    let hargaSatu;
    let jumlah;
    let jumlahBarang = 0;
    let total = 0
    for(let i = 0; i < data.length; i++) {
        hargaSatu = Number(harga[i]);
        jumlah = Number(document.getElementById(`price${i}`).value);
        jumlahBarang += jumlah;
        total += hargaSatu * jumlah;
    }
    let totDis = totalDis(total);
    let nilDis = nilaiDis(total, totDis);
    let final = finalTotal(total, nilDis)

    // Tampil element
    document.getElementById('jml-barang').value = `Total Item : ${jumlahBarang} Items`;
    document.getElementById('tot-diskon').value = `Total Discount : ${totDis}%`;
    document.getElementById('nil-diskon').value = `Discount Value : Rp${nilDis},-`
    document.getElementById('tot-harga').value = `Total Price : Rp${final},-`;
}


tampil();
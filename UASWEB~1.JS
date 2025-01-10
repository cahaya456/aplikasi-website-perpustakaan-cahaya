// Array untuk menyimpan transaksi
let transaksiList = [];

// Fungsi untuk menambahkan transaksi
function tambahTransaksi(nama, jumlah, kategori) {
    const transaksi = {
        nama: nama,
        jumlah: jumlah,
        kategori: kategori
    };
    transaksiList.push(transaksi);
    tampilkanTransaksi();
}

// Fungsi untuk menampilkan transaksi di tabel
function tampilkanTransaksi() {
    const tabelBody = document.querySelector('#daftarTransaksi tbody');
    tabelBody.innerHTML = ''; // Kosongkan tabel sebelum menambahkan data baru

    transaksiList.forEach((transaksi) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${transaksi.nama}</td>
            <td>${transaksi.jumlah}</td>
            <td>${transaksi.kategori}</td>
        `;
        tabelBody.appendChild(row);
    });
}

// Event listener untuk form
document.getElementById('transaksiForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Mencegah form dari pengiriman default

    const namaTransaksi = document.getElementById('namaTransaksi').value;
    const jumlah = document.getElementById('jumlah').value;
    const kategori = document.getElementById('kategori').value;

    // Validasi input
    if (!namaTransaksi || !jumlah || !kategori) {
        alert('Semua field harus diisi!');
        return;
    }

    // Tambahkan transaksi ke daftar
    tambahTransaksi(namaTransaksi, jumlah, kategori);

    // Reset form
    this.reset();
});
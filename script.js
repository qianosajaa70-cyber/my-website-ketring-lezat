
// KERANJANG PESANAN
let pesanan = [];

// FORMAT RUPIAH
function formatRupiah(angka) {
    return angka.toLocaleString("id-ID");
}

// TAMBAH PESANAN
function pesan(nama, harga) {
    pesanan.push({
        nama: nama,
        harga: harga
    });

    tampilkanPesanan();

    alert(nama + " berhasil ditambahkan ke keranjang!");
}

// TAMPILKAN PESANAN
function tampilkanPesanan() {
    const daftar = document.getElementById("daftar-pesanan");
    const totalElement = document.getElementById("total");

    let total = 0;

    daftar.innerHTML = "";

    pesanan.forEach((item, index) => {
        total += item.harga;

        daftar.innerHTML += `
            <p>
                ${index + 1}. ${item.nama}
                - Rp${formatRupiah(item.harga)}
                <button onclick="hapusPesanan(${index})">
                    Hapus
                </button>
            </p>
        `;
    });

    if (pesanan.length === 0) {
        daftar.innerHTML = "Belum ada pesanan.";
    }

    totalElement.innerText = formatRupiah(total);
}

// HAPUS PESANAN
function hapusPesanan(index) {
    pesanan.splice(index, 1);

    tampilkanPesanan();
}

// CHECKOUT WHATSAPP
function checkout() {

    if (pesanan.length === 0) {
        alert("Silakan pilih makanan terlebih dahulu!");
        return;
    }

    let pesanWA = "Halo Katering Lezat, saya ingin memesan:\n\n";

    let total = 0;

    pesanan.forEach((item, index) => {

        pesanWA +=
            (index + 1) + ". " +
            item.nama +
            ": Rp" + formatRupiah(item.harga) +
            "\n";

        total += item.harga;
    });

    pesanWA +=
        "\nTotal Pesanan: Rp" +
        formatRupiah(total);

    pesanWA += "\n\nTerima kasih.";

    // NOMOR WHATSAPP KATERING
    let nomorWA = "62895630398670";

    let linkWA =
        "https://wa.me/" +
        nomorWA +
        "?text=" +
        encodeURIComponent(pesanWA);

    window.open(linkWA, "_blank");
}

// TAMPILKAN KERANJANG SAAT PERTAMA DIBUKA
document.addEventListener("DOMContentLoaded", function() {
    tampilkanPesanan();
});
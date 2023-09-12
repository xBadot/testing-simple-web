document.querySelectorAll(".btnDetail").forEach((item) => {
  item.addEventListener("click", (e) => {
    let parent = e.target.parentNode.parentNode;

    let gambar = parent.querySelector(".card-img-top").src;
    let harga = parent.querySelector(".harga").innerHTML;
    let judul = parent.querySelector(".card-text").innerHTML;
    let deskripsi = parent.querySelector(".deskripsi")
      ? parent.querySelector(".deskripsi").innerHTML
      : `<i>tidak ada informasi yg tersedia</i>`;

    let tombolModal = document.querySelector(".btnModal");
    tombolModal.click();

    document.querySelector(".modalTitle").innerHTML = judul;

    let image = document.createElement("img");
    image.src = gambar;
    image.classList.add("w-auto");
    document.querySelector(".modalImage").innerHTML = "";
    document.querySelector(".modalImage").appendChild(image);
    document.querySelector(".modalDeskripsi").innerHTML = deskripsi;
    document.querySelector(".modalHarga").innerHTML = harga;

    const noHp = "6289619935353";
    let pesan = `https://api.whatsapp.com/send?phone=${noHp}&text=Halo bang, saya mau pesan produk ini ${gambar}`;
    document.querySelector(".btnBeli").href = pesan;
  });
});

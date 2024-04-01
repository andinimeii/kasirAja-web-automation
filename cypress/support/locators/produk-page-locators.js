module.exports = {
    datatestid: {
        kodeProduk_input: '//*[@id="kode"]',
        // produk_menu: '//a[@href="/products"]//div[@class="css-ewi1jp"]', //ini kasirAja demo
        produk_menu: '//a[@href="/products"]',
        produk_add: '//a[@href="/products/create"]',
        namaProduk_input: '//*[@id="nama"]',
        descProduk_input: '//*[@id="deskripsi"]',
        hargaBeli_input: '//*[@id="harga beli"]',
        hargaJual_input: '//*[@id="harga jual"]',
        stok_input: '//*[@id="stok"]',
        kategoriProduk_btn: '//*[@id="kategori"]',
        kategori_input: '//*[@id="chakra-modal--body-25"]/table/tbody/tr[1]/td',
        // kategori_input: '//*[@id="kategori" and @value = "Snack"]',
        add_button: '//button[contains(text(), "simpan")]',
        // verify_kategori: '//*[contains(text(), "Snack")]'
        list_button: '//*[@id="menu-button-19"]',
        edit_button: '//*[@id="menu-list-19-menuitem-20"]',
        delete_button: '//*[@id="menu-list-19-menuitem-21"]',
        confirm_button: '//button[contains(text(), "Delete")]'
    }
}
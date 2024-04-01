module.exports = {
    datatestid: {
        kategori_menu: '//a[@href="/categories"]',
        kategori_add: '//a[@href="/categories/create"]',
        namaKategori_input: '//*[@id="nama"]',
        descKategori_input: '//*[@id="deskripsi"]',
        add_button: '//button[contains(text(), "simpan")]',
        // verify_kategori: '//*[contains(text(), "Snack")]'
        // list_button: '//*[@id="menu-button-19"]',
        list_button: '//*[@id="menu-button-17"]',
        // edit_button: '//*[@id="menu-list-19-menuitem-16"]',
        edit_button: '//*[@id="menu-list-17-menuitem-18"]', 
        delete_button: '//*[@id="menu-list-17-menuitem-19"]',
        confirm_button: '//button[contains(text(), "Delete")]'
    }
}
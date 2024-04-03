module.exports = {
    datatestid: {
        sales_menu: '//a[@href="/sales"]',
        salesadd_menu: '//a[@href="/sales/create"]',
        product_menu: '//button[contains(text(), "produk")]',
        product_add: '//*[@id="chakra-modal--body-31"]/table/tbody/tr',
        total: '//*[@id="root"]/div/div/div[2]/div[2]/div/div[2]/div[2]/table/tbody/tr/td[4]/input',
        removeCustomer: '(//div[@class="chakra-input__right-addon css-7nrq"])[1]',
        pay_button: '//button[contains(text(), "Bayar")]',
        confirm_button: '//button[contains(text(), "Ya")]',
        close_button: '//button[contains(text(), "tutup")]',
        detail_button: '//*[@id="root"]/div/div/div[2]/div[2]/div[2]/table/tbody/tr[1]//a[contains(@href, "detail")]'
    }
}
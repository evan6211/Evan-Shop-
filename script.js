const products = [
    { id: 1, name: "HP Realmi Note 50", category: "elektronik", price: 1400000, img: "hp.png", page: "hp.html" },
    { id: 2, name: "Lenovo IdeaPad Slim 5", category: "elektronik", price: 11300000, img: "laptop.jpg", page: "laptop.html"},
    { id: 3, name: "Xiaomi Redmi Watch 5 Active", category: "elektronik", price: 450000, img: "smartwatch.jpg", page:"smartwatch.html" },
    { id: 4, name: "Kemeja Pria", category: "fashion", price: 50000, img: "kemeja.jpg", page:"kemaja.html" },
    { id: 5, name: "Sepatu Casual Pria Sneakers G° Concept by Gino Mariani Everett Black", category: "fashion", price: 1600000, img: "sepatu.jpg", page:"sepatu.html" },
    { id: 6, name: "Jam Tangan Kulit wanita", category: "fashion", price: 60000, img: "jam.jpg", page:"jam.html" },
    { id: 7, name: "HEADSET BLUETOOTH EARPHONE TWS I12 MAKARON INPODS", category: "aksesoris", price: 70000, img: "earphone.jpg", page:"earphone.html" },
    { id: 8, name: "Snapback Topi Baseball Dewasa Merah Bordir Mini Bola Baseball", category: "fashion", price: 170000, img: "topi.jpg", page:"topi.html" },
    { id: 9, name: "Mouse Robot M360 Wireless USB 2.4G & Bluetooth 5.0 Dual Mode", category: "aksesoris", price: 125000, img: "mouse.jpg", page:"mouse.html" },
    { id: 10, name: "Kacamata XIRAN Fashion Outdoor Sunglasses UV400 - P3016 Keren", category: "fashion", price: 25000, img: "kacamata.jpg", page:"kacamata.html" },
    { id: 11, name: "Keyboard Mechanical", category: "aksesoris", price: 220000, img: "keyboard.png" , page: "keyboard.html" },
    { id: 12, name: "GST Dompet Pria Full Kulit Asli", category: "fashion", price: 300000, img: "dompet.jpg", page:"dompet.html" },
    { id: 13, name: "Powerbank 20.000 mAh 22.5W - SKU A1388 - Garansi Resmi 18 Bulan", category: "elektronik", price: 300000, img: "powerbank.jpg", page:"powerbank.html" },
    { id: 14, name: "Case IPhone 13 Pro Max Mini Original Super Thin Slim Cover Casing - Clear, ip 13 Mini", category: "aksesoris", price: 195000, img: "casing.jpg", page:"casing.html" },
    { id: 15, name: "Tas Ransel scapro", category: "fashion", price: 180000, img: "tas.png", page:"tas.html" },
    { id: 16, name: "jaket bomber", category: "fashion", price: 145000, img: "jaket.jpg", page: "jaket.html" },
    { id: 17, name: "kamera DSLMIRRORLESS FUJIFILM X-A5 / XA5 KIT 15-45MM - PAKET 16GB", category: "aksesoris", price: 5000000, img: "kamera.jpg", page: "kamera.html" },
    { id: 18, name: "gitar akustik elektrik mandalika", category: "aksesoris", price: 750000, img: "gitar.jpg", page: "gitar.html" },
    { id: 19, name: "headset gaming Gamen", category: "elektronik", price: 200000, img: "headset.jpg", page: "headset.html" },
    { id: 20, name: "Kipas angin Advance SF-16A", category: "elektronik", price: 191000, img: "kipas.jpg", page: "kipas.html" },
];

const productList = document.getElementById("productList");
const searchBar = document.getElementById("searchBar");
const categoryFilter = document.getElementById("categoryFilter");
const priceFilter = document.getElementById("priceFilter");

function displayProducts() {
    let filteredProducts = products.filter(product => {
        let matchesSearch = searchBar.value === "" || product.name.toLowerCase().includes(searchBar.value.toLowerCase());
        let matchesCategory = categoryFilter.value === "" || product.category === categoryFilter.value;
        let matchesPrice = priceFilter.value === "" || product.price <= parseInt(priceFilter.value);
        return matchesSearch && matchesCategory && matchesPrice;
    });

    productList.innerHTML = "";
    filteredProducts.forEach(product => {
        let productCard = `
            <div class="col-md-4 mb-4">
                <div class="card">
                    <img src="${product.img}" class="card-img-top" alt="${product.name}">
                    <div class="card-body">
                        <h5 class="card-title">${product.name}</h5>
                        <p class="card-text">Rp${product.price.toLocaleString()}</p>
                        <a href="${product.page}" class="btn btn-primary">Detail</a>
                    </div>
                </div>
            </div>
        `;
        productList.innerHTML += productCard;
    });
}

searchBar.addEventListener("input", displayProducts);
categoryFilter.addEventListener("change", displayProducts);
priceFilter.addEventListener("input", displayProducts);

displayProducts();
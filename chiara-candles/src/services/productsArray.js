const productos = [
    {
        "prodID": 0,
        "prodName": "Vela Concha",
        "prodPrice": 1500,
        "category": "velas",
        "prodStock": 10,
        "prodImg": "../media/product-0.webp"
    },
    {
        "prodID": 1,
        "prodName": "Vela Cubo",
        "prodPrice": 2000,
        "category": "velas",
        "prodStock": 15,
        "prodImg": "../media/product-1.webp"
    },
    {
        "prodID": 2,
        "prodName": "Corta Pabilo",
        "prodPrice": 700,
        "category": "accesorios",
        "prodStock": 20,
        "prodImg": "../media/product-2.webp"
    },
    {
        "prodID": 3,
        "prodName": "Apaga Velas",
        "prodPrice": 850,
        "category": "accesorios",
        "prodStock": 30,
        "prodImg": "../media/product-3.webp"
    },
    {
        "prodID": 4,
        "prodName": "Maxi Vela",
        "prodPrice": 1300,
        "category": "velas",
        "prodStock": 50,
        "prodImg": "../media/product-4.webp"
    }
];


function getProducts() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(productos);
        }, 1000);
    });
};

function getProductInfo(productID) {
    return new Promise((resolve, reject) => {
        const productDetail = productos.find((item) => item.prodID === parseInt(productID));
        setTimeout(() => {
            resolve(productDetail);
        }, 1000)
    });
};

function getCategoryInfo(prodCatUrl){
    return new Promise((resolve, reject) => {
        const categoryDetail = productos.filter((item) => item.category.toLowerCase() === prodCatUrl.toLowerCase());
        setTimeout(() => {
            resolve(categoryDetail);
        }, 1000)
    });
};

export {getProducts, getProductInfo, getCategoryInfo}
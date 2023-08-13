import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, doc, addDoc, getDoc, query, where, writeBatch } from "firebase/firestore";

const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: "chiara-candles.firebaseapp.com",
    projectId: process.env.REACT_APP_PRJ_ID,
    storageBucket: "chiara-candles.appspot.com",
    messagingSenderId: "618230433775",
    appId: "1:618230433775:web:20181a04a3808a77e6581a",
    measurementId: "G-EC0P7TP1VC"
};

const appFirebase = initializeApp(firebaseConfig);
const db = getFirestore(appFirebase);

async function getProducts() {
    const documentsSnapshot = await getDocs(collection(db, "products"));
    const documents = documentsSnapshot.docs;
    if (documents.length === 0) {
        throw new Error("Error al conectarse con la base de datos");
    } else {
        return documents.map((item) => ({ ...item.data(), id: item.id }));
    };
};

async function getProductInfo(id) {
    const docRef = doc(db, "products", id);
    const docSnapshot = await getDoc(docRef);
    if (docSnapshot.exists()) {
        return { ...docSnapshot.data(), id: docSnapshot.id };
    } else {
        throw new Error("Producto no encontrado");
    };
};

async function getCategoryInfo(prodCatUrl) {
    const q = query(collection(db, "products"), where("category", "==", prodCatUrl));
    const querySnapshot = await getDocs(q);
    const documents = querySnapshot.docs;
    if (documents.length === 0) {
        throw new Error("No se encontraron productos en la categoria");
    } else {
        return documents.map((item) => ({ ...item.data(), id: item.id }));
    };
};

async function checkOrderStock(orderData) {
    let status=false
    const batch = writeBatch(db); 
    const prodData = await getProducts();
    orderData.items.forEach((item) => {
        const indexUpdate = prodData.findIndex((prod) => item.id === prod.id);
        if (item.qty > prodData[indexUpdate].prodStock) {
            throw new Error(`Sin Stock del producto ${item.prodName}`);
        };
        const newStock = prodData[indexUpdate].prodStock - item.qty;
        const docRef = doc(db, "products", item.id);
        batch.update(docRef, {"prodStock": newStock});
        status=true
    });
    await batch.commit();
    return (status)
    
};

async function createOrder(orderData) {
    const docCreated = await addDoc(collection(db, "orders"), orderData);
    return (docCreated.id)
};

async function getOrder(id) {
    const docSnapshot = await getDoc(doc(db, "orders", id));
    if (docSnapshot.exists()) {
        return { ...docSnapshot.data(), id: docSnapshot.id };
    } else {
        throw new Error("Orden no encontrada");
    };
};

export { getProducts, getProductInfo, getCategoryInfo, createOrder, getOrder, checkOrderStock }
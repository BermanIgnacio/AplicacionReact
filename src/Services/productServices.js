import firebase from "../Config/firebase"
//import instace from "../Config/axios"

export async function getAll(page) {
    //const querySnapshot = await firebase.firestore().collection("productos").limit(cant).get()
    const querySnapshot = await firebase.firestore().collection(`productos-page${page}`).get()
    return querySnapshot.docs;
}

export async function getByIdProduct(id,page) {
    const querySnapshot = await firebase.firestore().doc(`productos-page${page}/${id}`).get()
    return querySnapshot;
}

export async function setUpdate(id,payload,page) {
    return await firebase.firestore().doc(`productos-page${page}/${id}`).set(payload)
}

export async function deleteProduct(id,page) {
    return await firebase.firestore().doc(`productos-page${page}/${id}`).delete()
}

export async function getProductosNuevos() {
    const querySnapshot = await firebase.firestore().collection("productos-new").orderBy("date", "desc").limit(10).get()
    return querySnapshot.docs;
}

export async function newProduct(data) {
    return await firebase.firestore().collection("productos-new").add(data);
}

export async function getAllPopulares() {
    const querySnapshot = await firebase.firestore().collection("productosPopulares").get()
    return querySnapshot.docs;
}
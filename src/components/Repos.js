import firebase from "firebase";

export const firebaseDb = firebase.firestore();
export const fetchAll = async (): Promise<Array<any>> => {
    const colRef = firebaseDb.collection("examples");
    const snapshots = await colRef.get();
    return snapshots.docs;
};

export const save = async (data: any) => {
    return firebaseDb.collection("examples").doc(data.id).set(data);
};

export const remove = async (id: string) => {
    return firebaseDb.collection("examples").doc(id).delete();
};
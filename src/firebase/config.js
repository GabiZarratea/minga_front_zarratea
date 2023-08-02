// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage, ref, uploadBytes } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBud83nVmdenFYFNeKvpLDeIbTg797OH7A",
  authDomain: "minga-mh.firebaseapp.com",
  projectId: "minga-mh",
  storageBucket: "minga-mh.appspot.com",
  messagingSenderId: "409609509128",
  appId: "1:409609509128:web:38a177838f9c7f385534bd",
  measurementId: "G-28F7CE1S83",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const storage = getStorage(app);
// export const firestore = getFirestore(app);

export async function uploadPicture(file, userId) {
  try {
    // Save the image to Firebase Storage with the user's UID as the folder name
    const storageRef = ref(storage, `users/${userId}/uploadedPicture`);
    const snapshot = await uploadBytes(storageRef, file);

    // Optionally, you can store the image URL or metadata in Firestore database for future retrieval
    // For example:
    const imageUrl = await snapshot.ref.getDownloadURL();
    await firestore.collection("users").doc(userId).update({ photoUrl: imageUrl });

    console.log("Image uploaded successfully:", imageUrl);
  } catch (error) {
    console.error("Error uploading image:", error);
    throw error;
  }
}

// export function uploadPicture(file, userUid) {
//   const storageRef = ref(storage, `users/${userUid}/uploadedPicture`);
//   uploadBytes(storageRef, file).then((snapshot) => {
//     console.log(snapshot);
//   });
// }
// export function uploadPicture(file) {
//   const storageRef = ref(storage, `uploadedPicture`);
//   uploadBytes(storageRef, file).then((snapshot) => {
//     console.log(snapshot);
//   });
// }

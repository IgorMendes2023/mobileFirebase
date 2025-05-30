// src/services/credenciaisFirebase.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyD-Y-i4QQ60u8x7HT4-KdB94n2i34ozol8",
  authDomain: "apppiunipam-701bb.firebaseapp.com",
  projectId: "apppiunipam-701bb",
  storageBucket: "apppiunipam-701bb.firebasestorage.app",
  messagingSenderId: "593872256866",
  appId: "1:593872256866:web:9fdd78632c553c5e2ab63b"
};

// Inicializa o App
const appFirebase = initializeApp(firebaseConfig);

// **NOVO**: inicializa e exporta o Firestore
export const db = getFirestore(appFirebase);

// Mantém export default do App (útil caso queira)
export default appFirebase;

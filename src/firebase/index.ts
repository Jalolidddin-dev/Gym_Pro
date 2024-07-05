import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
const firebaseConfig = {
	apiKey: 'AIzaSyBRbLmUP2nGkt8jujyaAiIqzAeojuqaies',
	authDomain: 'gym-pro-c97f3.firebaseapp.com',
	projectId: 'gym-pro-c97f3',
	storageBucket: 'gym-pro-c97f3.appspot.com',
	messagingSenderId: '638751119786',
	appId: '1:638751119786:web:e8cf17dc8c5be4a6e173d3',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

const auth = getAuth(app)
const db = getFirestore(app)

export { auth, db }

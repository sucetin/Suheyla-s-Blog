import firebase from "firebase";

const firebaseConfig = {
	apiKey: "AIzaSyCoDTHXKWNSlZngVQ0LlzY_KLuHvrqrhno",
	authDomain: "blogapp-10210.firebaseapp.com",
	measurementId: "G-BXCG7NQ574",
	projectId: "blogapp-10210",
	storageBucket: "blogapp-10210.appspot.com",
	messagingSenderId: "478115975154",
	appId: "1:478115975154:web:73c206134e8465d8f2256b",
};
try {
	firebase.initializeApp(firebaseConfig);
} catch (err) {
	if (!/already exists/.test(err.message)) {
		console.error("Firebase initialization error", err.stack);
	}
}
const fire = firebase;
export default fire;

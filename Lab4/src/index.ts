//import { App } from './app';
import './main.scss';
//import { Notes } from './Notes';
import firebase from 'firebase';
import { firebaseConfig } from './config'



//const app = new App();
//const notes = new Notes();

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();


const note = {
    title: 'Second note',
    content: 'Second test note from code',
}

// addNote(note);
async function addNote(note: any) {
    const res = await db.collection('notes').add(note);

}

// deleteNote('7hLbT6g33V38A0hU5WiG')
async function deleteNote(id: string) {
    const res = await db.collection('notes').doc(id).delete();
}

// updateNote(
//     'fcOqaNjrjvxIUObVwowE',
//     {
//         title: 'updated note',
//         content: 'Never mind'
//     }
// )
async function updateNote(id: string, note: any) {
    const res = await db.collection('notes').doc(id).update(note);
}

getNote('fcOqaNjrjvxIUObVwowE').then(res => console.log(res))
async function getNote(id: string) {
    return db.collection('notes').doc(id).get()
}
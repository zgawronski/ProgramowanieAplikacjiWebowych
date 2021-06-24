import firebase from 'firebase';
import { firebaseConfig } from './config';
import { IAppStorage } from './interfaces/IAppStorage';

export class AppFirebase {
    firebaseStart: any;
    db: any;

    constructor() {

        if (!firebase.apps.length) {
            this.firebaseStart = firebase.initializeApp(firebaseConfig);
        } else {
            this.firebaseStart = firebase.app();
        }
        this.db = this.firebaseStart.firestore();
    }


    async addNote(note: IAppStorage) {
        await this.db.collection('notes').add(note);
        const roger = 'ok' + note;
        return roger;

    }


    async deleteNote(id: string) {
        await this.db.collection('notes').doc(id).delete();
    }


    async updateNote(id: string, note: IAppStorage) {
        await this.db.collection('notes').doc(id).update(note);
    }


    async getNote(id: string) {
        return this.db.collection('notes').doc(id).get().then((res: any) => res.data())
    }

    async getNotes() {

        const collection = await this.db.collection('notes').get().then((res: any) => ({ size: res.size, docs: res.docs }));

        return collection.docs.map((doc: any) => ({ id: doc.id, data: doc.data() }));

    }


}
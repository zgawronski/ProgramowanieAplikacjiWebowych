import { AppStorage } from './appStorage';
import { IAppStorage } from './interfaces/IAppStorage';
const appStorage = new AppStorage();
export class Notes {
    constructor() {
        this.loadFromStorage();
    };

    private loadFromStorage() {
        const data = localStorage.getItem('note');
        if (data) {
            const noteColection = JSON.parse(data) as any[];
            noteColection.forEach(x => this.newStickyNote(x));
        }
    }


<<<<<<< HEAD
    newStickyNote(newNote: string = '') {
=======
    newStickyNote(newNote: any): IAppStorage {
>>>>>>> f4af6522cc0a42224f769b2d86895afa7f334264
        const noteWindow = document.createElement('div');
        noteWindow.className = 'noteWind';
        noteWindow.setAttribute('id', 'noteWindId');



        //const newNoteTitle = appStorage.getNote(newNote);

        const container = document.getElementById('container');

        const noteTitle = document.createElement('div');

        //noteTitle.innerHTML = newNoteTitle;
        container.appendChild(noteWindow);
        noteWindow.appendChild(noteTitle);

    }
}
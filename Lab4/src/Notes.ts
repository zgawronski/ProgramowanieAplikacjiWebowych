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


    newStickyNote(newNote: any): IAppStorage {
        const noteWindow = document.createElement('div');
        noteWindow.className = "noteWind";
        noteWindow.setAttribute("id", "noteWindId");



        //const newNoteTitle = appStorage.getNote(newNote);

        const container = document.getElementById('container');

        const noteTitle = document.createElement('div');

        //noteTitle.innerHTML = newNoteTitle;
        container.appendChild(noteWindow);
        noteWindow.appendChild(noteTitle);

    }
}
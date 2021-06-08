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


    newStickyNote(newNote: IAppStorage) {
        const noteWindow = document.createElement('div');
        noteWindow.className = 'noteWind';
        noteWindow.setAttribute('id', 'noteWindId');
        const container = document.getElementById('container');

        const noteTitle = document.createElement('h1');
        const noteContent = document.createElement('h2');
        const noteDate = document.createElement('h3');
        noteTitle.innerHTML = newNote.title;
        noteContent.innerHTML = newNote.content;
        noteDate.innerHTML = newNote.dateOfNote;
        container.appendChild(noteWindow);
        noteWindow.appendChild(noteTitle);
        noteWindow.appendChild(noteContent);
        noteWindow.appendChild(noteDate);
    }
}
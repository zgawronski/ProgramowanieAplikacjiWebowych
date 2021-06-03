import { IAppStorage } from './interfaces/IAppStorage';
export class AppStorage {
    private stickiNotes: IAppStorage[] = [];

    saveData(newNote: IAppStorage) {
        this.stickiNotes.push(newNote);
        localStorage.setItem('note', JSON.stringify(this.stickiNotes));
        console.log(this.stickiNotes);

    }

    constructor() {
        this.addNote();
    };


    async addNote() {
        const buttonAdd = document.getElementById('AddButton');
        buttonAdd.addEventListener('click', async (ev: Event) => {
            const takeTitle = <HTMLInputElement>document.getElementById('AddNote');
            const takeContent = <HTMLInputElement>document.getElementById('content');
            const contentNote = takeContent.value;
            const title = takeTitle.value;
            if ((title === '') || (this.getNote(title)) || (title === 'null')) { }
            else {
                takeTitle.value = '';
                takeContent.value = '';
            }

            return {
                title,
                contentNote
            }
        });


        const notatka: IAppStorage = {
            id: 1,
            title: buttonAdd.title,
            content: buttonAdd.contentNote,
            dateOfNote: new Date().toDateString(),
        }
        this.saveData(notatka)

    }

    private getNote(newNote: string) {
        let nameExist = false;
        const data = localStorage.getItem('note');
        if (data != null) {
            const noteColection = JSON.parse(data) as any[];
            noteColection.forEach((x) => {
                if (x.toLowerCase() == newNote.toLowerCase())
                    nameExist = true;
            });
            return nameExist;
        }
    }

}



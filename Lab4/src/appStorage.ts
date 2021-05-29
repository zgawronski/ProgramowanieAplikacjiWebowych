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
            const title = takeTitle.value;
            if ((title === '') || (this.getNote(title)) || (title === 'null')) { }
            else {
                takeTitle.value = '';
            }

            return title
        });


        const notatka: IAppStorage = {
            id: 1,
            title: buttonAdd.title,
            content: 'buttonAdd.content',
            dateOfNote: new Date().toDateString(),
        }

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



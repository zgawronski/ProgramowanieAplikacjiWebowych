import { IAppStorage } from './interfaces/IAppStorage';
export class AppStorage {
    private stickiNotes: IAppStorage[] = [];
    //zapis do localstorage
    saveData(newNote: IAppStorage) {
        this.stickiNotes.push(newNote);
        localStorage.setItem('note', JSON.stringify(this.stickiNotes));
        console.log(this.stickiNotes);

    }

    constructor() {
        this.addNote('note');

    };


    async addNote(note: any) {
        const buttonAdd = document.getElementById('AddButton');
        buttonAdd.addEventListener('click', async (ev: Event) => {
            const takeTitle = <HTMLInputElement>document.getElementById('AddNote');
            const takeContent = <HTMLInputElement>document.getElementById('content');
            const contentNote = takeContent.value;
            const title = takeTitle.value;
            if ((title === '') || (title === 'null')) { }
            else {
                await title;
                await contentNote;
                takeTitle.value = '';
                takeContent.value = '';
            }

            return {
                note
            }
        });
        console.log();

        //interface notatki
        const notatka: IAppStorage = {
            id: 1,
            title: note.title,
            content: note.contentNote,
            dateOfNote: new Date().toDateString(),
        }
        this.saveData(notatka)

        console.log(notatka)
    }

    // private getNote(newNote: string) {
    //     let nameExist = false;
    //     const data = localStorage.getItem('note');
    //     if (data != null) {
    //         const noteColection = JSON.parse(data) as any[];
    //         noteColection.forEach((x) => {
    //             if (x.toLowerCase() == newNote.toLowerCase())
    //                 nameExist = true;
    //         });
    //         return nameExist;
    //     }
    // }

}




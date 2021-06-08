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

    // zczytywanie notatki za pomocą buttona
    async addNote(note: any) {
        const buttonAdd = document.getElementById('AddButton');
        buttonAdd.addEventListener('click', async (ev: MouseEvent) => {
            const takeTitle = <HTMLInputElement>document.getElementById('AddNote');
            const takeContent = <HTMLInputElement>document.getElementById('content');
            const contentNote = takeContent.value;
            const title = takeTitle.value;
            if ((title === '') || (title === 'null')) { }
            else {

                //interface notatki
                const notatka: IAppStorage = {
                    id: 1 + this.stickiNotes.length,
                    title: title,
                    content: contentNote,
                    dateOfNote: new Date().toDateString(),
                }
                this.saveData(notatka)

                takeTitle.value = '';
                takeContent.value = '';
            }

            // return {
            //     note
            // }
        });


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




import { IAppStorage } from './interfaces/IAppStorage';
import { Notes } from './Notes';
export class AppStorage {
    private stickiNotes: IAppStorage[] = [];
    //zapis do localstorage
    saveData(newNote: IAppStorage) {
        const checker = JSON.parse(localStorage.getItem('note')) as IAppStorage[];
        if (checker != null) {
            checker.forEach((x: IAppStorage) => this.stickiNotes.push(x));
        }
        this.stickiNotes.push(newNote);
        localStorage.setItem('note', JSON.stringify(this.stickiNotes));
        const containerOld = document.getElementById('container');
        containerOld.innerHTML = '';
        const refresher = new Notes();
    }

    constructor() {
        this.addNote();
    }

    // zczytywanie notatki za pomocą buttona
    async addNote() {
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

        });
    }

}




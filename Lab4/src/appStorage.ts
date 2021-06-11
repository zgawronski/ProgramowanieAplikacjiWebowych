import { IAppStorage } from './interfaces/IAppStorage';
import { Notes } from './Notes';
export class AppStorage {

    constructor() {
        this.addNote();
    }

    //zapis do localstorage
    saveData(newNote: IAppStorage) {
        const stickiNotes: IAppStorage[] = [];
        const checker = JSON.parse(localStorage.getItem('note')) as IAppStorage[];
        if (checker !== null) {
            checker.forEach((x: IAppStorage) => stickiNotes.push(x));
        }
        stickiNotes.push(newNote);
        localStorage.setItem('note', JSON.stringify(stickiNotes));
        const containerOld = document.getElementById('container');
        containerOld.innerHTML = '';
        const refresher = new Notes();
    }


    // zczytywanie notatki za pomocą buttona
    async addNote() {
        const buttonAdd = document.getElementById('AddButton');
        buttonAdd.addEventListener('click', async (ev: MouseEvent) => {
            const takeTitle = <HTMLInputElement>document.getElementById('AddNote');
            const takeContent = <HTMLInputElement>document.getElementById('content');
            const contentNote = takeContent.value;
            const title = takeTitle.value;
            const tablica = JSON.parse(localStorage.getItem('note')) as IAppStorage[];
            let howMany = 0;
            if (tablica !== null) {
                howMany = tablica.length;
            } else {
                howMany = 0;
            }
            if ((title === '') || (title === 'null')) { }
            else {

                //interface notatki
                const notatka: IAppStorage = {
                    id: 1 + howMany,
                    title: title,
                    content: contentNote,
                    dateOfNote: new Date().toDateString(),
                }
                this.saveData(notatka);
                console.log(notatka);

                takeTitle.value = '';
                takeContent.value = '';
            }

        });
    }

}




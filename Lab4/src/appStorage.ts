export class AppStorage {

    constructor() {
        this.addNote();
    };

    async addNote() {
        const buttonAdd = document.getElementById('AddButton');
        buttonAdd.addEventListener('click', async (ev: Event) => {
            const takeFromInput = <HTMLInputElement>document.getElementById('AddNote');
            const addNote = takeFromInput.value;
            if ((addNote === '') || (this.getNote(addNote)) || (addNote === 'null')) { }
            else {
                takeFromInput.value = '';
            }
            this.saveData(addNote);
            return addNote
        });

        const inputAddNote = document.getElementById('AddNote');
        inputAddNote.addEventListener('keydown', async (e) => {
            const takeFromInput = <HTMLInputElement>document.getElementById('AddNote');
            const addNote = takeFromInput.value;
            if ((addNote === '') || (this.getNote(addNote)) || (addNote === 'null')) { }
            else {
                if (e.key === 'Enter') {
                    takeFromInput.value = '';
                    this.saveData(addNote);
                }
            }
            return addNote;
        })

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

    // tworzenie tablicy dla  przechowywania notatek
    private warehouse: any[] = [];

    // push notatki do tablicy
    saveData(addNote: any) {
        this.warehouse.push(addNote);
        localStorage.setItem('note', JSON.stringify(this.warehouse));
        console.log(this.warehouse);

    }

}



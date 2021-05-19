import { AppStorage } from './appStorage';
const appStorage = new AppStorage();
export class Notes {
    constructor(){
        this.loadFromStorage();
        this.addWindow();
    };

    addWindow(){
        const buttonAdd = document.getElementById('AddButton');
        buttonAdd.addEventListener('click', (ev: Event) => {
            const inputS = <HTMLInputElement>document.getElementById('AddNote');
            const addIn = inputS.value.toLowerCase();
            if((addIn === "") || (this.getNote(addIn)) || (addIn === "null")){}
            else{
                inputS.value = "";
            }
        });

        const inputSearch = document.getElementById("AddNote");
        inputSearch.addEventListener("keydown", async (e) => {
            const inputS = <HTMLInputElement>document.getElementById('AddNote');
            const addIn = inputS.value;
            if((addIn === "") || (this.getNote(addIn)) || (addIn === "null")){}
                else{
                    if(e.key === 'Enter'){
                        //console.log(addIn);
                        inputS.value = "";
                    }
                }
            })
    }



    private loadFromStorage(){
        const data = localStorage.getItem('note');
        if (data) {
            const noteColection = JSON.parse(data) as any[];
            noteColection.forEach( x => this.newStickyNote(x));
        }
    }

    private getNote(newNote: string){
        let nameExist = false;
        const data = localStorage.getItem('note');
        if (data != null){
            const noteColection = JSON.parse(data) as any[];
            noteColection.forEach((x) => {
                if (x.toLowerCase() == newNote.toLowerCase())
                    nameExist = true;
            });
            return nameExist;
        }
    }

    newStickyNote(newNote: string = ""){
        const noteWindow = document.createElement('div');
        noteWindow.className = "noteWind";
        noteWindow.setAttribute("id", "noteWindId");

        const newNoteTitle = appStorage.getNewNote(newNote);

        const container = document.getElementById('container');

        const noteTitle = document.createElement('div');

        noteTitle.innerHTML = newNoteTitle;
        container.appendChild(noteWindow);
        noteWindow.appendChild(noteTitle);

    }
}
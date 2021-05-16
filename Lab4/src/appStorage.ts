export class AppStorage {


    getNewNote(newNote: string) {
        const note = this.getNote(newNote);
        this.saveData(note);
        return note;
    }


    private magazyn: any[] = [];

    getNote(newNote: string) {
        const takeTitle = document.body.getElementsByClassName('AddNote');

    }

    saveData(note: any) {
        this.magazyn.push(note.title);
        localStorage.setItem('note', JSON.stringify(this.magazyn));
        //console.log(this.magazyn);
    }

}



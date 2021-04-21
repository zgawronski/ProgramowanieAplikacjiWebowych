export class Ui {
    constructor(){
        this.customWind('div');
    };

    customWind(element: any){
        const customWind = document.createElement('div');
        customWind.className = "cWind";
        customWind.setAttribute("id", "customWindId");
        document.body.appendChild(customWind);
    }

}
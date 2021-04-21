export class Ui {

    private customWindow: HTMLElement;
    private cityName: HTMLElement;
    private imgEl: HTMLImageElement;
    private description: HTMLElement;



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
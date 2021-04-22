import { App } from './app';
const app = new App();

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
        const dane1 = document.createElement('div');
        dane1.setAttribute("id", "description");
        const dane2 = document.createElement('h1');
        dane2.setAttribute("id", "temp");
        const dane3 = document.createElement('div');
        dane3.setAttribute("id", "location");
        const weatherDane = app.getCityInfo();

        //dane1.innerHTML = weatherDane.name;
        console.log(weatherDane);
        customWind.appendChild(dane1);
        customWind.appendChild(dane2);
        customWind.appendChild(dane3);
    }



}
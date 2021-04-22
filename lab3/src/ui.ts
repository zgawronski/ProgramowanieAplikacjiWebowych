import { App } from './app';
const app = new App();
export class Ui {

    constructor(){
        this.customWind('div');
    };

    async customWind(element: any){
        const customWind = document.createElement('div');
        customWind.className = "cWind";
        customWind.setAttribute("id", "customWindId");
        document.body.appendChild(customWind);
        const dane1 = document.createElement('div');
        dane1.setAttribute("id", "description");
        const dane2 = document.createElement('h3');
        dane2.setAttribute("id", "temp");
        const dane3 = document.createElement('div');
        dane3.setAttribute("id", "location");
        const weatherDane = await app.getCityInfo();


        dane1.innerHTML = weatherDane.name;
        dane2.innerHTML = "temperatura: " + Math.round(weatherDane.main.temp - 273.15).toString() + '&deg;';
        dane3.innerHTML = "wilgotność: " + weatherDane.main.humidity + "%";
        customWind.appendChild(dane1);
        customWind.appendChild(dane2);
        customWind.appendChild(dane3);

        // refresh okna - do zmiany
        const buttonRefresh = document.getElementById('SearchB');
        buttonRefresh.addEventListener('click',(ev: Event) => window.location.reload());
    }



}
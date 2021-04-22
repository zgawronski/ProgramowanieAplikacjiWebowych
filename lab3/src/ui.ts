import { App } from './app';
const app = new App();
export class Ui {

    constructor(){
        this.addWindow();
    };

    async addWindow(){

        const buttonAdd = document.getElementById('SearchB');
        buttonAdd.addEventListener('click',(ev: Event) => {
            const inputS = <HTMLInputElement>document.getElementById('SearchI');
            const addIn = inputS.value;
            if(addIn === ""){
                return }
            else{
                this.customWind('div');
                let inputSe = <HTMLInputElement>document.getElementById('SearchI');
                inputSe.value = "";
            }
        });
        const inputSearch = document.getElementById("SearchI");
        inputSearch.addEventListener("keydown", (e) => {
            const inputS = <HTMLInputElement>document.getElementById('SearchI');
            const addIn = inputS.value;
            if(addIn === ""){
                return }
                else{
                    if(e.key === 'Enter'){
                        this.customWind('div');
                        let inputSe = <HTMLInputElement>document.getElementById('SearchI');
                        inputSe.value = "";
                    }
                }
            })
    }
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
        const newImage = document.createElement('img');
        newImage.setAttribute("id", "newImage");
        const weatherDane = await app.getCityInfo();
        const srcImg =  `http://openweathermap.org/img/wn/${weatherDane.weather[0].icon}@2x.png`;
        newImage.src = srcImg;

        dane1.innerHTML = weatherDane.name;
        dane2.innerHTML = "temperatura: " + Math.round(weatherDane.main.temp - 273.15).toString() + '&deg;';
        dane3.innerHTML = "wilgotność: " + weatherDane.main.humidity + "%";

        customWind.appendChild(dane1);
        customWind.appendChild(newImage);
        customWind.appendChild(dane2);
        customWind.appendChild(dane3);
    }



}
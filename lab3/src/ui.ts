import { App } from './app';
const app = new App();
export class Ui {
    constructor(){
        this.loadFromStorage();
        this.addWindow();
    };

    async addWindow(){
        const buttonAdd = document.getElementById('SearchB');
        buttonAdd.addEventListener('click',async (ev: Event) => {
            const inputS = <HTMLInputElement>document.getElementById('SearchI');
            const addIn = inputS.value.toLowerCase();
            if((addIn === "") || (this.checkCityName(addIn)) || (addIn === "null")){}
            else{
                await this.customWind(addIn);
                inputS.value = "";
            }
        });

        const inputSearch = document.getElementById("SearchI");
        inputSearch.addEventListener("keydown", async (e) => {
            const inputS = <HTMLInputElement>document.getElementById('SearchI');
            const addIn = inputS.value;
            if((addIn === "") || (this.checkCityName(addIn)) || (addIn === "null")){}
                else{
                    if(e.key === 'Enter'){
                        await this.customWind(addIn);
                        //console.log(addIn);
                        inputS.value = "";
                    }
                }
            })
    }



    private loadFromStorage(){
        const data = localStorage.getItem('weather');
        if (data) {
            const cityColection = JSON.parse(data) as any[];
            cityColection.forEach(async x => await this.customWind(x));
        }
    }

    private checkCityName(cityName: string){
        let nameExist = false;
        const data = localStorage.getItem('weather');
        if (data != null){
            const cityColection = JSON.parse(data) as any[];
            cityColection.forEach((x) => {
                if (x.toLowerCase() == cityName.toLowerCase())
                    nameExist = true;
            });
            return nameExist;
        }
    }

    async customWind(cityName: string = ""){
        // if(cityName=""){
        // const inputSearch = <HTMLInputElement>document.getElementById('SearchI');
        // cityName = inputSearch.value;
        // }
        const customWind = document.createElement('div');
        customWind.className = "cWind";
        customWind.setAttribute("id", "customWindId");
        const dane1 = document.createElement('div');
        dane1.setAttribute("id", "description");
        const dane2 = document.createElement('div');
        dane2.setAttribute("id", "temp");
        const dane3 = document.createElement('div');
        dane3.setAttribute("id", "location");
        const dane4 =document.createElement('div');
        dane4.setAttribute("id", "airpress")
        const newImage = document.createElement('img');
        newImage.setAttribute("id", "newImage");
        const weatherDane = await app.getCityInfo(cityName);
        const srcImg =  `http://openweathermap.org/img/wn/${weatherDane.weather[0].icon}@2x.png`;
        newImage.src = srcImg;
        const container = document.getElementById('container');

        dane1.innerHTML = weatherDane.name;
        dane2.innerHTML = "temperatura: " + Math.round(weatherDane.main.temp - 273.15).toString() + '&deg;';
        dane3.innerHTML = "wilgotność: " + weatherDane.main.humidity + "%";
        dane4.innerHTML = "ciśnienie: " + weatherDane.main.pressure + "hPa";

        container.appendChild(customWind);
        customWind.appendChild(dane1);
        customWind.appendChild(newImage);
        customWind.appendChild(dane2);
        customWind.appendChild(dane3);
        customWind.appendChild(dane4);
    }
}
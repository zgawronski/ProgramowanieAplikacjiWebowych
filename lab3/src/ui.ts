import { App } from './app';
const app = new App();
export class Ui {
    constructor() {
        this.loadFromStorage();
        this.addWindow();
        // this.btnClose();
    };

    async addWindow() {
        const buttonAdd = document.getElementById('SearchB');
        buttonAdd.addEventListener('click', async (ev: Event) => {
            const inputS = <HTMLInputElement>document.getElementById('SearchI');
            const addIn = inputS.value.toLowerCase();
            if ((addIn === "") || (this.checkCityName(addIn)) || (addIn === "null")) { }
            else {
                await this.customWind(addIn);
                inputS.value = "";
            }
        });

        const inputSearch = document.getElementById("SearchI");
        inputSearch.addEventListener("keydown", async (e) => {
            const inputS = <HTMLInputElement>document.getElementById('SearchI');
            const addIn = inputS.value;
            if ((addIn === "") || (this.checkCityName(addIn)) || (addIn === "null")) { }
            else {
                if (e.key === 'Enter') {
                    await this.customWind(addIn);
                    //console.log(addIn);
                    inputS.value = "";
                }
            }
        })
    }



    private loadFromStorage() {
        const data = localStorage.getItem('weather');
        if (data) {
            const cityColection = JSON.parse(data) as any[];
            cityColection.forEach(async x => await this.customWind(x));
        }
    }

    private checkCityName(cityName: string) {
        let nameExist = false;
        const data = localStorage.getItem('weather');
        if (data != null) {
            const cityColection = JSON.parse(data) as any[];
            cityColection.forEach((x) => {
                if (x.toLowerCase() == cityName.toLowerCase())
                    nameExist = true;
            });
            return nameExist;
        }
    }

    async customWind(cityName: string = "") {
        const customWind = document.createElement('div');
        customWind.className = "cWind";
        customWind.id = cityName;
        const closeButton = document.createElement('button');
        closeButton.className = 'closeButton';
        closeButton.id = 'closeBtn_' + cityName;
        closeButton.onclick = (ev: Event) => {
            const btnId = ((ev.target as Element).id).replace('closeBtn_', '');
            const clsWindow = document.getElementById(btnId);
            clsWindow.remove();
            let getDel = JSON.parse(localStorage.getItem('weather'));
            const tablica: any[] = [];
            getDel.map((x: any) => {
                if (x === btnId) {

                } else {
                    tablica.push(x);
                }
            })
            if (localStorage.getItem('weather').length >= 1) {
                localStorage.setItem('weather', JSON.stringify(tablica));
            } else {
                localStorage.removeItem('weather');
            }
        }
        const dane1 = document.createElement('div');
        dane1.setAttribute("id", "description");
        const dane2 = document.createElement('div');
        dane2.setAttribute("id", "temp");
        const dane3 = document.createElement('div');
        dane3.setAttribute("id", "location");
        const dane4 = document.createElement('div');
        dane4.setAttribute("id", "airpress")
        const newImage = document.createElement('img');
        newImage.setAttribute("id", "newImage");
        const weatherDane = await app.getCityInfo(cityName);
        if (localStorage.getItem('weather') !== '') {
            const srcImg = `http://openweathermap.org/img/wn/${weatherDane.weather[0].icon}@2x.png`;
            newImage.src = srcImg;
        }
        const container = document.getElementById('container');

        dane1.innerHTML = weatherDane.name;
        dane2.innerHTML = "temperatura: " + Math.round(weatherDane.main.temp - 273.15).toString() + '&deg;';
        dane3.innerHTML = "wilgotność: " + weatherDane.main.humidity + "%";
        dane4.innerHTML = "ciśnienie: " + weatherDane.main.pressure + "hPa";
        closeButton.innerHTML = "X";

        container.appendChild(customWind);
        customWind.appendChild(closeButton);
        customWind.appendChild(dane1);
        customWind.appendChild(newImage);
        customWind.appendChild(dane2);
        customWind.appendChild(dane3);
        customWind.appendChild(dane4);
    }

    // btnClose() {
    //     if (localStorage.getItem('weather') !== null) {

    //         let btnClose = document.getElementById('closeBtn');

    //         btnClose.addEventListener('click', (ev: Event) => {
    //             console.log(ev);
    //             //let rmvWindow = document.getElementById();
    //             let d1 = document.getElementById('description');
    //             let d2 = document.getElementById('temp');
    //             let d3 = document.getElementById('location');
    //             let d4 = document.getElementById('airpress');
    //             let img = document.getElementById('newImage');
    //             //btnClose.removeChild(rmvWindow);
    //         })
    //     }
    // }

}
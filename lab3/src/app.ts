export class App {
    opwApiKey = '848eefdeeb4818cfa7b6b9fb9a281dea';
    // constructor() {
    //     this.getCity();
    // }
    async getCityInfo() {
        const inputSearch = <HTMLInputElement>document.getElementById('SearchI');
        const citySearch = inputSearch.value;
        const weather = await this.getWeather(citySearch);
        this.saveData(weather);
        return weather;
    }


    async getWeather(city: string): Promise<any> {
        const openWeatherUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${this.opwApiKey}`;
        const weatherResponse = await fetch(openWeatherUrl);
        const weatherData = await weatherResponse.json();

        console.log(weatherData);
        return weatherData;
    }

    // getCity(){
    //     const buttonSearch = document.getElementById('SearchB');
    //     buttonSearch.addEventListener('click',(ev: Event) => this.getCityInfo())
    // }

    saveData(data: any) {
        localStorage.setItem('weatherData', JSON.stringify(data));

    }
    
    getData() {
        const data = localStorage.getItem('weatherData');
        if (data) {
            return JSON.parse(data);
        } else {
            return {};
        }
    }
}

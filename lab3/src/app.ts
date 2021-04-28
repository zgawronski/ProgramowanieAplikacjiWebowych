export class App {
    opwApiKey = '848eefdeeb4818cfa7b6b9fb9a281dea';
    // constructor() {
    //     this.getCity();
    // }
    async getCityInfo(cityName: string) {
        //const inputSearch = <HTMLInputElement>document.getElementById('SearchI');
        //cityName = inputSearch.value;
        const weather = await this.getWeather(cityName);
        this.saveData(weather);
        return weather;
    }

    private magazyn: any[] = [];

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
        this.magazyn.push(data.name);
        localStorage.setItem('weather', JSON.stringify(this.magazyn));
    }


}

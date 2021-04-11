export class App {
    opwApiKey = '848eefdeeb4818cfa7b6b9fb9a281dea';
    constructor() {
        this.getData();
    }
    async getData() {
        const weather = await this.getWeather('chrzanów');
        this.saveData();
    }

    async getWeather(city: string): Promise<any> {
        const openWeatherUrl = 'http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${this.opwAPIKey}'
    }
}
export const AAA = 10;
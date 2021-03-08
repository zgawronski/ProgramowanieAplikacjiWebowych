class StatsApp {
    i1Input: HTMLInputElement;
    i2Input: HTMLInputElement;
    i3Input: HTMLInputElement;
    i4Input: HTMLInputElement;
    sumInput: HTMLInputElement;
    avgInput: HTMLInputElement;
    minInput: HTMLInputElement;
    maxInput: HTMLInputElement;

    constructor (){
        this.startApp();
    }
    startApp(){
        this.getInput()
        this.watchInputValues();
    }
    getInput(){
        this.i1Input = document.querySelector('#i1');
        this.i2Input = document.querySelector('#i2');
        this.i3Input = document.querySelector('#i3');
        this.i4Input = document.querySelector('#i4');
        this.sumInput = document.querySelector('#sum');
        this.avgInput = document.querySelector('#avg');
        this.minInput = document.querySelector('#min');
        this.maxInput = document.querySelector('#max');
    }
    watchInputValues(){
        this.i1Input.addEventListener('input', () => this.computeData());
        this.i2Input.addEventListener('input', () => this.computeData());
        this.i3Input.addEventListener('input', () => this.computeData());
        this.i4Input.addEventListener('input', () => this.computeData());
    }

    computeData(){
        const i1 = +this.i1Input.value;
        const i2 = +this.i2Input.value;
        const i3 = +this.i3Input.value;
        const i4 = +this.i4Input.value;
        const sum = i1 + i2 + i3 + i4;
        const avg = sum / 4;

        const min = Math.min(i1, i2, i3, i4);
        const max = Math.max(i1, i2, i3, i4);
        this.showStats(sum, avg, min, max);
    }

    showStats(sum: number, avg: number, min: number, max: number){
        this.sumInput.value = sum.toString();
        this.avgInput.value = avg.toString();
        this.minInput.value = min.toString();
        this.maxInput.value = max.toString();
    }
}

const statsApp = new StatsApp();




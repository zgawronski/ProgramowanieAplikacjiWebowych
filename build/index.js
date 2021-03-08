var StatsApp = /** @class */ (function () {
    function StatsApp() {
        this.startApp();
    }
    StatsApp.prototype.startApp = function () {
        this.getInput();
        this.watchInputValues();
    };
    StatsApp.prototype.getInput = function () {
        this.i1Input = document.querySelector('#i1');
        this.i2Input = document.querySelector('#i2');
        this.i3Input = document.querySelector('#i3');
        this.i4Input = document.querySelector('#i4');
        this.sumInput = document.querySelector('#sum');
        this.avgInput = document.querySelector('#avg');
        this.minInput = document.querySelector('#min');
        this.maxInput = document.querySelector('#max');
    };
    StatsApp.prototype.watchInputValues = function () {
        var _this = this;
        this.i1Input.addEventListener('input', function () { return _this.computeData(); });
        this.i2Input.addEventListener('input', function () { return _this.computeData(); });
        this.i3Input.addEventListener('input', function () { return _this.computeData(); });
        this.i4Input.addEventListener('input', function () { return _this.computeData(); });
    };
    StatsApp.prototype.computeData = function () {
        var i1 = +this.i1Input.value;
        var i2 = +this.i2Input.value;
        var i3 = +this.i3Input.value;
        var i4 = +this.i4Input.value;
        var sum = i1 + i2 + i3 + i4;
        var avg = sum / 4;
        var min = Math.min(i1, i2, i3, i4);
        var max = Math.max(i1, i2, i3, i4);
        this.showStats(sum, avg, min, max);
    };
    StatsApp.prototype.showStats = function (sum, avg, min, max) {
        this.sumInput.value = sum.toString();
        this.avgInput.value = avg.toString();
        this.minInput.value = min.toString();
        this.maxInput.value = max.toString();
    };
    return StatsApp;
}());
var statsApp = new StatsApp();

var StatsApp = /** @class */ (function () {
    function StatsApp() {
        this.startApp();
    }
    StatsApp.prototype.startApp = function () {
        this.getInput();
        this.watchInputValues();
    };
    StatsApp.prototype.createInput = function () {
        var _a, _b, _c, _d, _e;
        while ((_a = this.container) === null || _a === void 0 ? void 0 : _a.hasChildNodes()) {
            (_b = this.container) === null || _b === void 0 ? void 0 : _b.removeChild((_c = this.container) === null || _c === void 0 ? void 0 : _c.lastChild);
        }
        var temp = +this.i0Input.value;
        for (var i = 0; i < temp; i++) {
            var input = document.createElement("input");
            input.type = "text";
            input.id = "i" + (i + 1);
            (_d = this.container) === null || _d === void 0 ? void 0 : _d.appendChild(input);
            (_e = this.container) === null || _e === void 0 ? void 0 : _e.appendChild(document.createElement("br"));
        }
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
        this.container = document.getElementById("container");
        this.i0Input = document.querySelector('#i0');
    };
    StatsApp.prototype.watchInputValues = function () {
        var _this = this;
        this.i1Input.addEventListener('input', function () { return _this.computeData(); });
        this.i2Input.addEventListener('input', function () { return _this.computeData(); });
        this.i3Input.addEventListener('input', function () { return _this.computeData(); });
        this.i4Input.addEventListener('input', function () { return _this.computeData(); });
        this.i0Input.addEventListener('input', function () { return _this.createInput(); });
        this.i0Input.addEventListener('input', function () { return _this.computeData(); });
    };
    StatsApp.prototype.computeData = function () {
        var i1 = +this.i1Input.value;
        var i2 = +this.i2Input.value;
        var i3 = +this.i3Input.value;
        var i4 = +this.i4Input.value;
        var i0 = +this.i0Input.value;
        var sum = i1 + i2 + i3 + i4 + i0;
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

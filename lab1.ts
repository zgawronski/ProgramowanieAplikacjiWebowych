// class StatApp {
//     containerDOMElement: Element;
//     ui: UI;
//     stats: Statystyka;
//     constructor (containerDOMElement: Element){
//         if (!containerDOMElement){
//             throw new Error('musisz podać pojemnik dla programu StatApp');
//         }
//         this.containerDOMElement = containerDOMElement;
//         this.startApp();
//     }
//     startApp(): void{

//     }
// }

// const statApp = new StatApp(document.body);

let v1;
let v2;
let v3;
let v4;

const i1 = document.querySelector('i1')
const i2 = document.querySelector('i2')
const i3 = document.querySelector('i3')
const i4 = document.querySelector('i4')

function suma(a:number, b:number, c:number, d:number){
    return a+b+c+d;
}

let Simput = suma(+v1,+v2,+v3,v4);


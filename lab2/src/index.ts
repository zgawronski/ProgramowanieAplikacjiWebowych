const channel1: any[] = [];
const  clapAudio: HTMLAudioElement = document.querySelector('[data-sound="clap"]');
const  boomAudio: HTMLAudioElement = document.querySelector('[data-sound="boom"]');
const  hihatAudio: HTMLAudioElement = document.querySelector('[data-sound="hihat"]');
const  kickAudio: HTMLAudioElement = document.querySelector('[data-sound="kick"]');
const  openhatAudio: HTMLAudioElement = document.querySelector('[data-sound="openhat"]');
const  rideAudio: HTMLAudioElement = document.querySelector('[data-sound="ride"]');
const  snareAudio: HTMLAudioElement = document.querySelector('[data-sound="snare"]');
const  tinkAudio: HTMLAudioElement = document.querySelector('[data-sound="tink"]');
const  tomAudio: HTMLAudioElement = document.querySelector('[data-sound="tom"]');

const playChannel1Btn: HTMLButtonElement = document.querySelector('#playChannel1');

document.body.addEventListener('keypress', onKeyDown);
playChannel1Btn.addEventListener('click', onPlayChannel1)




function onKeyDown(ev: KeyboardEvent): void {

    const key = ev.key;
    const time = ev.timeStamp;

    channel1.push({
        key,
        time
    });

    playSound(key);
    console.log(channel1)
}

function playSound(key: string) {
    switch(key){
        case'q':
            clapAudio.currentTime = 0;
            clapAudio.play();
            break;
        case'w':
            boomAudio.currentTime = 0;
            boomAudio.play();
            break;
        case'e':
            hihatAudio.currentTime = 0;
            hihatAudio.play();
            break;
        case'a':
            kickAudio.currentTime = 0;
            kickAudio.play();
            break;
        case's':
            openhatAudio.currentTime = 0;
            openhatAudio.play();
            break;
        case'd':
            rideAudio.currentTime = 0;
            rideAudio.play();
            break;
        case'z':
            snareAudio.currentTime = 0;
            snareAudio.play();
            break;
        case'x':
            tinkAudio.currentTime = 0;
            tinkAudio.play();
            break;
        case'c':
            tomAudio.currentTime = 0;
            tomAudio.play();
            break;
    }
}

function onPlayChannel1(): void {
    playChannel1();
}

function playChannel1(): void{
    let prevTime = 0;
    channel1.forEach(sound => {
        const timeout = sound.time - prevTime;
        setTimeout(()=> playSound(sound.key), timeout);

    });
}

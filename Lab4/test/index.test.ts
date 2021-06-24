import { IAppStorage } from '../src/interfaces/IAppStorage'
import { TestForJest } from '../src/TestForJest'
import { AppFirebase } from '../src/appFirebase'

import * as puppeteer from 'puppeteer';


describe('addAB', () => {
    let z: TestForJest;
    beforeAll(() => {
        z = new TestForJest();
    })
    it('test 1', () => {
        const x = 1;
        const y = 1;
        z.addAB(x, y);
        const ret = z.addAB(x, y);
        expect(ret).toBe(2);
    });
    it('test 2', () => {
        const x = "szedł grześ ";
        const y = "przez wieś";
        z.addAB(x, y);
        const ret = z.addAB(x, y);
        expect(ret).toBe("szedł grześ przez wieś");
    });
    it('test 3', () => {
        const i = 'gierek';
        const ret = z.newN(i);
        expect(ret).toBe('gierek');
    });
    it('test 4', () => {

        let x = 'a';
        const ret = z.chckTab(x);
        const y = true;

        expect(ret).toBe(y);
    });

})

describe('addNote', () => {

    const note: IAppStorage = {
        id: 1,
        title: 'stringi',
        content: 'figi',
        dateOfNote: new Date().toDateString(),
    }
    let notatnik = new AppFirebase();
    it('test 5', async () => {
        const res = await notatnik.addNote(note)
        const notePrint = 'ok' + note;
        expect(res).toBe(notePrint);
    })
});

// (async () => {
//     const browser = await puppeteer.launch();
//     const page = await browser.newPage();
//     await page.goto('http://localhost:8080');
//     await

// })
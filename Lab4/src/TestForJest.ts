//nie mam metod do testów więc tworzę jakieś console.log()
export class TestForJest {
    newN(newNTest: any) {
        let x = newNTest;
        return x
    }

    addAB(a: any, b: any) {
        return a + b
    }

    chckTab(a: string) {
        const tab = ['a', 'b', 'c']
        if (tab.includes(a))
            return true
    }
}
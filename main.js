
function case1() {
    console.log("case1");
}

function case2() {
    console.log("case2");
}


class Adapter {
    constructor(caseNumber) {
        if (caseNumber === 1) {
            this.case = case1;
        } else if (caseNumber === 2) {
            this.case = case2;
        }
    }

    go() {
        this.case();
    }
}


const adapter1 = new Adapter(1);
adapter1.go();

const adapter2 = new Adapter(2);
adapter2.go();


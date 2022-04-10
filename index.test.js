


import * as nums from './index';
//const addNumbers = require('./index');

// test()
describe("add function sanity check" ,  ()=> {
    it("inital check for empty string", ()=> {
        const actual =  nums.addNumbers("")
        const expected = 0;
        expect(actual).toBe(expected);
    })

    
    test("check when 2 numbers are given",  () => {
        const actual =  nums.addNumbers("2,4")
        const expected = 6;
        expect(actual).toBe(expected);
    })
});

    test("check for if there are new line charcters present ", () => {
        const actual =  nums.addNumbers("1\n2\n3")
        const expected = 6;
        expect(actual).toBe(expected);
    })

    test("check for negative numbers and this will fail", ()=> {
        const actual =  nums.addNumbers("1-1-1233444")
        const expected = 0;
        expect(actual).toBe(expected);
    })

    test("check for delimiters", ()=> {
        const actual =  nums.addNumbers("//;\n1;2")
        const expected = 3;
        expect(actual).toBe(expected);
    })

    test("check for handling multiple numbers", ()=> {
        const actual =  nums.addNumbers("1 2 3 4")
        const expected = 10;
        expect(actual).toBe(expected);
    })

    test("check for handling a large string", ()=> {
        const actual =  nums.addNumbers("1078643\n7566435\n&88676;//;61430")
        const expected = 8795184;
        expect(actual).toBe(expected);
    })




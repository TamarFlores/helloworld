function reversaParentesis(s) {
    while (true) {
        let c = s.indexOf(")");

        if (c === -1) {
            break;
        }

        let o = s.substring(0, c).lastIndexOf("(");

        let inicio = s.substring(0, o);
        let medio = s.substring(o + 1, c).split("").reverse().join("");
        let final = s.substring(c + 1, s.length);

        s = inicio + medio + final;
    }

    return s;
}

//2//

function reversaParentesis(s) {
    if (s.includes('(')){
        return reversaParentesis(reverseOnce(s));
    } else {     
        return s;
    }
}
//3//

function reversauno(s){
    var regexp = /\(([^()]*)\)/i;
    var subStr = regexp.exec(s)[1];
    console.log(subStr);
    subStr = subStr.split('').reverse().join('');
    return s.replace(regexp, subStr)
}

// 4//

function reversaParentesis(inputString) {
    while (inputString.includes('(')) {
        inputString = inputString.replace(/\(([^()]*)\)/, (_, str) => [...str].reverse().join(''));
    }
    return inputString;
}
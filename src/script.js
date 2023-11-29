
function calc() {
    let f = parseInt(document.getElementById("Frecuencia").value);

    let l = parseFloat(document.getElementById("Bobina").value);

    let c = parseFloat(document.getElementById("Condensador").value);

    let xl = 2 * Math.PI * f * l;
    let xc = 1 / (2 * Math.PI * f * c);
    console.log(f, l, c, xl, xc);

    let casa = parseInt(document.getElementById("casa").value);

    let sxc = subStr(xc.toString(), casa);
    let sxl = subStr(xl.toString(), casa);

    const result = document.querySelector("#result")

    let value = "XL: "+sxl+" XC: "+sxc;

    result.value = value;
    // document.getElementById("result").value = "XL: "+xl+" XC: "+xc;
}

function subStr(str, casa) {

    for (let i = 0; i < str.length; i++) {
        if (str[i] === ".") {
            return str.substring(0, i + casa);
        }
    }
    return str
}

function clear() {
    document.getElementById("Frecuencia").value = 0;
    document.getElementById("Bobina").value = 0;
    document.getElementById("Condensador").value = 0;
    const result = document.querySelector("#result")
    result.value = "";

}

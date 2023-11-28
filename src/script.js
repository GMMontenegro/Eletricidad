
function calc() {
    let f = parseInt(document.getElementById("Frecuencia").value);

    let l = parseFloat(document.getElementById("Bobina").value);

    let c = parseFloat(document.getElementById("Condensador").value);

    let xl = 2 * Math.PI * f * l;
    let xc = 1 / (2 * Math.PI * f * c);
    console.log(f, l, c, xl, xc);
    document.getElementById("result").innerHTML = "XL: "+xl+" XC: "+xc;
}
function clear() {
    document.getElementById("result").innerHTML = "";
    document.getElementById("Frecuencia").value = "";
    document.getElementById("Bobina").value = "";
    document.getElementById("Condensador").value = "";

}

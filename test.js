let totalTaka = parseFloat(document.getElementById("mot-taka").innerText);
// console.log(totalTaka);

document.getElementById("joma-btn").onclick = function() {
    let joma = parseFloat(document.getElementById("joma-input").value);

    // input clear 
    document.getElementById("joma-input").value = "";

    let ajkerJoma = parseFloat(document.getElementById("ajker-joma").innerText);

    let ajkerMotJoma = joma + ajkerJoma;

    document.getElementById("ajker-joma").innerText = ajkerMotJoma;
    
    totalTaka += joma;
    document.getElementById("mot-taka").innerText = totalTaka;
    //console.log(ajkerJoma)
}

// taka tola 
document.getElementById("tola-btn").onclick = function() {
    let tola = parseFloat(document.getElementById("tola-input").value);

    // input clear 
    document.getElementById("tola-input").value = "";

    let ajkerTola = parseFloat(document.getElementById("ajker-tola").innerText);

    let ajkerMotTola = tola + ajkerTola;

    document.getElementById("ajker-tola").innerText = ajkerMotTola;
    
    totalTaka -= tola;
    document.getElementById("mot-taka").innerText = totalTaka;
    //console.log(ajkerJoma)
}
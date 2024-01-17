//Palvelut sivuston näyttäminen

function palvelut() {
    let palvelut = `<h2>Palvelumme</h2>
    <ul>    
            <li>Eläinlääkäri</li>
            <li>Päivähoito</li>
            <li>Yöhoito</li>
    </ul>
     `
     document.getElementById("sisältö").innerHTML = palvelut
     // sigel page sivusto esimerkki
    
}
// yhteystiedot
function yhteystiedot(){
    document.getElementById("sisältö").innerHTML = ""
    var otsikko = document.createElement("h2");
    var teksti = document.createTextNode("Yhteystiedot")
    otsikko.appendChild(teksti)

    var sisältö = document.getElementById("sisältö")
    sisältö.appendChild(otsikko)


    var puhelin = document.createElement("h4");
    var puhTeksti = document.createTextNode("P.050928932")
    puhelin.appendChild(puhTeksti)
    sisältö.appendChild(puhelin)
}

function tumma(){
    document.getElementById("sivu").style.backgroundColor = "black"
    document.getElementById("sivu").style.color = "silver"
    localStorage.setItem("teema", "tumma")

}
function pinkki() {
    document.getElementById("sivu").style.backgroundColor = "pink"
    document.getElementById("sivu").style.color = "green"
    localStorage.setItem("teema", "pinkki")
}
// Suorittaan aina alusta 
if (localStorage.getItem("teema") == "tumma") {
    tumma()
}
else {
    pinkki()
}


//tumma()  vakion pohja ilman funtiota
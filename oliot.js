const autot = [{id: 1, merkki: "Toyota", vuosimalli: 2006, hinta: 9000},{id:2, merkki: "BNW", vuosimalli: 1996, hinta: 4800},
{id:3, merkki:"Lada", vuosimalli: 2010, hinta: 909}]

var hakusana = ""

var standard_input = process.stdin
standard_input.setEncoding('utf-8')
console.log("JavaScript autohaku")
console.log("Sovellus suljetaan kirjautumalla 'exit'")
process.stdout.write("Hae autojen merkin mukaan:  ") 
standard_input.on('data', function(data){
     // sovellus suljetaan, kun käyttäjä antaa avainsanan 'exit'
     if (data === 'exit\r\n'){
        console.log("Kiitos ja näkemiin.")
        process.exit()
        }  
        
        else {
            hakusana = data.trim()
            autot.forEach(a => {
                if (a.merkki.toLocaleLowerCase().indexOf(hakusana.toLocaleLowerCase())> -1) {
                console.log("Merkki: " + a.merkki + "vm." + a.vuosimalli + "Hinta: " + a.hinta)
                }
                }
                )
            }}

        )
        





////autot.forEach(auto => {
    // black friday : poistetaan kommentti  black friday pvm 
    //nodeauto.hinta = 100
   //// console.log(auto.merkki + " vuodelta " + auto.vuosimalli)
    ////console.log("Hinta: " + auto.hinta)
    ////console.log("-______________")

////}
////)
// auto silmukka auto= olio, forEach silmukka 

////autot.forEach(auto => {
    ////if (auto.id === 3 ){
    ////console.log("Auto id: llä " + auto.id + "on LUJAA LAATUA ! " + auto.merkki )
    ////console.log("______________")
    ////}
////}
////)
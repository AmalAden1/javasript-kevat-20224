var puhelimet = ["One plus", "Iphone", "Samsung", "Erikson"]

for (let i=0; i < puhelimet.length; i++){
    console.log("Puhelin" + (i+1) + ". on " + puhelimet [i])
}


puhelimet.forEach(p =>
    console.log("Puhelin on " + p)
    )
// sama periaate map 
    puhelimet.map(p =>
        console.log("Puhelin on " + p)
        )
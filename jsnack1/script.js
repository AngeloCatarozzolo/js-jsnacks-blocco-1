//L’utente inserisce due parole in successione, con due prompt.
//Il software stampa prima la parola più corta, poi la parola più lunga.
const primaParola = prompt("Inserisci prima parola")
const secondaParola = prompt("Inserisci seconda parola")
if(primaParola.length > secondaParola){
  console.log("la parola più lunga è la prima");
} else {(primaParola.length < secondaParola) 
    console.log("la parola più lunga è la seconda");
}


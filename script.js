let nome = prompt("Inserisci il tuo nome:");
let cognome = prompt("Inserisci il tuo cognome:");
let colore = prompt("Inserisci il tuo colore preferito:");
let numero1 = prompt("Inserisci un numero:");
let numero2 = prompt("Inserisci un secondo numero:");
let numero1_int = Number(numero1)
let numero2_int = Number(numero2)

let divisione = numero1_int / numero2_int;

let password = nome + cognome + colore + divisione

document.getElementById("nome").innerHTML = nome;
document.getElementById("cognome").innerHTML = cognome;
document.getElementById("colore").innerHTML = colore;
document.getElementById("numero1").innerHTML = numero1;
document.getElementById("numero2").innerHTML = numero2;

console.log(
    `
    ------ Componenti per la password ------
        
        Nome: ${nome}
        Cognome: ${cognome}
        Colore preferito: ${colore}
        Numeri scelti: ${numero1} e ${numero2}
        Divisione: ${divisione}
    
    ------ Password generata ------
    
    Password: ${password}
     `
);
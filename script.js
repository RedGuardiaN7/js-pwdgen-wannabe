let nome = prompt("Inserisci il tuo nome:");
let cognome = prompt("Inserisci il tuo cognome:");
let colore = prompt("Inserisci il tuo colore preferito:")

console.log(
    `
    ------ Componenti per la password ------
        
        Nome: ${nome}
        Cognome: ${cognome}
        Colore preferito: ${colore}
    
    ------ Password generata ------
    
    Password: ${nome}${cognome}${colore}21
     `
)
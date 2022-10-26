//In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, 
//chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.

const invitati = ['Roberto','Luca','Giovanni','Marco'];
const checkInvitati = prompt('Inserisci il tuo nome');
let found = false;

for(let i=0 ; i < invitati.length ; i++){
    if(checkInvitati.toLowerCase() === invitati[i].toLowerCase()){
        flag = true;
    }
}
if(found){
    console.log('Benvenuto');
}else{
    console.log('Attenzione! Non sei stato invitato!')
}
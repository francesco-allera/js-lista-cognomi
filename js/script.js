var surnames = ['Bianchi', 'Conti', 'Ferrari', 'Romano', 'Rossi', 'Zazza'];
var outputList = document.querySelector('#app ul');
var outputSurname = document.querySelector('#app h3');
var userSurname;

// asking for surname until the input is right
do {
    userSurname = prompt('Inserisci il tuo cognome').trim();
} while (!isNaN(userSurname) || userSurname.length <=1);

// standardize the 'userSurname' + 'userSurname' insert in 'surnames'
userSurname = userSurname[0].toUpperCase() + userSurname.slice(1).toLowerCase();
surnames.push(userSurname);
surnames.sort();

// print 'surnames' on page
for(var i = 0; i < surnames.length; i++) {
    outputList.innerHTML += '<li>'+ surnames[i] +'</li>';
}

// print alphabetical position of 'userSurname'
outputSurname.innerText = userSurname +' è in '+ (surnames.indexOf(userSurname) + 1) +'° posizione nella lista di cognomi';
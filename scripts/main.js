//console.log('Ceci est un message de log.');//permet d'afficher un message dans la console
//console.warn('Ceci est un warning');// permet d'afficher qu'il y un warning dans la console
//console.error('GROS PB'); //permet d'afficher qu'il y a un gros problème dans la console

let myImage = document.querySelector('img'); // fonction qui permet de changer l'image
console.log('myImage =', myImage); //affiche dans la console l'etat de myImage





myImage.addEventListener('click', function ()  //des que l'on clique sur l'image
{
    let mySrc = myImage.getAttribute('src'); //on recupere l'attribut src de l'image et on le met dans une variable
    if (mySrc === 'images/logo_mozilia.png') // si src est l'image mozilia alors on change pour chrome et inversement
    {
        myImage.setAttribute('src', 'images/logo_chrome.png');
    } 
    else 
    {
            myImage.setAttribute('src', 'images/logo_mozilia.png');
    }

});




/*document.querySelector('img').addEventListener("click", function () //cela permet de faire un événement sur l'image en cliquant dessus
{ 
    alert ('oh oh tu as trouver mon secret ?!'); // c'est trop cool ça fait un pop up ! :)
});

//toutes cette fonction clique est equivalent a cette fonction :
let img_de_renard_de_feu = document.querySelector('img');
img_de_renard_de_feu.addEventListener("click", function () 
{
    alert ('oh oh tu as trouver mon secret ?!');
});
*/


/*let myHeading = document.querySelector('h1'); //selects the first h1 tag
myHeading.textContent = 'Hello world!'; //changes the text content of the h1 tag
*/


function multiply(num1, num2) { //function that multiplies two numbers je crois que fonction remplace void en javascript
    let result = num1 * num2;
    return result;
}
// je peux utiliser cette fonction de cette manière : multiply(2, 3); il me retourne 6 cela me permet
//de recuperer result pour d'autres fonctions

function glace()
{
    let iceCream = 'chocolate'; /// let est une variable
    if (iceCream === 'chocolate') { // === est une comparaison qui a la fin envoie un boolean true or false
        alert('Yay, I love chocolate ice cream!');
    }
    else {
        alert('Awwww, but chocolate is my favorite...');
    }
}
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1'); //selects the first h1 tag
function setUserName()
{
    let myName = prompt('Please enter your name.'); //prompts affiche une boite de dialogue un peut comme alert sauf qu'il doit entrer des valeurs
    localStorage.setItem('name', myName); //localStorage est une API qui permet de stocker la valeur myName dans 'name' (myName contient la valeur saisie par l'utilisateur)
    myHeading.textContent = 'Mozilla is cool, ' + myName; //textContent permet de changer le contenu (du h1)
}

// ce block permet de recuperer la valeur name des qu'il se connecte a la page
if (!localStorage.getItem('name')) //si localStorage n'a pas de valeur dans 'name'
{ 
    setUserName(); //je lance la fonction setUserName sa fait donc une boucle tant que je n'ai pas name
}
else  // ça marche sans le else ,ce else permet de mettre la valeur name dans une nouvelle variable et de faire la rajouter à mozzilia is cool
{
    let storedName= localStorage.getItem('name'); //je recupere la valeur de localStorage dans 'name'
    myHeading.textContent = 'Mozilla is cool, ' + storedName; //je change le texte de mon h1
}

myButton.addEventListener('click', function () //des que l'on clique sur le bouton   
{
    setUserName();
});
// en simplifier ça donne sa myButton.addEventListener('click', setUserName); // et c'est pareil que ci-dessus



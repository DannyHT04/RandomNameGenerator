let injectHere = document.getElementById('injectHere');
let userInput = document.getElementById('userInput');
let namebtn = document.getElementById('namebtn');
let numberofGroups = document.getElementById('numberOfGroups');
let numberOfPeople = document.getElementById('numberOfPeople');
let numberOfPeoplebtn = document.getElementById('numberOfPeoplebtn');
let numberOfGroupsbtn = document.getElementById('numberOfGroupsbtn');
let randomizebtn = document.getElementById('randomizebtn');
let resetbtn = document.getElementById('resetbtn');
import {SaveToLocalStorage,SaveToLocalStoragebybtn, getLocalStorage, RemoveFromLocalStorage, arrayNames} from './localStorage.js';

namebtn.addEventListener('click', function(e){
    createList(userInput);
    getLocalStorage();
    SaveToLocalStoragebybtn(userInput.value);
    console.log(arrayNames.length)
});

numberOfPeoplebtn.addEventListener('click',function(e){

});

numberOfGroupsbtn.addEventListener('click', function(e){

    
 byGroupGENERATOR(numberofGroups.value);
});

randomizebtn.addEventListener('click', function(e){
    randomizebtnfucntion();
});

resetbtn.addEventListener('click',function(e){
    location.reload();
});
function createList(userInput){

    let b = document.createElement('button');
    b.className = 'btn btn-outline-warning';
    b.type = 'button';
    b.textContent = userInput.value;
    b.id = userInput.value;
    // create div 
    let div = document.createElement('div');
    div.className = 'row';
    div.appendChild(b);

    injectHere.appendChild(div);

    div.addEventListener('click', function(e){
        let removeDiv = document.getElementById(b.id);
        removeDiv.remove();
        RemoveFromLocalStorage(b.id)
        getLocalStorage();
        console.log(arrayNames.length)
    });


}


function createListLocal(userInput){

    let b = document.createElement('button');
    b.className = 'btn btn-outline-warning';
    b.type = 'button';
    b.textContent = userInput;
    b.id = userInput;
    // create div 
    let div = document.createElement('div');
    div.className = 'row';
    div.appendChild(b);

    injectHere.appendChild(div);

    div.addEventListener('click', function(e){
        let removeDiv = document.getElementById(b.id);
        removeDiv.remove();
        RemoveFromLocalStorage(b.id)
        getLocalStorage();
        console.log(arrayNames.length)
    });


}


// function randomByGroup(numberOfGroups){
//     let r = Math.floor(Math.random * arrayNames.length)
    
// }


function byGroupGENERATOR(numberINPUT)
{
    let numberOFGROUPS = Math.floor(arrayNames.length / numberINPUT);
        let tempList = [];
        for(let i =0; i<numberINPUT; i++)
        {
            tempList[i] = [];
            for(let j =0; j<numberOFGROUPS; j++)
            {
                let randomize = Math.floor(Math.random() * arrayNames.length);
                tempList[i][j] = arrayNames[randomize];
                console.log(arrayNames[randomize]);
                arrayNames.splice(randomize,1);
            }
        }
        let text ="";
        for(let i =0;i<numberINPUT;i++)
        {
            text += "Group " + (i+1) + ": ";
            for(let j=0; j< numberOFGROUPS; j++)
            {
                if(j != 0)
                {
                    text += ", ";
                }
                text += tempList[i][j];
            }
            text += "<br>";
        }
        console.log(text);
        createElementsForGroup(text);
}

let injectP = document.getElementById('injectP');
function createElementsForGroup(Group){
 
    let p = document.createElement('p')
    p.innerHTML = Group
    injectP.appendChild(p)
}


console.log(arrayNames.length);

getLocalStorage();
fillList();


function fillList(){
    for(let i =0; i< arrayNames.length; i++){
       
        console.log(arrayNames[i]);
        createListLocal(arrayNames[i]);
    }
}

function randomizebtnfucntion(){
    let randomize = Math.floor(Math.random() * arrayNames.length);
    let randomPerson = arrayNames[randomize];
    createElementsForGroup(randomPerson);
    
}



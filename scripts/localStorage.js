let arrayNames = [];

function SaveToLocalStoragebybtn(name){
    arrayNames.push(name)
    localStorage.setItem('Names',JSON.stringify(arrayNames));
}
function SaveToLocalStorage(name){
    localStorage.setItem('Names',JSON.stringify(arrayNames));
}
function getLocalStorage(){
    const localStorageItem = localStorage.getItem('Names');
    arrayNames = JSON.parse(localStorageItem);
    localStorageItem != null ? arrayNames = JSON.parse(localStorageItem) : arrayNames = [];
    return arrayNames;
}

function RemoveFromLocalStorage(name){
    let nameIndex = arrayNames.indexOf(name);
    //found nameIndex in array names
    arrayNames.splice(nameIndex,1);
    SaveToLocalStorage();
}

export {SaveToLocalStorage, getLocalStorage, RemoveFromLocalStorage,SaveToLocalStoragebybtn, arrayNames}
// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(Ralph){
cats.push("Ralph")
}

function destructivelyPrependCat(Bob){
    cats.unshift("Bob")
}

function destructivelyRemoveLastCat(Garfield){
    cats.pop();
}

function destructivelyRemoveFirstCat(Milo){
    cats.shift();
}

function appendCat(catname){
    const copyofcats = cats.slice();
    copyofcats.push(catname)
    return(copyofcats)
}

function prependCat(catname){
    const copyofcats = cats.slice();
    copyofcats.unshift(catname)
    return(copyofcats)
}

function removeLastCat(catname){
    const copyofcats = cats.slice();
    copyofcats.splice(2)
    return(copyofcats)
}

function removeFirstCat(catname){
    const copyofcats = cats.slice();
    copyofcats.splice(0,1)
    return(copyofcats)

}
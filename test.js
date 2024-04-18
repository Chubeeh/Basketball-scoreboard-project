let addTwo = document.getElementById("increment-value")
let addTwo2 = document.getElementById("increment-value2")
let addThree = document.getElementById("increment-value")
let addThree2 = document.getElementById("increment-value2")


function incrementTwo(){
    count += 2
    addTwo.innerHTML = count
}
function incrementTwo2(){
    count += 2
    addTwo2.innerHTML = count
}

function incrementThree(){
    count += 3
    addThree.innerHTML = count
}
function incrementThree2(){
    count += 3
    addThree2.innerHTML = count
}

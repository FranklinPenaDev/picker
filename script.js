document.getElementById('sporty').onclick = vroomVroom
document.getElementById('muscle').onclick = vinDiesel
document.getElementById('offRoad').onclick = offRoading
document.getElementById('truck').onclick = bigWheels
document.getElementById('luxury').onclick = theGoodLife
document.getElementById('casual').onclick = easyGoing

function vroomVroom(){
    document.querySelector('body').style.backgroundColor = 
    'rgba(60, 179, 113)'
    document.querySelector('h2').innerText = ("Vroom Vroom")
    document.querySelector('h2').style.color = 'firebrick'
}// This function is for our Lamborghini
function vinDiesel(){
    document.querySelector('body').style.backgroundColor = 
    'rgba(255, 70, 0)'
    document.querySelector('h2').innerText = ("Muscle is POWER!!!")
    document.querySelector('h2').style.color = 'white'
}// This one for our Camaro
function offRoading(){
    document.querySelector('body').style.backgroundColor = 
    'brown'
    document.querySelector('h2').innerText = ("Rockyroads RULE!")
}// This one for our Wrangler
function bigWheels(){
    document.querySelector('body').style.backgroundColor = 
    'rgba(245, 132, 38)'
    document.querySelector('h2').innerText = ('Truck LIFEEEE!!!!')
    document.querySelector('h2').style.color = 'blue'
}// Put a little hit as to our favorite basketball teams colors are on this one
 // Hint: NYK
 // This one for our Raptor
function theGoodLife(){
    document.querySelector('body').style.backgroundColor = 'grey'
    document.querySelector('h2').innerText = ('Riding in style')
    document.querySelector('h2').style.color = 'white'
}// This one for our Phantom
function easyGoing(){
    document.querySelector('body').style.backgroundColor = 'rgba(247, 202, 24)'
    document.querySelector('h2').innerText = ('4 Cylinder is great on gas!')
    document.querySelector('h2').style.color = 'purple'
}// This one for our Civic
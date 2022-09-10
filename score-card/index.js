let points = document.getElementById('points')
let guest = document.getElementById('guest-points')
let homePoints = 0
let guestPoints = 0
function addOnePoint(){
    homePoints += 1
    points.textContent = homePoints
    leading()
}
function addTwoPoints(){
    homePoints += 2
    points.textContent = homePoints
    leading()
    
}
function addThreePoints(){
    homePoints += 3
    points.textContent = homePoints
    leading()
}

function addOnePointGuest(){
   guestPoints += 1
   guest.textContent = guestPoints
   leading()
}
function addTwoPointGuest(){
   guestPoints += 2
   guest.textContent = guestPoints
   leading()
}
function addThreePointGuest(){
   guestPoints += 3
   guest.textContent = guestPoints
   leading()
}

function leading(){
    if( homePoints > guestPoints){
        points.style.color = "green"
        guest.style.color = "red"
    } else if( homePoints == guestPoints){
         guest.style.color = "violet"
         points.style.color = "violet"
    }
    else {
        guest.style.color = "green"
        points.style.color = "red"
        
    }
   
}

function reset(){
    homePoints = 0
    guestPoints = 0
    points.textContent = homePoints 
    guest.textContent = guestPoints
    guest.style.color = "red"
    points.style.color = "red"
    
   
}

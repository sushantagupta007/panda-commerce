//Selelction of H2 and set color light blule
const h2Tag = document.getElementsByTagName('h2');
//console.log(typeof h2Tag);

for(const h2 of h2Tag){
    h2.style.color="lightblue";  
}
//Selection of BackPack and set Background color tomato
const backPack = document.getElementById('backPack'); 
backPack.style.backgroundColor = "tomato"; 

//Selection of Card and set border 30px
const cards= document.getElementsByClassName('card shadow');

for(const card of cards){
    card.style.border="30px"; 
}

//Selection of buttons and remove it by click
const buttons = document.getElementsByClassName('btnRemove');
for(const button of buttons){
    button.addEventListener('click',function (event) {
        console.log("hello")
        event.target.parentNode.removeChild(event.target); 
    })
}

//Sumbit button disable and enable 
document.getElementById('input-email').addEventListener('keyup',function(event){
    console.log(event.target.value);
    if(event.target.value=='email'){
        document.body.style.backgroundColor="magenta";
        document.getElementById('submitButton').disabled = false;
    }
    else{
        document.body.style.backgroundColor="white";
        document.getElementById('submitButton').disabled = true;
    }
    
});

//Let Me Toch on Focus of input field 
document.getElementById('input-email').addEventListener('focus',function(){
    document.getElementById('let-me-touch').style.backgroundColor="yellow";
});

document.getElementById('input-email').addEventListener('blur',function(){
    document.getElementById('let-me-touch').style.backgroundColor="purple";
});

//Image Change
document.getElementById('image-changed').addEventListener('mouseenter',function(){
    //Selection of parent and then child
    const parent = document.getElementById('image-change-parent');
    const childofParent = parent.childNodes;
    //Selectioni of index of image and set new src
    childofParent[1].src= "./images/bags/bag-2.png";
});


//Use of Event Bubbling 
const letmeTouch = document.getElementById('let-me-touch');
letmeTouch.addEventListener('click',function(event){
    event.target.style.backgroundColor="blue";
    event.stopPropagation();
    console.log("hi"); 
})

document.getElementById('touchContainer').addEventListener('click',function(event){
    event.target.style.backgroundColor="green";
    console.log("hello")
    event.stopPropagation();
})
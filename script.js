const h2Tag = document.getElementsByTagName('h2');
console.log(typeof h2Tag);

for(const h2 of h2Tag){
    h2.style.color="lightblue";  
}

const backPack = document.getElementById('backPack'); 
backPack.style.backgroundColor = "tomato"; 

const cards= document.getElementsByClassName('card shadow');


for(const card of cards){
    card.style.border="30px"; 
}

const buttons = document.getElementsByClassName('btn');
for(const button of buttons){
    button.addEventListener('click',function (event) {
        console.log("hello")
        event.target.parentNode.removeChild(event.target); 
    })
}

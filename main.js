// massage
document.getElementById('massage').style.display="none";

// Random Pin Generate
document.getElementById('pinGenerateHandler').addEventListener('click', function(){
    document.getElementById('generateNumber').value = Math.floor(1000 + Math.random() * 9000);
})

// Display Number
const display = document.getElementById('display');

// Update Number 
const number = document.getElementsByClassName('button');   
  for (let i = 0; i<number.length; i++) {
    number[i].addEventListener('click', function(){
        display.value += number[i].innerHTML;
    });
  }

//   Erase Function C
const erase = document.getElementById('erase'); 
erase.addEventListener('click', function(){
    display.value = ' '; 
})

// backSpace 
document.getElementById('backSpace').addEventListener('click', function(){
    display.value = display.value.slice(0, -1);
})

// Submit and massage for pin match
    document.getElementById('submit').addEventListener('click', function(){
    const gNum = document.getElementById('generateNumber').value; 
    if(gNum == display.value){
        document.getElementById('massage').style.display="block";
        document.getElementById('notMatch').style.display="none";
}else{
        document.getElementById('massage').style.display="block";
        document.getElementById('match').style.display="none";
    }
})





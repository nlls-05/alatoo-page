const myHeading =document.querySelector("h1");
myHeading.textContent = "Alatoo International University - Gateway to the world";
const img1URL ="img/Ala-Too_International_University_Seal.png"
const img2URL ="img/cat.jpg"

//let myVariable = "Erdan";
//let hisAge = 18
//alert(myVariable);
//alert("his age is" +hisAge);
// let myFirstArray = [15 , 'Nour', true , false , 12.5]
function sayHello(){
    alert("Bro why are you clicking here ");
    console.log("It is console.log")
}

const imgElement = document.querySelector("img");

myHeading.addEventListener('click',sayHello)

function changePhoto(event){
    let current =imgElement.getAttribute("src");
    if(current ==img1URL){
        imgElement.setAttribute("src",img2URL)
    }
    else{
        imgElement.setAttribute("src",img1URL)
    }
}

imgElement.onclick = changePhoto
const name = prompt("Your name: ")
head.innerHTML = `hello, ${name}`
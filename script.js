let carts = document.querySelectorAll('.fal fa-shopping-cart')
let products = [
    {
        name: 'ARGENTINA 22 HOME JERSEY',
        tag: 'adidas',
        price: 2900 ,
        incart: 0
    }
]

for (let i=0; i< carts.length; i++) {
    carts[i].addEventListener('click',() =>{
        cartNumbers();
    })
}
function cartNumbers(){
    let productNumbers = localStorage.getItem('cartNumbers');
   
    productNumbers = parseInt(productNumbers);
    if (productNumbers){
    localStorage.setItem('cartnumbers',productNumbers + 1);
} else{
    localStorage.setItem('cartNumbers', 1);
}
    
}
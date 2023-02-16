// select basic elements 
const products = document.querySelectorAll(".cart-product");
let subTotal = document.querySelector(".subtotal"),
        subTotalValue = subTotal.innerText,
        subTotalAmount = 0,
        priceValue;
products.forEach(function(event) {
    let decrease = event.querySelector(".decrease"),
        increase = event.querySelector(".increase"),
        quantity = event.querySelector(".quantity"),
        quantityValue = quantity.value,
        price = event.querySelector(".price"),
        priceValue = price.getAttribute("data-price");
        
        increase.onclick = () => {
            quantityValue++; 
            quantity.value = quantityValue;
            price.innerText = priceValue * quantity.value;
            subTotalCalculator();
            calculateTax();
            total ();
            
        }
        decrease.onclick = () => {           
            if(quantityValue > 0) {
                quantityValue--; 
                quantity.value = quantityValue;
                price.innerText = priceValue * quantity.value;
            }
            subTotalCalculator();
            calculateTax();
            total ();
        }
        
})

function subTotalCalculator(){
    subTotal.innerText = parseFloat(subTotalValue) + parseFloat(priceValue);
            let mainCart = document.querySelectorAll("#cart .price");
            let subTotalMoney = 0;
            for(let i = 0; i < mainCart.length; i++) {
                subTotalMoney += parseFloat(mainCart[i].innerText) ;
            }
            subTotal.innerText = subTotalMoney;
            return subTotalMoney;
            
}

function calculateTax() {
    let tax = document.querySelector(".tax");
    let subTotalValue = subTotalCalculator();
    let taxCalculate = parseInt(subTotalValue * 10 / 100);
    tax.innerText = taxCalculate;
    return taxCalculate;
}

function total () {
    let tatal = document.querySelector(".total");
    let subTotalAmount = subTotalCalculator(),
    taxAmount = calculateTax();
    let total = subTotalAmount + taxAmount;
    tatal.innerText = total;
}

let items = document.querySelectorAll(".remove-item");

items.forEach((item) => {
    console.log(item.parentNode.parentNode.parentNode);
    item.onclick = () => {
        item.parentNode.parentNode.parentNode.remove();
    }
})
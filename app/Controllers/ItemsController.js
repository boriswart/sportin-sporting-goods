import { ProxyState } from "../AppState.js";
import { itemsService } from "../Services/ItemsService.js";

function drawItems() {
    let template = ''
    console.log("The drawItems!");
    ProxyState.items.forEach(i => {
        template += /*html*/`
        <div class="col-3  m-3 ">
            <div class="card">
                <img src="https://placebear.com/200/200" class="card-img-top" alt="..."/>
                    <div class="card-body">
                        <h5 class="card-title">${i.name}</h5>
                        <p class="card-text">${i.desc}
                                </p>
                        <div class="d-flex justify-content-around">        
                        <a onclick="app.itemsController.addToCart('${i.id}')"class="btn btn-primary">Add to cart</a>
                        <h5>Price: ${i.price}</h5>
                        </div>
                    </div>
            </div>
        </div>
        `
    })
    document.getElementById("sale-items-HTML").innerHTML = template
}
function drawCartItems() {
    let template = ''
    ProxyState.cartItems.forEach(ci => {
        template += /*html*/`
            <div class="row d-flex align-items-center">
                <div class="col-3">
                    <img src="${ci.img}" />
                </div>
                <div class="col-3">
                    <p >${ci.name}</p>
                </div>
                <div class="col-2">
                    <p>${ci.desc}</p>
                </div>
                <div class="col-2">${ci.price}</div>
                <div class="col-2">
                <button class="btn btn-danger">Remove</button>
                </div>
            </div> `
    })
    document.getElementById("cart-items-HTML").innerHTML = template
}


export class ItemsController {
    constructor() {

        ProxyState.on("items", drawItems);
        drawItems()
    }
    addToCart(itemId) {
        console.log("buying a bear");
        itemsService.addToCart(itemId)



        drawCartItems()
    }
}
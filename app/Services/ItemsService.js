import { ProxyState } from "../AppState.js";

class ItemsService {
    addToCart(itemId) {
        let selectedItem = ProxyState.items.find(i => i.id === itemId)

        ProxyState.cartItems.push(selectedItem)
        ProxyState.items = ProxyState.items.filter(i => i.id !== itemId)

        console.log(ProxyState.items.filter(i => i.id !== itemId));
    }

}
export const itemsService = new ItemsService()
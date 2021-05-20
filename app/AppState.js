import { Item } from "./Models/Item.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"

class AppState extends EventEmitter {
  /** @type {Item[]} */
  items = [
    new Item("Tame Bear", "Very tame abs well fed male bear.... likes fish", 2000),
    new Item("Angry Bear", "Needs obedience training ... well fed female bear....hates people", 200)
  ]
  /** @type {Item[]} */
  cartItems = []
}


export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})

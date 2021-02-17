// Avoid shared state

const setProp = (obj = {}, data = 0) => Object.assign({}, obj, { prop: data });

/*

test("setProp()", (assert) => {
  const should = "setProp() returns new copied object with modified prop.";
  const immutable = "Original object cannot be mutated.";
});

*/

let myObj = {
  prop: "foobar",
  favColor: "red",
  favNumber: 70
};

console.log("myObj", myObj);

let perfectCopy = setProp(myObj, myObj.prop);
console.log("perfectCopy:", perfectCopy);

let newObj = setProp(myObj, "data");

newObj.favColor = "blue";
newObj.favNumber = 69;

console.log("newObj", newObj);

let emptyObj = setProp();
console.log("emptyObj", emptyObj);

console.log(Math.max(2, 4, 6));

const addToCart = (cart, item, quantity) => {
  cart.items.push({
    item,
    quantity
  });
  return cart;
};

// Avoid mutating external state

const pureCart = (cart, item, quantity) => ({
  ...cart,
  items: cart.items.concat([{ item, quantity }])
});

const myCart = {
  id: "myCart123",
  items: [{ item: "Apple", quantity: 3 }]
};

console.log(pureCart(myCart, "Orange", 6));

console.log("Original:", myCart);

// newPrice exercise

const setPrice = ({ name, price }, newPrice) => {
  let newItem = { name, price };
  newItem.price = newPrice;
  return newItem;
};

console.log(setPrice({ name: "test", price: 30 }, 50));

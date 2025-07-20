"use strict";
const score = [];
const names = [];
function identityOne(val) {
    return val;
}
function identityTwo(val) {
    return val;
}
function identityThree(val) {
    return val;
}
//identityThree(4);
function identityFour(val) {
    return val;
}
console.log(identityFour({ brand: "abcd", type: 4 }));
function getSearchProducts(products) {
    const myIndex = 0;
    return products[myIndex];
}
//getSearchProducts<productsTy>([{ m: 4 }]);
const getMoreSearchProducts = (products) => {
    const myIndex = 3;
    return products[myIndex];
};
let x = { a: 1, b: 2, c: 3, d: 4 };
function getProperty(obj, key) {
    console.log(obj[key]);
}
function anotherFuntion(valueOne, valueTwo) {
    return { valueOne, valueTwo };
}
anotherFuntion(33, { conntion: "ddd", username: "kknd", password: "1234" });
class BeeKeeper {
    constructor() {
        this.hasMask = true;
    }
}
class ZooKeeper {
    constructor() {
        this.nametag = "Mike";
    }
}
class Animal {
    constructor() {
        this.numLegs = 4;
    }
}
class Bee extends Animal {
    constructor() {
        super(...arguments);
        this.keeper = new BeeKeeper();
    }
}
class Lion extends Animal {
    constructor() {
        super(...arguments);
        this.keeper = new ZooKeeper();
    }
}
function createInstance(c) {
    return new c();
}
createInstance(Lion).keeper.nametag;
createInstance(Bee).keeper.hasMask;
class Sellable {
    constructor() {
        this.cart = [];
    }
    addCart(product) {
        this.cart.push(product);
    }
}
let s = new Sellable();
s.addCart([1, 2, 3, 4, 5]);
s.addCart(["22", "33"]);
s.addCart("dd");

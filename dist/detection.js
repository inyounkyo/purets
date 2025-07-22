"use strict";
function detectType(val) {
    if (typeof val === "string") {
        return val.toLocaleLowerCase();
    }
    return val + 3;
}
function provideId(id) {
    if (!id) {
        console.log("Please provide ID");
        return;
    }
    id.toLocaleLowerCase();
}
function printAll(strs) {
    if (strs) {
        if (typeof strs === "object") {
            for (const s of strs) {
                console.log(s);
            }
        }
        else if (typeof strs === "string") {
            console.log(strs);
        }
    }
}
function isAdminAccount(account) {
    if ("isAdmin" in account)
        return account.isAdmin;
}
function logValue(x) {
    if (x instanceof Date) {
        console.log(x.toUTCString());
    }
    else {
        console.log(x.toUpperCase());
    }
}
function isFish(pet) {
    return pet.swim !== undefined;
}
let xx = {
    swim() {
        console.log("FishFishFishFish");
    },
};
//console.log(isFish(xx));
function getFood(pet) {
    if (isFish(pet)) {
        pet;
        return "fish Food";
    }
    else {
        pet;
        return "bird Food";
    }
}
function getTrueShape(shape) {
    if (shape.kind === "circle") {
        return Math.PI * shape.radius ** 2;
    }
}
function getArea(shape) {
    switch (shape.kind) {
        case "circle":
            return Math.PI * shape.radius ** 2;
        case "square":
            return shape.side * shape.side;
        case "rectangle":
            return shape.lenght * shape.width;
        default:
            const _defaultforshape = shape;
            return _defaultforshape;
    }
}
let c = { kind: "circle", radius: 222 };
let r = { kind: "rectangle", lenght: 22, width: 20 };
getArea(c);
getArea(r);

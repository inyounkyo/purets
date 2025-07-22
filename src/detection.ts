function detectType(val: number | string) {
  if (typeof val === "string") {
    return val.toLocaleLowerCase();
  }
  return val + 3;
}

function provideId(id: string | null) {
  if (!id) {
    console.log("Please provide ID");
    return;
  }
  id.toLocaleLowerCase();
}

function printAll(strs: string | string[] | null) {
  if (strs) {
    if (typeof strs === "object") {
      for (const s of strs) {
        console.log(s);
      }
    } else if (typeof strs === "string") {
      console.log(strs);
    }
  }
}

interface User {
  name: string;
  email: string;
}

interface Admin {
  name: string;
  email: string;
  isAdmin: boolean;
}

function isAdminAccount(account: User | Admin) {
  if ("isAdmin" in account) return account.isAdmin;
}

function logValue(x: Date | string) {
  if (x instanceof Date) {
    console.log(x.toUTCString());
  } else {
    console.log(x.toUpperCase());
  }
}

type Fish = { swim: () => void };
type Bird = { fly: () => void };

function isFish(pet: Fish | Bird): pet is Fish {
  return (pet as Fish).swim !== undefined;
}
let xx: Fish = {
  swim() {
    console.log("FishFishFishFish");
  },
};
//console.log(isFish(xx));
function getFood(pet: Fish | Bird) {
  if (isFish(pet)) {
    pet;
    return "fish Food";
  } else {
    pet;
    return "bird Food";
  }
}
//console.log(getFood(xx));

interface Circle {
  kind: "circle";
  radius: number;
}
interface Square {
  kind: "square";
  side: number;
}
interface Rectangle {
  kind: "rectangle";
  lenght: number;
  width: number;
}

type Shape = Circle | Square | Rectangle;

function getTrueShape(shape: Shape) {
  if (shape.kind === "circle") {
    return Math.PI * shape.radius ** 2;
  }
}

function getArea(shape: Shape) {
  switch (shape.kind) {
    case "circle":
      return Math.PI * shape.radius ** 2;
    case "square":
      return shape.side * shape.side;
    case "rectangle":
      return shape.lenght * shape.width;

    default:
      const _defaultforshape: never = shape;
      return _defaultforshape;
  }
}

let c: Shape = { kind: "circle", radius: 222 };
let r: Shape = { kind: "rectangle", lenght: 22, width: 20 };
getArea(c);
getArea(r);

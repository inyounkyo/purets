const score: Array<number> = [];
const names: string[] = [];

function identityOne(val: boolean | number): boolean | number {
  return val;
}

function identityTwo(val: any): any {
  return val;
}

function identityThree<Type>(val: Type): Type {
  return val;
}
//identityThree(4);
function identityFour<T>(val: T): T {
  return val;
}

interface Bootle {
  brand: string;
  type: number;
}
console.log(identityFour<Bootle>({ brand: "abcd", type: 4 }));
type productsTy = {
  m: number;
};

function getSearchProducts<T>(products: T[]): T {
  const myIndex = 0;
  return products[myIndex];
}
//getSearchProducts<productsTy>([{ m: 4 }]);
const getMoreSearchProducts = <T>(products: T[]): T => {
  const myIndex = 3;
  return products[myIndex];
};

let x = { a: 1, b: 2, c: 3, d: 4 };
function getProperty<O, K extends keyof O>(obj: O, key: K): void {
  console.log(obj[key]);
}
//getProperty(x, "b");

interface Database {
  conntion: string;
  username: string;
  password: string;
}
function anotherFuntion<T, U extends Database>(
  valueOne: T,
  valueTwo: U
): object {
  return { valueOne, valueTwo };
}
anotherFuntion(33, { conntion: "ddd", username: "kknd", password: "1234" });

class BeeKeeper {
  hasMask: boolean = true;
}
class ZooKeeper {
  nametag: string = "Mike";
}
class Animal {
  numLegs: number = 4;
}
class Bee extends Animal {
  keeper: BeeKeeper = new BeeKeeper();
}
class Lion extends Animal {
  keeper: ZooKeeper = new ZooKeeper();
}
function createInstance<A extends Animal>(c: new () => A): A {
  return new c();
}
createInstance(Lion).keeper.nametag;
createInstance(Bee).keeper.hasMask;

class Sellable<T> {
  public cart: T[] = [];

  addCart(product: T) {
    this.cart.push(product);
  }
}

let s = new Sellable();
s.addCart([1, 2, 3, 4, 5]);
s.addCart(["22", "33"]);
s.addCart("dd");

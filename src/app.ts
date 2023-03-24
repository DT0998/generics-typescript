// Code goes here!
const names: Array<string> = []; //string[]
// names[0].split(' ')

// promise string
// const promise: Promise<number> = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(10);
//   }, 2000);
// });

// promise.then((data) => {
//   data.split(' ');
// });

function merge<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

// console.log(merge({ name: 'Max' }, { age: 30 }));
const mergedObj = merge({ name: "Max" }, 30 );
console.log(mergedObj.age);

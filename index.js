let flavorList = [
  "vanille",
  "vanille",
  "chocolate",
  "coffee",
  "chocolate",
  "vanille",
];

const iceCreamList = [];

const updateIceCreamObj = (iceCreamList, flavorList) => {
 

  for (let index = 0; index < flavorList.length; index++) {

    let isUpdated = false;

    for (let i = 0; i < iceCreamList.length; i++) {

      if (iceCreamList[i].name === flavorList[index]) {

        iceCreamList[i].quantity += 1;

        isUpdated = true;

        break;
      }
    }
    if (!isUpdated) {

      iceCreamList.push({

        name: flavorList[index],
        quantity: 1,

      });
    }
  }
};

updateIceCreamObj(iceCreamList, flavorList);

console.log(iceCreamList);

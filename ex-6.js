const carCollection = ["toyota", "fiat", "honda", "bmw"];

function updateCarCollection(carBrand) {
  // Start coding here
  if (!carCollection.includes(carBrand)) {
    carCollection.push(carBrand);
    let includesCar = [];
    let stringCar = "";
    for (let index = 0; index < carCollection.length; index++) {
      includesCar.push(carCollection[index]);
      stringCar = stringCar + "," + carCollection[index];
    }
    return `new car collection is : ${stringCar.replace(",", "")}.`;
  } else {
    return `${carBrand} has already existed in the ${
      carCollection.indexOf(carBrand) + 1
    } position of the car collection.`;
  }
}

//ผลลัพธ์ที่ควรได้จาก Example case
//ในกรณีที่ยังไม่มียี่ห้อรถใน carCollection
console.log(updateCarCollection("audi")); //new car collection is : toyota,fiat,honda,bmw,audi.

//ในกรณีที่มียี่ห้อรถใน carCollection
console.log(updateCarCollection("toyota")); //toyota has already existed in the 1 position of car collection.

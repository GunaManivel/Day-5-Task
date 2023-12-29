// iterate using for each 


const obj = {
    "Name" : "Guna",
    "Age" : "23",
    "Address" : "Tambram,chennai",
    "Email": "gunamani0461@gmail.com",
    "Phnno" : "9360453234"
}

const keys = Object.keys(obj);
keys.forEach(key => {
    console.log(key + ":", obj[key]);
  });
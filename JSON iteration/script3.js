// iterate using for of loop


const obj = {
    "Name" : "Guna",
    "Age" : "23",
    "Address" : "Tambram,chennai",
    "Email": "gunamani0461@gmail.com",
    "Phnno" : "9360453234"
}
let keys = Object.keys(obj);

for(let key of keys)
{
    console.log(key + ":",obj[key]);
}

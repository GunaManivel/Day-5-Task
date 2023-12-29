// iterate using for in loop


const obj = {
    "Name" : "Guna",
    "Age" : "23",
    "Address" : "Tambram,chennai",
    "Email": "gunamani0461@gmail.com",
    "Phnno" : "9360453234"
}

for(let keys in obj)
{
    console.log(keys + ":",obj[keys]);
}

// iterate using for loop


const obj = {
    "Name" : "Guna",
    "Age" : "23",
    "Address" : "Tambram,chennai",
    "Email": "gunamani0461@gmail.com",
    "Phnno" : "9360453234"
}

let keys = Object.keys(obj);
for(let i=0; i>=0; i++)
{
    if(keys[i])
    {
        console.log(`${keys[i]} : ${obj[keys[i]]}`);
    }
    else
    {
        break;
    }
}

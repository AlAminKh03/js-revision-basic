// apply মেথড হবুহু call মেথড এর মতো, শুধু একটাই পার্থক্য apply তে প্যারামিটার হিসেবে একটা array নেয় । 
const mobilePhone = {
    vaberText: function (createdIn, designedIn) {
        return `amar kache ache ${this.brand} er ${this.model} created in ${createdIn}  and designedIn ${designedIn}`
    }
}

const amarPhone = {
    brand: 'samsung',
    model: 'A10s'
}
console.log(mobilePhone.vaberText.call(amarPhone, ["korea"], ["gulistan"]))
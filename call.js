// call হচ্ছে এমন এক জিনিস বা মেথড যার মাধ্যমে অন্য আরেকটি অব্জেট থেকে মেথড বা ফাংশন ইউস করা যায়
const mobilePhone = {
    vaberText: function () {
        return `amar kache ache ${this.brand} er ${this.model}`
    }
}

const amarPhone = {
    brand: 'samsung',
    model: 'A10s'
}
//  এখন যদি এই amarphone থেকে mobilephone এর ফাংশন বা মেথড এক্সেস করতে চাই তাহলে call eplai korte hobe 
console.log(mobilePhone.vaberText.call(amarPhone));
// আমরা ইচ্ছা করলে প্যারামিটার ও ইউস করতে পারি 
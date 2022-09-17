class SmartPhone {
    constructor(brand, model) {
        this.brand = brand,
            this.model = model
    }
    // class method এ ফাংশন কল করলে তার জন্য আলাদা করে function বা const লিখতে হয় না 
    getModel() {
        console.log(this.model)
    }
}

const amarPhone = new SmartPhone("Samsung", "A10s")
amarPhone.getModel()

// extends মানে অন্য কোনো ফাংশন এর প্রোপার্টি এক্সেস করা যেমন ঃ 
class FoldPhone extends SmartPhone {
    constructor(brand, model, foldAble) {
        // আগে দিক্লেয়ার করা মেথড super দিয়ে কল করে আনতে হয় এবং নতুন মেথড আগের মতই ডিক্লেয়ার করাযায় 
        super(brand, model)
        this.foldAble = foldAble

    }
}

// বাকি মেথড আগের মতই 
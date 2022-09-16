function SmartPhone(brand, model, makeYear) {
    this.brand = brand,
        this.model = model,
        this.makeYear = makeYear,
        this.makeCall = function (phoneNumber) {
            console.log("enam er phone number ", phoneNumber)
        }
}

const alAmin = new SmartPhone("Samsung", "Note 10", 2022)
// console.log(alAmin)

const enam = new SmartPhone("Realme", "narzo 20", 2022)
console.log(enam.makeCall("01737468327"))

// ১, this কি ওয়ার্ড তার নিজস্ব object কে রেফার করে
// ২, সাধারনত এটি উইন্ডো object কে রেফার করে
// এটি একটি ফাংশন constructor মেথড 
class NotFoundError extends Error {
    constructor(name, ...rest) {
        super(...rest)
        this.name = name
    }
    toJSON() {
        let name = this.name
        let message = this.message

        return {
            name, message
        }
    }
}

try {
    throw new NotFoundError("NotFOundError", "The post is not found")
} catch (error) {
    console.log(error.toJSON())
}
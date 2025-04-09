const { z } = require('zod')

const contactSchema = z.object({
    username: z
        .string({required_error:"Name is required"})
        .trim()              //trim() is a string function that removes white spaces, tabs and specisl characters from the string
        .min(3, {message: "Min 3 letters req"})
        .max(255, {message: "Max 255 letters req"}),
    email: z
        .string({required_error:"email is required"})
        .trim()
        .email({message: "Should be an email"})
        .min(3, {message: "Min 3 letters req"})
        .max(255, {message: "Max 255 letters req"}),
    message: z
        .string({message: "Should be a string"})
        .min(10, {message: "Min 10 letters req"})
        .max(1000, {message: "Max 1000 letters req"})
})

module.exports = contactSchema
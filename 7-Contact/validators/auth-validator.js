const {z} = require('zod')

const loginSchema = z.object({
        email: z
            .string({required_error:"email is required"})
            .trim()
            .email({message: "Should be an email"})
            .min(3, {message: "Min 3 letters req"})
            .max(255, {message: "Max 255 letters req"}),
        password: z
            .string({required_error:"Password is required"})
            .min(3, {message: "Min 3 letters req"})
            .max(255, {message: "Max 255 letters req"}),
})

const signupSchema = z.object({
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
    phone: z
        .string({required_error:"Phone is required"})
        .min(10, {message: "Min 10 letters req"})
        .max(10, {message: "Max 10 letters req"}),
    password: z
        .string({required_error:"Password is required"})
        .min(3, {message: "Min 3 letters req"})
        .max(255, {message: "Max 255 letters req"}),
})

module.exports = {signupSchema, loginSchema};
"use server"

export async function loginAction(preSate: any, fromData: any) {
    try {
        const email = fromData.get("email")
        const password = fromData.get("password")

        console.log(email, password)
    } catch (error) {
        console.log(error)
    }
}
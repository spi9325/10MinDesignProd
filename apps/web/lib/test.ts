export function test(){
    console.log("under test")
    console.log(process.env.AUTH?.split(" "))
    return process.env.AUTH
}
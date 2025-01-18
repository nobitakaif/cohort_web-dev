let n:number | string =1
n="kaif"

function greetName(name:string){
    console.log("your name is" + name)
}
function sum(a:number , b:number){
    return a+b;
}
function isAdult(input:number){
    if(input>=18){
        return true 
    }else{
        return false;
    }
}
function delayfunction(fn:()=>void){
    setTimeout(fn,3000)
}
function opa(){

let a ="2020.54.22"

console.log(a.substring(0,4))

if(a.substring(0,4) < 1950 || a.substring(0,4) > new Date().getFullYear() ){
    console.log("wow!")
    console.log(a.substring(0,4))
}
     
    }


    opa()
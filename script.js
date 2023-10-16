function myFunction(){

    var variable1; // NEbudeme používat !
    let variable2;//Budeme používat!
   const variable3=3;// nemohu poté zmenit
   variable4= "ahoj"// STRING
   variable5= 5 //NUMBER/INT/INTEGER
   variable6= true//BOOLEAN

   const userFirstName=document.getElementById("firstName").value
   console.log(userFirstName)


   const userLastName=document.getElementById("lastName").value

   const fullName= userFirstName + " " + userLastName

   document.getElementById("fullName").value=userFullNAme
} 
function addition(){
    const inputFirstNumber = parseInt(document.getElementById("firstNumber").value)
    const inputSecondNumber = parseInt(document.getElementById("secondNumber").value)


    document.getElementById("fullName").value=additionResult
}
function subtraction(){
    const inputFirstNumber = parseInt(document.getElementById("firstNumber").value)
    const inputSecondNumber = parseInt(document.getElementById("secondNumber").value)

    document.getElementById("fullName").value=additionResult

}
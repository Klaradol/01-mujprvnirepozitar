function myFunction(){

    var variable1; // NEbudeme používat !
    let variable2;//Budeme používat!
   const variable3=3;// nemohu poté zmenit
   variable4= "ahoj"// STRING
   variable5= 5 //NUMBER/INT/INTEGER
   variable6= true//BOOLEAN

   const userFirstName=document.getElementById("firstName").value
   console.log(userFirstName)
   const userLirstName=document.getElementById("lirstName").value
   const fullName= userFirstName + " " + userLastName
   document.getElementById("fullName").value=userFullNAme
} 
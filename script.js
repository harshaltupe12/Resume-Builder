//alert("testing script");

function addNewWEField() {
  // console.log("Adding New Field")                        // adding more text field in Working experience
   let newNode = document.createElement("textarea");
   newNode.classList.add("form-control");
   newNode.classList.add("weField");
   newNode.classList.add("mt-2");
   newNode.setAttribute("rows",3);
   newNode.setAttribute("placeholder", "Enter here");

   let weOb = document.getElementById("we");
   let weAddButtonOb = document.getElementById("weAddButton");

   weOb.insertBefore(newNode, weAddButtonOb)

}

function addNewAQField() {                                 // adding more text field in Acedmic qulification
    
   let newNode = document.createElement("textarea");
   newNode.classList.add("form-control");
   newNode.classList.add("eqField");
   newNode.classList.add("mt-2");
   newNode.setAttribute("rows",3);
   newNode.setAttribute("placeholder", "Enter here");

   let aqOb = document.getElementById("aq");
   let aqAddButtonOb = document.getElementById("aqAddButton");

   aqOb.insertBefore(newNode, aqAddButtonOb)

}

//generating Resume start here
function generateCV()
{
   //console.log("generating cv")

  let nameField= document.getElementById("nameField").value; 
   
   let nameT1=document.getElementById('nameT1')

   nameT1.innerHTML = nameField;


   // Heading

   document.getElementById("nameT2").innerHTML=nameField

   //Contact

   document.getElementById("contactT").innerHTML = document.getElementById(
      "ContactField"
      ).value;

   //address

   document.getElementById("addressT").innerHTML = document.getElementById(
      "addressField"
      ).value;

      //important links

      document.getElementById("gmailT").innerHTML = document.getElementById(
         "emailField"
         ).value;

         document.getElementById("fbT").innerHTML = document.getElementById(
            "fbField"
            ).value;

            document.getElementById("instaT").innerHTML = document.getElementById(
               "instaField"
               ).value;

               document.getElementById("linkedT").innerHTML = document.getElementById(
                  "linkedField"
                  ).value;

            
                  //objective

                  document.getElementById("objectiveT").innerHTML=document.getElementById("objectiveField").value;

                  //work experience

                  let wes=document.getElementsByClassName('weField')

                  let str=''

                  for(let e of wes)

                  {
                     str=str+ `<li> ${e.value} </li>`;

                  }

                  document.getElementById("weT").innerHTML = str;

                  //acedmic Qulification

                  let aqs=document.getElementsByClassName("eqField")

                  let str1=''

                  for(let e of aqs)
                  {
                     str1+=`<li> ${e.value} </li>`

                  }
                  document.getElementById("aqT").innerHTML=str1;

                  //Script for setting image

                  let file=document.getElementById("imgField").files[0];

                  console.log(file);

                  let reader=new FileReader();
                  
                  reader.readAsDataURL(file);

                  console.log(reader.result);

                  //set image in template

                  reader.onloadend=function()
                  {
                     document.getElementById("imgTemplate").src = reader.result;
                  }


                  document.getElementById("cv-form").style.display="none";

                  document.getElementById("cv-template").style.display="block"; 


}

//Print Resume
function printCV()
{
   window.print();

}

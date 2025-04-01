/*    JavaScript 7th Edition
      Chapter 2
      Project 02-04

      Application to calculate the cost of a restaurant order plus tax
      Author: Ashton Pate
      Date:   4-1-2025

      Filename: project02-04.js
 */
 
      //decalres variables
      const CHICKEN_PRICE = 10.95;
      const HALIBUT_PRICE = 13.95;
      const BURGER_PRICE = 9.95;
      const SALMON_PRICE = 18.95;
      const SALAD_PRICE = 7.95;
      const SALES_TAX = 0.07;



      //runs the calctotal function if an id is clicked
      document.getElementById("chicken").onclick.calcTotal;
      document.getElementById("halibut").onclick.calcTotal;
      document.getElementById("burger").onclick.calcTotal;
      document.getElementById("salmon").onclick.calcTotal;
      document.getElementById("salad").onclick.calcTotal;



      //function to calcualte total
      function calcTotal()
      {
         //decalvers variabels
         let cost = 0;
         let tax = 0;
         let totalCost = 0;

         //step 4 b
         const buyChicken = document.getElementById("chicken").click;
         const buyHalibut = document.getElementById("halibut").click;
         const buyBurger = document.getElementById("burger").click;
         const buySalmon= document.getElementById("salmon").click;
         const buySalad = document.getElementById("salad").click;

         //adds price if it was selected
         if (buyChicken = true)
         {
            cost += CHICKEN_PRICE;
         }
         if (buyHalibut = true)
        {
             cost += HALIBUT_PRICE;
        }
        if (buyBurger = true)
         {
            cost += BURGER_PRICE;
         }
         if (buySalmon = true)
            {
               cost += SALMON_PRICE;
            }
            if (buySalad = true)
               {
                  cost += SALAD_PRICE;
               }

        
         //caluates tax
        tax = cost * SALES_TAX;

        //caluates total cost
        totalCost = cost + tax;



         

      }






// Function to display a numeric value as a text string in the format $##.## 
 function formatCurrency(value) {
    return "$" + value.toFixed(2);
 }


 //step 4 d
 document.innerHTML.formatCurrency(cost);

 //step 4 f
 document.innerHTML.formatCurrency(tax);

 //step 4 h
 document.innerHTML.formatCurrency(totalCost);

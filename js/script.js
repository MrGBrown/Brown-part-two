let vacationType = prompt(" What kind of trip would you like to go on, musical, tropical, or adventurous?");
let groupSize = prompt("How many are in your group?");
if (vacationType == 'musical' && groupSize <= 2) {
 let result = "Since you're a group of "+ groupSize +" going on a "+ vacationType +" vacation, you should take a first class flight to New Orleans";
 alert(result);
 console.log(result);} 
 else if (vacationType == 'tropical' && groupSize <= 2) {
 let result = "Since you're a group of "+ groupSize +" going on a "+ vacationType +" vacation, you should take a beach vacation in Mexico";
 alert(result);
 console.log(result);}
else if (vacationType == 'adventurous' && groupSize <= 2) {
 let result = "Since you're a group of "+ groupSize +" going on a "+ vacationType +" vacation, you should take a charter flight to whitewater rafting the Grand Canyon";
 alert(result);
 console.log(result);}
 else if (vacationType == 'musical' && groupSize >= 3 && groupSize <= 5) {
 let result = "Since you're a group of "+ groupSize +" going on a "+ vacationType +" vacation, you should take a helicopter to New Orleans";
 alert(result);
 console.log(result);}
 else if (vacationType == 'tropical' && groupSize >= 3 && groupSize <= 5) {
 let result = "Since you're a group of "+ groupSize +" going on a "+ vacationType +" vacation, you should take a helicopter to a beach vacation in Mexico";
 alert(result);
 console.log(result);}
 else if (vacationType == 'adventurous' && groupSize >= 3 && groupSize <= 5) {
 let result = "Since you're a group of "+ groupSize +" going on a "+ vacationType +" vacation, you should take a helicopter to whitewater rafting the Grand Canyon";
 alert(result);
 console.log(result);}
 else if (vacationType == 'musical' && groupSize >= 6) {
 let result = "Since you're a group of "+ groupSize +" going on a "+ vacationType +" vacation, you should take a charter flight to New Orleans";
 alert(result);
 console.log(result);}
 else if (vacationType == 'tropical' && groupSize >= 6) {
 let result = "Since you're a group of "+ groupSize +" going on a "+ vacationType +" vacation, you should take a charter flight to a beach vacation in Mexico";
 alert(result);
 console.log(result);}
 else if (vacationType == 'adventurous' && groupSize >= 6) {
 let result = "Since you're a group of "+ groupSize +" going on a "+ vacationType +" vacation, you should take a charter flight to whitewater rafting the Grand Canyon";
 alert(result);
 console.log(result);}
 else {
   alert("I can't make any recommendations!");
   console.log("I can't make any recommendations!")
 }
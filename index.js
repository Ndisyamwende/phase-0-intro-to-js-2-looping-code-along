// Code your solutions in this file
function writeCards(names, occasion) {
    const thankYouMessages = [];
    for (let i = 0; i < names.length; i++) {
      thankYouMessages.push(`Thank you, ${names[i]}, for the wonderful ${occasion} gift!`);
    }
    return thankYouMessages;
  } 
  
  function countDown(startingNumber) {
    for (let i = startingNumber; i >= 0; i--) {
      console.log(i);
    }
  }
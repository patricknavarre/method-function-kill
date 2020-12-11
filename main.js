/******************
 * YOUR CODE HERE *
 ******************/

const Person = function (newFirstName, newLastName, newAge = 0, newMarried = false) {
  return {
    firstName : newFirstName,
    lastName : newLastName, 
    age : newAge, 
    married : newMarried,

    getFirstName: function() {
      return `${this.firstName}`
    },

    getLastName: function() {
      return `${this.lastName}`
    },

    goingOn: function() {
      return this.age + 1
    },

    ageUp: function() {
      return this.age++
    },

    getFullName: function() {
      return `${this.firstName}` `${this.lastName}`
    },






    





  }
  
}


/*********************************
 * OUR CODE BELOW; DO NOT TOUCH! *
 *********************************/

if (typeof Person === 'undefined') {
  Person = undefined;
}


module.exports = Person;

// 1

function Person(firstName,lastName){
    this.firstName=firstName;
    this.lastName=lastName;

}

const member=new Person('Lydia','Helie');

Person.getFullName=function(){
    return `${this.firstName} ${this.lastName}`
}

console.log(member.getFullName());  // TypeError

/* The member object doesn't have a getFullName method 
because it was added to the Person constructor function,
 not to the objects created from it. So, when you try to call member.getFullName(),
  JavaScript doesn't find that method and throws an error.

To fix this, you need to add the getFullName method to the prototype of the Person function 
so that all objects created using Person will have access to it: 

function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  
  Person.prototype.getFullName = function() {
    return `${this.firstName} ${this.lastName}`;
  };
  
  const member = new Person('Lydia', 'Hallie');
  
  console.log(member.getFullName()); // Output: Lydia Hallie

 /*  In this corrected version, getFullName is added to the prototype of Person,
   making it available to all instances of Person, including member. */
  
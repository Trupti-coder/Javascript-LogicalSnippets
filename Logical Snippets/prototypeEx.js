function Person(firstName,lastName){
    this.firstName=firstName;
    this.lastName=lastName;

}

const member=new Person('Lydia','Helie');

Person.getFullName=function(){
    return `${this.firstName} ${this.lastName}`
}
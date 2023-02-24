// using Dot Notation ///
const person = {
    name:"prem",
    age:23,
    mailid:"prem99@gmail.com",
    mobileNo:9945,
  }
  console.log(person.name);
  console.log(person.age);
  console.log(person.mailid);
  console.log(person.mobileNo);

  // using Square Bracket Notation //

  const Person = {
    name:"prem",
    age:23,
    mailid:"prem99@gmail.com",
    mobileNo:9945,
  }
  console.log(person["name"]);
  console.log(person["age"]);
  console.log(person["mailid"]);
  console.log(person["mobileNo"]);
// -- nested object ///

  let pperson = {
    name:"prem",
    age:23,
    marks:{
      science:75,
      math:89
    }
  }
  console.log(person.name);
       console.log(person.age);
  console.log(person.marks.math);


  let PPerson = {
    name:"prem",
    age:23,
   greet: function(){console.log('hello')
    }
  }
  console.log(person.name);
   person.greet();  
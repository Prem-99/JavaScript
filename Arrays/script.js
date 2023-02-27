// simple Array
const Array = ['g','d', 'r','y']

console.log(Array[0]);

console.log(Array[1]);

// .push method Add element At the end //

let Activities = ['excercise','eat']

 Activities.push("sleep")

console.log(Activities);

//.unshift method Add element at the begining of the array //

let dailyActivities = ['sleep','eat']

 dailyActivities.unshift("work")

console.log(dailyActivities);

// we can alaso  add data or change using index values //

let Data = ['sleep','eat']

Data[2]= 'Work'

console.log(Data);

// out of the index value  shows undefined //

let Data1 = ['sleep','eat']

Data1[3]= 'Work'

console.log(Data1);

// .pop method remove the element at the end //

let removeData = ['sleep','eat','excerise','study']

removeData.pop()

console.log(removeData);

//   .shift   remove the element at the begining //

let removeData1 = ['sleep','eat','excerise','study']

removeData1.shift()

console.log(removeData1);
// array length //

let Alength = ['sleep','eat','excerise','study']


console.log(Alength.length);

// methods of arrays //

let Activities1 = ['sleep', 'work','eat']

let newRoutine = ['excerise']

// sort() function

Activities1.sort();
console.log(Activities1);

// indexOf() //

const position = Activities1.indexOf('work');
console.log(position); // 2//

// cocat()// 

const routine = Activities1.concat(newRoutine)
console.log(routine);

// forEach function // 


const number  = [23,45,13,16]

number.forEach((num)=>{
                
      console.log(num);
})

// using names //

const strings = ['apple','banana','grapes']

strings.forEach((str)=>{
  console.log(str)
});

// map function //


let map =  new Map();

map.set('name','prem');
map.set('age','23');

map.forEach((key , values)=>{
          console.log(key + '_' + values)  ; 
             })
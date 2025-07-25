let details={
    name:"js",totalmark:100
}
console.log(details.name,details.totalmark)
console.log(details["totalmark"])
//an array of object is a collection where each elements is an object with properties.
//this is used to group related data together in a structer way
let detail={
    subject:{
        dbms:100,
        java:100,
    }
}
console.log(detail.subject.dbms,"\n",detail.subject.java)

let per={
    subject:{
        dbms:100,
        java:100
    },
    sum:function(){
        let total=this.subject.dbms+this.subject.java
        return total
    }
}
console.log(per.sum())

/*object destructuring is a syntax in javascript that allows you to extart values from object and assign 
them to variable in a clean amd readable data*/

let person={
    job:"softwaretester",
    salary:25000
}
const {job,salary}=person
console.log(job+" "+salary);

let arr=new Array(1,2,"three");
console.log(arr[2])
let arr2=["js",true,false]

const[name,b1,b2]=arr2
console.log(name)
//filter returns a new array containg only the elements that match a condition

let student=[
    {name:"person1",grade:"A"},
    {name:"person2",grade:"B"},
    {name:"person3",garde:"c"}
]
let gardestudent=student.filter(student => students.garde==="A")
console.log(gardestudent)

///

let names=["person1,person2,person3"];
names.splice(1,1,"david")
console.log(names)

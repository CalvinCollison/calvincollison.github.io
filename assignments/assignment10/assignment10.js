//Problem one
console.log("Problem 1");
let sam = {
    firstName: "Sam",
    department: "Tech",
    designation: "Manager",
    salary: 40000,
    raise: true,
    workFromHome: false
}
let mary = {
    firstName: "Mary",
    department: "Finance",
    designation: "Trainee",
    salary: 18500,
    raise: true,
    workFromHome: false
}
let bill = {
    firstName: "Bill",
    department: "HR",
    designation: "Executive",
    salary: 21200,
    raise: false,
    workFromHome: false
}
let anna = {
    firstName: "Anna",
    department: "Tech",
    designation: "Executive",
    salary: 25600,
    raise: false,   
    workFromHome: false
}
console.log(sam);
console.log(mary);
console.log(bill);

//Problem two
console.log("Problem 2");
let company = {
    companyName: "Tech Stars",
    website: "www.techstars.site",
    employees: [sam, mary, bill],
    wfh: []
}
console.log(company);

//Problem 3
console.log("Problem 3");
company.employees.push(anna);
console.log(company.employees);
console.log(anna);

//Problem 4
console.log("Problem 4");
let total = 0;
for(let i = 0; i < company.employees.length; i++){
    total += company.employees[i].salary;
}
console.log(`Total salary: $${total}`);

//Problem 5
console.log("Problem 5");
function giveRaise(){
    for(let employee of company.employees){
        if (employee.raise){
            employee.salary *= 1.10;
            employee.raise = false;
            console.log(`Raise given to ${employee.firstName}: ${employee.salary}`);
        } 
    }
}
giveRaise();
//Problem 6
console.log("Problem 6");
let empWFH = ['Anna', 'Sam']
for (let name of empWFH){
    for(let employee of company.employees){
        if(name === employee.firstName){
            employee.workFromHome = true;
            company.wfh.push(name);
            console.log(`${employee.firstName} works from home: ${employee.workFromHome}`);
        }
    }
}

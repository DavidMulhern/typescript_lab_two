let num1: number =5;
console.log(num1);

let flag: boolean = true;
console.log(flag);

let colour: string = "Yellow";
console.log(colour);

let list: string[] = ["Hi", "Hello", "Hey"];
for(let i=0; i<list.length; i++)
{
    console.log("Array value " + i + " " + list[i]);
}

let notSure: any = 10;
console.log(notSure);

let listAny: any[] = [2, true, "testing"];
for(let i=0; i<listAny.length; i++)
{
    console.log("Array value " + i + " " + listAny[i]);
}
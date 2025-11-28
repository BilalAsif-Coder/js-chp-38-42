//Q No 1
//A no 1 

function power(a, b) {
    return a ** b

}
console.log(power(5, 2))

//Q no 2 
//A no 2 

function leap(year) {
    if (year % 4 == 0) {
        console.log(`${year} is a leap year `)
    } else {
        console.log(`${year} is a not a leap year `)
    }
} leap(1965)

//Q no 3 
//A no 3 

function equation(a, b, c) {
    let s = (a + b + c) / 2
    console.log(s)
    function equation2() {
        let equation3;
        equation3 = s(s - a) * (s - b) * (s - c)
        return equation3

    }
} equation(5, 4, 7)




//Q no 4 
//A no 4          
function mainsubject() {
    function sub(sub1, sub2, sub3) {
        let numberOfSub = 3
        let numberOfMarks = 100
        let total = numberOfSub * numberOfMarks

        function avg() {
            let avg = (sub1 + sub2 + sub3) / numberOfSub

            console.log(`The total avg is ${avg}`)
        } avg()
        function per() {
            let per = ((sub1 + sub2 + sub3) / total) * 100
            console.log(`the  persentage is ${per}%`)

        } per()



    } sub(90, 90, 90)


} mainsubject()






//Q No 6
//A no 6 
let para = " i am bilal".toLocaleLowerCase()
let array = para.split("")
for (let i = 0; i < array.length; i++) {
    if (array[i] == "a" || array[i] == "e" || array[i] == "i" || array[i] == "o" || array[i] == "u") {
        array.splice(i, 1)

    }
} console.log(array.join("").trim())




//Q no 9
//A no 9

function  overtime (worktime) {
    let employOvertime = 0 
    if (worktime > 40 ) {
        employOvertime = worktime - 40 ;
        console.log(`the overtime is ${employOvertime}hr and the overtime pay you ${employOvertime * 12}rupess`)
    }else {
        console.log(`There is no overtime `);
        
    }

}
console.log(overtime(50))



















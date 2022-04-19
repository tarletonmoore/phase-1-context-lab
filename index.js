/* Your Code Here */
function createEmployeeRecord(array) {

    let object = {
        firstName: array[0],
        familyName: array[1],
        title: array[2],
        payPerHour: array[3],
        timeInEvents: [],
        timeOutEvents: [],

    }
    return object
}

function createEmployeeRecords(array) {

    return array.map(element => createEmployeeRecord(element))
}

function createTimeInEvent(date) {

    let time = date.split(` `)[1]
    let dates = date.split(` `)[0]
    let timeInObject = {
        type: "TimeIn",
        hour: parseInt(time),
        date: dates,
    }
    this.timeInEvents.push(timeInObject)
    return this
}

function createTimeOutEvent(date) {
    let timeOutObject = {
        type: "TimeOut",
        hour: parseInt(date.split(` `)[1]),
        date: date.split(` `)[0],
    }
    this.timeOutEvents.push(timeOutObject)
    return this
}

function hoursWorkedOnDate(date) {
    const timeIn = this.timeInEvents.find(element => element.date === date)

    const timeOut = this.timeOutEvents.find(element => element.date === date)
    return (timeOut.hour - timeIn.hour) / 100
}

function wagesEarnedOnDate(date) {
    // const timeIn = this.timeInEvents.find(element => element.date === date)
    // const timeOut = this.timeOutEvents.find(element => element.date === date)
    const wages = this.payPerHour
    console.log("wages", wages)
    // return (timeOut.hour - timeIn.hour) / 100 
    return hoursWorkedOnDate.call(this, date) * wages

}

// function allWagesFor() {
//     let allWages = this.timeInEvents.map(element => wagesEarnedOnDate(this, element.date))
//     console.log("wages", allWages)
//     let total = 0
//     allWages.forEach(element => total = element + total)
//     return total
// }

function findEmployeeByFirstName(srcArray, firstName) {
    console.log("new", srcArray, firstName)
    return srcArray.find(element => element.firstName === firstName)
}

function calculatePayroll(array) {
    let sum = array.reduce((preValue, curValue) => {

        return preValue + allWagesFor.call(curValue)
    }, 0)
    return parseInt(sum)
    // return array.forEach(element => element.firstName + allWagesFor.call(this))
}

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}


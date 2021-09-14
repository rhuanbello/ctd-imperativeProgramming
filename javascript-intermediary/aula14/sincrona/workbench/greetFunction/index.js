function greet(name, dayTime) {
    dayTime = dayTime.toLowerCase()

    if (dayTime == 'day') {
        console.log(`Good Morning, Mr. ${name}`)
    } else if (dayTime == 'evening') {
        console.log(`Good Evening, Mr. ${name}`)
    } else if (dayTime == 'night') {
        console.log(`Good Night, Mr. ${name}`)
    } else {
        console.log(`Have a good day anyway, Mr. ${name}`)
    }

}

module.exports = greet;
// preparando a função greet para exportação
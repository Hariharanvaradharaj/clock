function digitalClock(){
    let dateFunction = new Date()
    let day = dateFunction.getDay()
    let hours = dateFunction.getHours()
    let minutes = dateFunction.getMinutes()
    let seconds = dateFunction.getSeconds()
    let date = dateFunction.getDate()
    let Month = dateFunction.getMonth()+1
    let year = dateFunction.getFullYear()
    let timeFormat = 'AM'

    timeFormat = hours >= 12 ? 'PM' : 'AM'
    hours = hours == 0 ? 12 : hours
    hours = hours > 12 ? hours - 12 : hours
    hours = hours < 10 ? '0' + hours : hours
    minutes = minutes < 10 ? '0' + minutes : minutes
    seconds = seconds < 10 ? '0' + seconds : seconds

    document.querySelector('.hours').innerHTML = hours
    document.querySelector('.minutes').innerHTML = minutes
    document.querySelector('.seconds').innerHTML = seconds
    document.querySelector('.format').innerHTML = timeFormat
    document.querySelector('.Date').innerHTML = date
    document.querySelector('.month').innerHTML = Month
    document.querySelector('.year').innerHTML = year
    


    let todaysDay = document.querySelector(`.weekdays :nth-child(${day + 1})`)
    todaysDay.classList.add('active')
}
setInterval(digitalClock, 1000)
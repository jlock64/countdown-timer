// countdown function that takes in an endDate, i.e. 04/01/2030 05:00:00 PM
function startCountdown(endDate) {
  let days, hours, minutes, seconds
  
  // Convert endDate parameter into a JavaScript Date object
  // Then the getTime() method returns the number of milliseconds* since the Unix Epoch. (Jan. 1, 1970)
  // JavaScript uses milliseconds as the unit of measurement, whereas Unix Time is in seconds.
  // endDate = new Date(endDate).getTime()
  // Use this endDate for a 5 minute timer and comment out above
  var endDate = new Date().getTime() + 300000 // add 5 minutes to right now
  
  if (isNaN(endDate)) return
  
  setInterval(calculateTimer, 1000)  // use setInterval to call our function every 1000 milliseconds = 1 second
  
  function calculateTimer() {
    let startDate = new Date()  // get the time right now in milliseconds
    startDate = startDate.getTime()
    let timeRemaining = parseInt((endDate - startDate) / 1000 )  // get time remaining in seconds
    
    if (timeRemaining >= 0) {
      
      // Get days remaining by dividing timeRemaining in seconds by the seconds in one day => 86,400
      // and use parseInt to make sure we are working with whole numbers i.e parseInt(200000 / 86400) => 2
      days = parseInt(timeRemaining / 86400)  // 86,400 seconds in a day
      timeRemaining = timeRemaining % 86400  // now subtract days from time remaining to give us the remainder of time
      
      hours = parseInt(timeRemaining / 3600) // 3600 seconds in an hour
      timeRemaining = timeRemaining % 3600
      
      minutes = parseInt(timeRemaining / 60) // 60 seconds in a minute
      timeRemaining = timeRemaining % 60
      
      seconds = parseInt(timeRemaining)
  
      // Parse days variable and set radix to 10 to ensure our result is set in the decimal system
      document.getElementById("days").innerHTML = parseInt(days, 10)
      // Add 0 to variable then slice 2 characters from the back (i.e. "04" = 04 hours, "023" = 23 hours
      document.getElementById("hours").innerHTML = ("0" + hours).slice(-2)
      document.getElementById("minutes").innerHTML = ("0" + minutes).slice(-2)
      document.getElementById("seconds").innerHTML = ("0" + seconds).slice(-2)
      
      
    } else return
  }
}

function stopCountdown() {
  clearInterval(startCountdown())
}

function startTimerTwo() {
// Set the date we're counting down to
// var countDownDate = new Date("Jan 5, 2021 15:37:25").getTime()
var countDownDate = new Date().getTime() + 302000

// Update the count down every 1 second
var x = setInterval(function() {
  
  // Get todays date and time
  var now = new Date().getTime()
  
  // Find the remainingTime between now and the count down date
  var remainingTime = countDownDate - now
  
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(remainingTime / (1000 * 60 * 60 * 24))
  var hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  var minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60))
  var seconds = Math.floor((remainingTime % (1000 * 60)) / 1000)
  
  // Output the result in an element with id="demo"
  document.getElementById("timerTwo").innerHTML = days + "d " + hours + "h "
      + minutes + "m " + seconds + "s "
  
  // If the count down is over, write some text
  if (remainingTime < 0) {
    clearInterval(x)
    document.getElementById("demo").innerHTML = "EXPIRED"
  }
}, 1000)}

// IIFE - immediately invoked function expression which fires on page load
// (function () {
//   var fiveMinuteTimer = new Date().getTime() + 300000
//   console.log('fiveMinuteTimer: ', fiveMinuteTimer)
//   countdown(fiveMinuteTimer)
// }())


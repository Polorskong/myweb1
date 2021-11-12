 //Date- time
 let startButton = document.getElementById("submit")
 let showOnStart = document.getElementById("date")
 let stopButton = document.getElementById("submit1")
 let clearButton = document.getElementById("submit2")
 let showOnStop = document.getElementById("stop")
 let showMinute = document.getElementById("minute")
 let showMoney = document.getElementById("money")


 var myVar = setInterval(myTimer, 1000);
 function myTimer() {
     var d = new Date()
     var t = d.toString().split(" ")
     var date = `${t[0]}`+" "+`${t[2]}`+"\t"+`${t[1]}`+"\t"+`${t[3]}, `
     var time = d.toLocaleTimeString()
     document.getElementById("showTime").innerHTML = date
     document.getElementById("showTime2").innerHTML = time

 }



 

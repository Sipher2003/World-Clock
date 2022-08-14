 // Indian time
 let a
 let date
 let time
 setInterval(() => {
     a = new Date();
     date = a.toLocaleDateString({ timeZone: 'Asia/Kolkata' })
     time = a.getHours() + ':' + a.getMinutes() + ':' + a.getSeconds()
     // if(time==00+':'+00+":"+00){
     //     date=date+1
     // }
     document.getElementById('time').innerHTML = time + " on " + date
 }, 1000);
 //    NY time
 let a1
 let date1
 let time1
 setInterval(() => {
     a1 = new Date();
     date1 = a1.toLocaleDateString({ timeZone: 'America/New_York' })
     a1.setHours(a1.getHours() - 9)
     a1.setMinutes(a1.getMinutes() - 30)
     time1 = a1.getHours() + ':' + a1.getMinutes() + ':' + + a1.getSeconds()
     document.getElementById('time1').innerHTML = time1 + " on " + date1
 }, 1000);
 //        Milan Time
 let a2
 let date2
 let time2
 setInterval(() => {
     a2 = new Date();
     date2 = a2.toLocaleDateString({ timeZone: 'Europe/Rome' })
     a2.setHours(a2.getHours() - 3)
     a2.setMinutes(a2.getMinutes() - 30)
     time2 = a2.getHours() + ':' + a2.getMinutes() + ':' + + a2.getSeconds()
     document.getElementById('time2').innerHTML = time2 + " on " + date2
 }, 1000);
 //         Madrid Time
 let a3
 let date3
 let time3
 setInterval(() => {
     a3 = new Date();
     date3 = a3.toLocaleDateString({ timeZone: 'Europe/Madrid' })
     a3.setHours(a3.getHours() - 3)
     a3.setMinutes(a3.getMinutes() - 30)
     time3 = a3.getHours() + ':' + a3.getMinutes() + ':' + + a3.getSeconds()
     document.getElementById('time3').innerHTML = time3 + " on " + date3
 }, 1000);
 //           Manchester Time
 let a4
 let date4
 let time4
 setInterval(() => {
     a4 = new Date();
     date4 = a4.toLocaleDateString({ timeZone: 'Europe/London' })
     a4.setHours(a4.getHours() - 4)
     a4.setMinutes(a4.getMinutes() - 30)
     time4 = a4.getHours() + ':' + a4.getMinutes() + ':' + + a4.getSeconds()
     document.getElementById('time4').innerHTML = time4 + " on " + date4
 }, 1000);
 //         Dubai Time
 let a5
 let date5
 let time5
 setInterval(() => {
     a5 = new Date();
     date5 = a5.toLocaleDateString({ timeZone: 'Asia/Dubai' })
     a5.setHours(a5.getHours() - 1)
     a5.setMinutes(a5.getMinutes() - 30)
     if (a5.getSeconds() <= 9) {
         time5 = a5.getHours() + ':' + a5.getMinutes() + ':' + '0' + a5.getSeconds()
     }
     else {
         time5 = a5.getHours() + ':' + a5.getMinutes() + ':' + + a5.getSeconds()
     }
     document.getElementById('time5').innerHTML = time5 + " on " + date5
 }, 1000);
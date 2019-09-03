// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.


//------Toggle Button Variables-----------//

const emailInput = document.getElementsByClassName('toggleButton email')[0];
const profileInput = document.getElementsByClassName('toggleButton setprofile')[0];

let onEmail = document.getElementsByClassName('on')[0];
let offEmail = document.getElementsByClassName('off')[0];

let onProfile = document.getElementsByClassName('on')[1];
let offProfile = document.getElementsByClassName('off')[1];

let emailToggle = document.getElementsByClassName('toggleButton')[0];
let profileToggle = document.getElementsByClassName('toggleButton')[1];

emailToggle.style.backgroundColor = '#a6a6a6'; //grey
onEmail.style.display = 'none';
profileToggle.style.backgroundColor = '#a6a6a6'; //grey
onProfile.style.display = 'none';

//------Chart Variables-----------//
let timechart = document.getElementsByClassName('timechart')[0];
let hourly = document.getElementsByClassName('hourly')[0];
let daily = document.getElementsByClassName('daily')[0];
let weekly = document.getElementsByClassName('weekly')[0];
let monthly = document.getElementsByClassName('monthly')[0];

//------Traffic Main Chart Variables-----------//
let mainTrafficHourly = document.getElementById('trafficMainHourly');
let mainTrafficDaily = document.getElementById('trafficMainDaily');
let mainTrafficWeekly = document.getElementById('trafficMainWeekly');
let mainTrafficMonthly = document.getElementById('trafficMainMonthly');
mainTrafficHourly.style.display = 'block';
mainTrafficDaily.style.display = 'none';
mainTrafficWeekly.style.display = 'none';
mainTrafficMonthly.style.display = 'none';

//Hourly
const rangeHourly = ['8am', '9am', '10am', '11am', '12pm','1pm', '2pm', '3pm', '4pm', '5pm']
const siteHourly = [17, 30, 46, 51, 43, 49, 27, 31, 42, 18];

//Daily
const rangeDaily = ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat']
const siteDaily = [108, 178, 210, 304, 203, 282, 185 ];

//Weekly
const rangeWeekly = ['1-4', '5-9', '10-14', '15-19', '20-24', '25-29', '30-34', '35-39', '40-42', '43-47', '48-52'];
const siteWeekly = [750, 1250, 1475, 2134, 832, 1975, 1300, 1750, 2300, 1745, 2575];

//Monthly
const rangeMonthly = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec']
const siteMonthly = [2160, 3560, 5200, 2800, 4060, 5640, 3700, 5000, 6560, 4980, 7340, 6200 ];

let mainChartHourly;
let mainChartDaily;
let mainChartWeekly;
let mainChartMonthly;

//------Daily Traffic Chart Variables-----------//
const days = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
const traffic = [70, 100, 150, 125, 225, 200, 120];

//------Mobile Users Chart Variables -----------//
const form = ['Phones', 'Tablets', 'Desktop']
const usage = [15, 23, 70];

//----Message Varaiables-----//
let messageWidget = document.getElementsByClassName('message')[0];
let sendButton =  document.getElementsByClassName('send')[0];
let user = document.getElementsByTagName('input')[1];
let userMessage =  document.getElementsByTagName('textarea')[0];
let confirmation = document.getElementsByClassName('confirmation')[0];


//----Settings Varaiables-----//
let localStorage = window.localStorage;
let settingsWidget = document.getElementById('settings');
let saveButton = document.getElementsByClassName('save')[0];
let cancelButton = document.getElementsByClassName('cancel')[0];
let timeZone = document.getElementsByTagName('select')[0];


//------Call Charts onLoad-----------//
window.onload = function (){


    //------Daily Traffic Bar Chart-----------//
    const dailyBarChart = document.getElementById('dailyTraffic');
        var dailyTraffic = new Chart(dailyBarChart, {
            type: 'bar',
            data: {
                labels: days,
                datasets: [
                    {
                        data: traffic,
                        borderColor: '#7979d2', //purple
                        backgroundColor: '#7979d2', //purple
                        fill: true,
                    }
                ]
            },
            options: {
                legend: {
                    display: false,
                }
            }
        });

       


    //------Mobile Users Donught Chart-----------//

    const mobileUsers = document.getElementById('mobileUsers');
    var mobile = new Chart(mobileUsers, {
      type: 'doughnut',
      data: {
        labels: form,
        datasets: [
            {
            data: usage,
            borderColor: ['#00ace6', '#00cc99', '#7979d2'], //aqua green purple
            backgroundColor: ['#00ace6', '#00cc99', '#7979d2'], //aqua green purple
            fill: true,
            }
                  ]
            },
        options: {
            legend: {
              position: 'right',
              labels: {
              boxWidth: 20,
                      }
                    },
        }
    });


    //------Traffic Main default setting Hourly-----------//
    hourly.style.color = 'white';
    hourly.style.backgroundColor ='#00cc99';
    mainChartHourly = new Chart(mainTrafficHourly, {
      type: 'line',
      data: {
        labels: rangeHourly,
        datasets: [
          {
            label: "",
            data: siteHourly,
            borderColor: '#7979d2', //purple
            backgroundColor: 'rgba(121, 121, 210, .2)', //light-purple
            fill: true,
            borderWidth: 1,
            lineTension: 0,
            pointRadius: 6,
            pointBorderColor:'#7979d2', //purple
            pointBackgroundColor:'#fff', //white
            pointBorderWidth: 1.5,
          }
        ]
      },
      options: {
          responsive: true,
              legend: {
                display: false,
                      },
              scales: {
                  yAxes: [{
                    ticks: {
                            beginAtZero: false,
                            }
                          }]
                        }
                }
    });

    //------Traffic Main Line Chart & Listener-----------//
    timechart.addEventListener('click', function(e){
        //Variables
        mainTrafficHourly = document.getElementById('trafficMainHourly');
        mainTrafficDaily = document.getElementById('trafficMainDaily');
        mainTrafficWeekly = document.getElementById('trafficMainWeekly');
        mainTrafficMonthly = document.getElementById('trafficMainMonthly');

        //reset hourly button
        hourly.style.color = '#808080'; //gray
        hourly.style.backgroundColor ='#fff'; //white

        if( hourly == e.target ) {
          hourly.style.color = 'white';
          hourly.style.backgroundColor ='#00cc99';
              //------Traffic Main Line Chart Hourly-----------//
              mainChartHourly = new Chart(mainTrafficHourly, {
                type: 'line',
                data: {
                  labels: rangeHourly,
                  datasets: [
                    {
                      label: "",
                      data: siteHourly,
                      borderColor: '#7979d2', //purple
                      backgroundColor: 'rgba(121, 121, 210, .2)', //light-purple
                      fill: true,
                      borderWidth: 1,
                      lineTension: 0,
                      pointRadius: 6,
                      pointBorderColor:'#7979d2', //purple
                      pointBackgroundColor:'#fff', //white
                      pointBorderWidth: 1.5,
                    }
                  ]
                },
                options: {
                    responsive: true,
                        legend: {
                          display: false,
                                },
                        scales: {
                            yAxes: [{
                              ticks: {
                                      beginAtZero: false,
                                      }
                                    }]
                                  }
                          }
              });
          mainTrafficHourly.style.display = 'block';
          mainTrafficDaily.style.display = 'none';
          mainTrafficWeekly.style.display = 'none';
          mainTrafficMonthly.style.display = 'none';
          }

          if( daily == e.target) {
              //------Traffic Main Line Chart Daily-----------//
              mainChartDaily = new Chart(mainTrafficDaily, {
                type: 'line',
                data: {
                  labels: rangeDaily,
                  datasets: [
                    {
                      label: "",
                      data: siteDaily,
                      borderColor: '#7979d2', //purple
                      backgroundColor: 'rgba(121, 121, 210, .2)', //light-purple
                      fill: true,
                      borderWidth: 1,
                      lineTension: 0,
                      pointRadius: 6,
                      pointBorderColor:'#7979d2', //purple
                      pointBackgroundColor:'#fff', //white
                      pointBorderWidth: 1.5,
                    }
                  ]
                },
                options: {
                    responsive: true,
                        legend: {
                          display: false,
                                },
                        scales: {
                            yAxes: [{
                              ticks: {
                                      beginAtZero: false,
                                      }
                                    }]
                                  }
                        }
              });
          mainTrafficHourly.style.display = 'none';
          mainTrafficDaily.style.display = 'block';
          mainTrafficWeekly.style.display = 'none';
          mainTrafficMonthly.style.display = 'none';
        }

         if( weekly == e.target) {
              //------Traffic Main Line Chart Weekly-----------//
              mainChartWeekly = new Chart(mainTrafficWeekly, {
                type: 'line',
                data: {
                  labels: rangeWeekly,
                  datasets: [
                    {
                      label: "",
                      data: siteWeekly,
                      borderColor: '#7979d2', //purple
                      backgroundColor: 'rgba(121, 121, 210, .2)', //light-purple
                      fill: true,
                      borderWidth: 1,
                      lineTension: 0,
                      pointRadius: 6,
                      pointBorderColor:'#7979d2', //purple
                      pointBackgroundColor:'#fff', //white
                      pointBorderWidth: 1.5,
                    }
                  ]
                },
                options: {
                    responsive: true,
                        legend: {
                            display: false,
                                },
                        scales: {
                            yAxes: [{
                              ticks: {
                                      beginAtZero: false,
                                      }
                                    }]
                                  }
                          }
              });
          mainTrafficHourly.style.display = 'none';
          mainTrafficDaily.style.display = 'none';
          mainTrafficWeekly.style.display = 'block';
          mainTrafficMonthly.style.display = 'none';
        }
        if ( monthly == e.target) {
              //------Traffic Main Line Chart Monthly-----------//
              mainChartMonthly = new Chart(mainTrafficMonthly, {
                type: 'line',
                data: {
                  labels: rangeMonthly,
                  datasets: [
                    {
                      label: "",
                      data: siteMonthly,
                      borderColor: '#7979d2', //purple
                      backgroundColor: 'rgba(121, 121, 210, .2)', //light-purple
                      fill: true,
                      borderWidth: 1,
                      lineTension: 0,
                      pointRadius: 6,
                      pointBorderColor:'#7979d2', //purple
                      pointBackgroundColor:'#fff', //white
                      pointBorderWidth: 1.5,
                    }
                  ]
                },
                options: {
                    responsive: true,
                        legend: {
                            display: false,
                              },
                        scales: {
                            yAxes: [{
                              ticks: {
                                      beginAtZero: false,
                                      }
                                    }]
                                  }
                          }
              });
          mainTrafficHourly.style.display = 'none';
          mainTrafficDaily.style.display = 'none';
          mainTrafficWeekly.style.display = 'none';
          mainTrafficMonthly.style.display = 'block';
        }
    });

};


//-------Message Sent Notification-----//
messageWidget.addEventListener('click', function(e){
  //Variables
  sendButton =  document.getElementsByClassName('send')[0];
  user = document.getElementsByTagName('input')[1];
  userMessage =  document.getElementsByTagName('textarea')[0];
  confirmation = document.getElementsByClassName('confirmation')[0];


  if (sendButton == e.target){
        if (user.value == "" || userMessage.value == "") {
          if (user.value == "") {
              user.style.border = "2px solid red";
           }
          if (userMessage.value == "") {
              userMessage.style.border = "2px solid red";
           }
        }
        else {
              confirmation.style.display = 'flex';
              user.placeholder = 'Search for Users';
              userMessage.placeholder = 'Message Users';
              user.value = '';
              userMessage.value = '';
            }
    }

  if ( user == e.target || userMessage == e.target){
             e.target.style.border = "#808080"; /*gray*/;
   }

  if (confirmation == e.target) {
            confirmation.style.display = 'none';
   }
});


//------Toggle Button On/Off-----------//

emailInput.addEventListener('click', function(){
  //Variables
  let emailCheck = onEmail.style.display = 'inline-block';
   localStorage = window.localStorage;

  if (offEmail.style.display =='inline-block') {
      emailToggle.style.backgroundColor = '#7979d2'; //purple
      onEmail.style.display = 'inline-block';
      offEmail.style.display = 'none';
      localStorage.setItem('email', emailCheck);
   }

   else {
    emailToggle.style.backgroundColor = '#a6a6a6'; //grey
    offEmail.style.display = 'inline-block';
    onEmail.style.display = 'none';
    localStorage.removeItem('email', emailCheck);
  }
});


profileInput.addEventListener('click', function(){
   //Variables
   let profileCheck = onProfile.style.display = 'inline-block';
   localStorage = window.localStorage;

  if (offProfile.style.display =='inline-block') {
      profileToggle.style.backgroundColor = '#7979d2'; //purple
      onProfile.style.display = 'inline-block';
      offProfile.style.display = 'none';
      localStorage.setItem('profile', profileCheck);
  }
  else {
    profileToggle.style.backgroundColor = '#a6a6a6'; //grey
    offProfile.style.display = 'inline-block';
    onProfile.style.display = 'none';
    localStorage.removeItem('profile', profileCheck);
  }

});


// // //--------Store Setting Preferences---//
settingsWidget.addEventListener('click', function(e){
  //Variables
  localStorage = window.localStorage;
  saveButton = document.getElementsByClassName('save')[0];
  cancelButton = document.getElementsByClassName('cancel')[0];

  timeZone = document.getElementsByTagName('select')[0];

  if (cancelButton == e.target) {
      localStorage.clear();

      profileToggle.style.backgroundColor = '#a6a6a6'; //grey
      offProfile.style.display = 'inline-block';
      onProfile.style.display = 'none';

      emailToggle.style.backgroundColor = '#a6a6a6'; //grey
      offEmail.style.display = 'inline-block';
      onEmail.style.display = 'none';

      timeZone.selectedIndex = 0;
  }

  if (saveButton == e.target) {
      localStorage.setItem('time', timeZone.selectedIndex);
    }

});

//----Call Local Storage on load----//
window.addEventListener('load', function(){

  if (localStorage.getItem('email') == 'inline-block') {
    emailToggle.style.backgroundColor = '#7979d2'; //purple
    onEmail.style.display = 'inline-block';
    offEmail.style.display = 'none';
  }

  if (localStorage.getItem('profile') == 'inline-block') {
    profileToggle.style.backgroundColor = '#7979d2'; //purple
    onProfile.style.display = 'inline-block';
    offProfile.style.display = 'none';
  }

   timeZone.selectedIndex = localStorage.getItem('time');
});


// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.




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


//------New Employee Date--------//
let todayDate = document.getElementsByClassName('date');

console.log(todayDate);

for (let i = 0; i < todayDate.length; i++) {
    let today = new Date();

    todayDate[i].innerHTML =  (today.getMonth()+1) + "/" + today.getDate() + "/" + today.getFullYear();
}



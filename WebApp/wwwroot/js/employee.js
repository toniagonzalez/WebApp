// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

//-------Variables----------//
const message = $('.message');

//-------Search Variables----------//
const searchBar = $('input')[0];
let entry;
let cardText;
let cardHide;
let cardShow;
let cardArray;
let eachCard;

//-------Lightbox Variables----------//
const overlayScreen = $('.selected');
const cardExpand = $('.cardExpand');
const directory = $('#directory');
const ul = $('ul.grid');
const lightbox = $('#lightbox');
const arrowBack = $('p.arrowBack')[0];
const arrowForward = $('p.arrowForward')[0];
const arrows = $('.arrows')[0];
const counter = $('.counter');
let profileCards;
let profileExpand;
let employeeProfile;
let cardExpandText;
let currentIndex;
let str;
let birthdayString;
let employees;
let closeButton;
let card;

//----Hides No Results Found Message-----//
message.hide();


//----Hides Lightbox until selected-----//
cardExpand.css('visibility', 'hidden');
overlayScreen.css('visibility', 'hidden');



//----Fetch API-----//
fetch('https://randomuser.me/api/?results=12&nat=US&inc=name,location,email,picture,dob,phone&exc=login,timezone,gender,registered,dob.age<20,id,cell,info&noinfo')
  .then(response => response.json())
  .then(data => {
    generateCards(data);
    expandText(data);
  })



//----------Fetch Helper Functions-----------//

//----Function to Generate Employee Cards-----//
function generateCards(data) {
    employees = data.results;

    profileCards = employees.map(employee => {
       employeeProfile = '';
       employeeProfile += '<li class="employeeCard">';
       employeeProfile += `<a href="#${employee.name.last}">`;
       employeeProfile += '<div class="card">';
       employeeProfile += `<img src=${employee.picture.large} class="cardPhoto" alt="Employee Photo" title="${employee.name.first} ${employee.name.last}">`;
       employeeProfile += '<div class="cardText">';
       employeeProfile +=  `<p class="employee">${employee.name.first} ${employee.name.last}</p>`;
       employeeProfile += `<p class="email">${employee.email}</p>`;
       employeeProfile += `<p class="city">${employee.location.city}</p>`;
       employeeProfile += '</div>';
       employeeProfile += '</div>';
       employeeProfile += '</a>';
       employeeProfile += '</li>';
       return employeeProfile;
    });

 profileCards.map(card =>  ul.append(card));
 //----Declaring Card Elements-----//
 card = $('.card');
 cardText = $('.cardText');
 profileCards = $('li.employeeCard');

}

//----Generate Lightbox Card Data-----//
function expandText(data) {
      employees = data.results;


      //----Function to Create Text for Modal Card-----//
      cardExpandText = employees.map(employee => {

          //----Variables-----//
          str = `${employee.dob.date}`;
          let state = `${employee.location.state}`;
          let i = 0;

          //----Convert DOB from UTC to Local Time-----//
        function birthday (employee) {
          const regex = /\d{4}\-\d{2}\-\d{2}/;
          str = `${employee.dob.date}`;
          birthdayString = regex.exec(str);
          let birthDate = birthdayString[0].split('-');
          let birthday = birthDate[1] + "/" + birthDate[2] + "/" + birthDate[0];
          return birthday;
        }

        //----Convert State Name to Abbreviation-----//
        function abbrState( input, to) {
        var states = [
            ['Alabama', 'AL'],
            ['Alaska', 'AK'],
            ['American Samoa', 'AS'],
            ['Arizona', 'AZ'],
            ['Arkansas', 'AR'],
            ['Armed Forces Americas', 'AA'],
            ['Armed Forces Europe', 'AE'],
            ['Armed Forces Pacific', 'AP'],
            ['California', 'CA'],
            ['Colorado', 'CO'],
            ['Connecticut', 'CT'],
            ['Delaware', 'DE'],
            ['District Of Columbia', 'DC'],
            ['Florida', 'FL'],
            ['Georgia', 'GA'],
            ['Guam', 'GU'],
            ['Hawaii', 'HI'],
            ['Idaho', 'ID'],
            ['Illinois', 'IL'],
            ['Indiana', 'IN'],
            ['Iowa', 'IA'],
            ['Kansas', 'KS'],
            ['Kentucky', 'KY'],
            ['Louisiana', 'LA'],
            ['Maine', 'ME'],
            ['Marshall Islands', 'MH'],
            ['Maryland', 'MD'],
            ['Massachusetts', 'MA'],
            ['Michigan', 'MI'],
            ['Minnesota', 'MN'],
            ['Mississippi', 'MS'],
            ['Missouri', 'MO'],
            ['Montana', 'MT'],
            ['Nebraska', 'NE'],
            ['Nevada', 'NV'],
            ['New Hampshire', 'NH'],
            ['New Jersey', 'NJ'],
            ['New Mexico', 'NM'],
            ['New York', 'NY'],
            ['North Carolina', 'NC'],
            ['North Dakota', 'ND'],
            ['Northern Mariana Islands', 'NP'],
            ['Ohio', 'OH'],
            ['Oklahoma', 'OK'],
            ['Oregon', 'OR'],
            ['Pennsylvania', 'PA'],
            ['Puerto Rico', 'PR'],
            ['Rhode Island', 'RI'],
            ['South Carolina', 'SC'],
            ['South Dakota', 'SD'],
            ['Tennessee', 'TN'],
            ['Texas', 'TX'],
            ['US Virgin Islands', 'VI'],
            ['Utah', 'UT'],
            ['Vermont', 'VT'],
            ['Virginia', 'VA'],
            ['Washington', 'WA'],
            ['West Virginia', 'WV'],
            ['Wisconsin', 'WI'],
            ['Wyoming', 'WY'],
          ];

          if ( to == 'abbr') {
         input = input.replace(/\w\S*/g, function (txt) { return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase(); });
         for (i = 0; i < states.length; i++) {
             if (states[i][0] == input) {
                 return (states[i][1]);
             }
         }
      }
    };

          //---Generate Text for Modal Card-----//
         profileExpand = '';
         profileExpand = `<div id="${employee.name.last}">`;
         profileExpand += '<p class="close">&#215;</p>';
         profileExpand += `<img src=${employee.picture.large} class="cardPhoto" alt="Employee Photo" title="${employee.name.first} ${employee.name.last}">`;
         profileExpand += '<div class="cardTextExpand">';
         profileExpand +=  `<p class="employee">${employee.name.first} ${employee.name.last}</p>`;
         profileExpand += `<p class="email">${employee.email}</p>`;
         profileExpand += `<p class="city">${employee.location.city}</p>`;
         profileExpand += `<p class="phone">${employee.phone}</p>`;
         profileExpand += `<p class="address">${employee.location.street}, ${abbrState(state, 'abbr')}  ${employee.location.postcode} </p>`;
         profileExpand += `<p class="birthday">Birthday: ${birthday(employee)}</p>`;
         profileExpand += '</div>';
         return profileExpand;
    });


};



//-------Open Lightbox on click of profile card------//

ul.on('click', 'li', function (e) {
  
        currentIndex = $(this).index();
        cardExpand.html(cardExpandText[currentIndex]);
        counter.html(currentIndex + 1);
        closeButton = $('.close')[0];
        cardExpand.css('visibility', 'visible');
        overlayScreen.css('visibility', 'visible');
        console.log(currentIndex);
});


//-------Navigate Forward & Back over Modals with Arrows------//
lightbox.click(function(e) {
        currentIndex >= 0 && currentIndex <= 11;

        //---Allow loop through content---//
        if (currentIndex === 0){
          if (arrowBack === e.target){
            currentIndex = 12;
            counter.html(12);
          }

        }

        if (currentIndex === 11){
          if (arrowForward === e.target){
            currentIndex = -1;
            counter.html(1);
          }
        }

        //---Forward Arrow Functionality---//
        if (e.target === arrowForward) {
            let forward = currentIndex +=1;
            cardExpand.html(cardExpandText[forward]);
            counter.html(currentIndex + 1);
        }
        //---Back Arrow Functionality---//
        if (e.target === arrowBack) {
            let back = currentIndex -=1;
            cardExpand.html(cardExpandText[back]);
            counter.html(currentIndex + 1);
        }

})


//-------Close Lightbox------//
cardExpand.on('click', function(e) {
       cardExpand.css('visibility', 'hidden');
       overlayScreen.css('visibility', 'hidden');
});

//-------Hide Overlay & Modal------//
cardExpand.css('visibility', 'hidden');
overlayScreen.css('visibility', 'hidden');


//-------Search Bar------//
$(searchBar).keyup(function(){
        entry = searchBar.value.toLocaleLowerCase('en-US');
        let results = 0;
        message.hide();
        for(let i = 0; i < profileCards.length; i++){
            let text = cardText[i].innerText.toLocaleLowerCase('en-US');
            let eachCard = profileCards[i];
          if (text.includes(entry)) {
             $(eachCard).css('display', 'grid');
          } else {
             $(eachCard).css('display', 'none');
             results += 1;
          }
        }
        if (results > 11){
          message.show();
        }
});



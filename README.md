# WebApp
This ASP.NET MVC Web Application is a work in progress, it currently includes an employee directory and a dashboard. 

- The directory is built using a JSON object requested from the Random User Generator API using fetch. I parsed the data so that 12 employees are listed in a grid with their thumbnail image, full name, email, and location. Clicking the employee’s image or name will open a modal window with more detailed information, such as the employee’s birthday and address.

- The dashboard allows users to see new employees, recent Activity, and view charts  via Chart.js.


### To view this project in Visual Studio/Visual Studio Community:
 * Clone or download the repository and open the solution in Visual Studio/Visual Studio Community. 
 * Choose Build Solution and the project will open in a new browser window


### Project To Do List
- [X] Add Chart.js CDN
- [-] Cross-Browser Compatibility 
- [-] Alert Notification Widget
- [-] Settings Widget
- [-] Email Widget
- [-] Modal Window Styling
- [-] Fix Modal Window Index issue
- [-] Local Storage for Preferences
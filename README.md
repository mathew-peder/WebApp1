# WebApp1
RESTful WebApp Dev project for a workout scheduling and progress tracking app

Mathew Peder - 20073231

This app keeps track of workout schedules on a day-by-day basis as well as keeping track of your progress (weight, age, height, etc.)

Adding progress updates the entire progress and lets you add a date to each one whenever you wish. However, you cannot update only one item in progress and must complete the entire progress form.

Adding a workout is much more in-depth, where each day is an array of workouts what correspond with each other using id tags. Adding a workout consists of the day, description of the workout, and number of reps/sets you wish to perform or have already performed. This also means that you can delete, add or update more specific entries in the collection by specifying the day and the ID.

Issues/WIP:
- There is no sign in or users feature yet.
- GET, POST, and DELETE work for progress, however, PUT throws an error stating "age" is an array but is written as an int.
- Cannot add/update the progress individual data (i.e. Only update age, date, etc.) and must add the entire progress structure.

The app keeps track of all data within the database and adds it to the database in mlab as well as updating the heroku page. 

Github link: https://github.com/mathew-peder/WebApp1

Heroku Link: https://mpeder-webapp1.herokuapp.com/

Youtube Testing Link: https://youtu.be/NKAN7dFe1d8

References:

- Lab work from David Drohan 

- https://www.w3schools.com/js/

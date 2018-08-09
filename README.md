## WDI 34 Project 2 - Plant Tracker
### Express Full Stack App
##### by Richard Tzanov
---

<p align="left"><img src="https://i.imgur.com/FfdwMfP.png" width="1000"></p>

#### Overview
With Plant Tracker, users can add their plants to a database along with details such as conditions they need to be kept in, the date they were planted and how often the plants need to be watered. Its main feature is a function that tells the user when the plant needs to be watered, which is reset when the user clicks the `Watered` button.   

The app is deployed on [Heroku ](http://house-plant-tracker.herokuapp.com/)

#### Technologies used

||||
|--- |--- |--- |
|EJS|JavaScript(ECMAScript6)|SCSS|
|GitHub|Bulma|MongoDB|
|Node.js|Express.js||
|Multer|Yarn|AWS|
|method-override|express-session|
|body-parser|express-flash|bcrypt|

#### Build process

This project was my first full-stack app. As a result, there was a lot to familiarise myself with in terms of how the back-end functions with the likes of mongoose, mongoDB, Node.js and MVC design. It was also my first time working with EJS Layouts and rendering data on the front-end.

The planning stage consisted of making notes on the user experience and what kind of functionality I would be able to achieve in a week while learning all these new systems and making them function properly. At the heart of the app is the `Watered` function, and it was my intention from the start to include this.

Once I had a clear idea of what the project would entail, I began coding the back end using express. The two models are for the user and the plant. The user model is relatively simple and is simply for users to register and login. This was also my first time using authentication on a website, which was achieved with bcrypt.

The plant model was slightly more complicated as there were more things to incorporate, such as user comments as embedded schemas, formatted dates for when the plant was first planted, and the `daysUntilWatering` function. The `daysUntilWatering` function is the part of the app I'm most proud of, as it allowed me to use the JS skills I'd learnt up until this point in a real-world application. Working with models, schemas, controllers and routes taught me a lot about how the back-end functions that I am keen to take on into future projects.

<p align="left"><img src="https://i.imgur.com/5t4e7fV.png" width="1000"></p>

Building the front end was more of a challenge as I found working with EJS to be more difficult than I'd hoped. While I enjoyed the way it allowed me to use data to render multiple versions of the same page, I found the syntax tricky and some of the functionality limited. While I'd be interested in learning more about what is possible with this framework, I'm also keen to use AngularJS, React and Vue.js to see what they offer as an alternative. Sometimes the front-end views got quite hectic and keeping track of everything was a challenge.

Aspects that I thought would be relatively simple, such as creating a gallery for a plant that a user could upload photos into in order to track the growth of their plant, proved surprisingly difficult, although I'm pleased that I managed to get there in the end. There were lots of extra things to consider that I hadn't realised during the planning stage, such as preventing users from editing plants that aren't their own, and making sure only registered and logged in users are able to view certain pages or add plants.

One of my favourite things about the build was learning about RESTful routes and how databases are constructed.

My intent with the design was to be as clean as possible with the colour scheme and typography, in order to create something that was intuitive, useable and thematically consistent.

#### The user experience

Once a user is registered they can add their own plants to their profile, edit and delete those plants, view other users' plants, comment on their own plants and other users' plants, delete comments that they have written or are on their own plants, and keep track of when their plants need to be watered. Users can only edit and delete plants that they themselves have added to the site.

<p align="left"><img src="https://i.imgur.com/Et6JB5B.png" width="1000"></p>
<p align="left"><img src="https://i.imgur.com/Nevpeoj.gif" width="1000"></p>

The `daysUntilWatering` function works according to how often the users says the plant needs to be watered. On the plant card it says when the plant needs to be watered. Once the user clicks the `Watered` button, the timer resets.

<p align="left"><img src="https://i.imgur.com/9Dudc6W.gif" width="1000"></p>

#### What's next
I'm quite pleased with how this project worked out in terms of achieving what I'd aimed for in a week, the core functionality of the app and the design. However, there are things I'd like to add, such as a forum where users could share tips and advice for taking care of plants. Users here would be able to submit questions and vote on the answers. Users with a sufficient number of upvotes would then get certain perks and rewards for their expertise and time dedicated to answering other people's questions. 

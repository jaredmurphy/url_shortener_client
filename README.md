# URL Shortener 

##### About this README
This markdown file contains information about the Ember client app specifically - such as setup and install. Information for the Rails API can be found - [here](https://raw.githubusercontent.com/jaredmurphy/url_shortener) as well as information about the project as a whole, including wins, challenges, and an explanation of the shortening algorithm.

##### Deployment 
You can find the deployed Rails API deployed on Heroku [here](https://url-shortenerapi.herokuapp.com/api/v1/tops)

The deployed Ember app is also on Heroku [here](https://protected-reaches-70331.herokuapp.com/)

##### Setup and Install
To set up the Ember client app:
* Get the Ember cli tools if you dont have them - `npm install -g ember-cli`
* Clone this repo 
* run `npm install`

To start the server
* run `ember server`

Go to localhost:4200 

##### Talking to Rails Api
The client side app will look for a localhost:3000 when in development, so make sure you have the Rails server running when running locally. In production this app uses the production url of the Rails Api. 

##### Building With Ember 
For this app, I worked mostly just with controllers and templates. When the page loads, the controller sends a request to the Rails Api for the list of top 100 links and renders them below the input. When a user takes a link and submits it, another request goes out to generate the new url, which will include the shortened url. On submission, the list of top links will rerender so you might see changes if you click a short link before submitting the url. 






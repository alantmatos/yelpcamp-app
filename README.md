# YelpCamp
YelpCamp is a website where users can create and review campgrounds. In order to review or create a campground, you must have an account.

<div>
<img src="https://res.cloudinary.com/dlnhzrsfv/image/upload/v1674085205/yelpcamp-docs/Screenshot_2023-01-18_132757_zuqpnr.png" alt="Logo" width="1000" height="600">
</div>


<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project



YelpCamp is designed to help adventures campers to find stunning areas all over the world.

Here's why:
* If you have an awesome place for camping, you can quickly create an account, create a campground with description, price and photos.
* A user can review the campground base on his/her experience.
* When you see an awesome looking campground, please share  :smile:

Of course, no campring area would be complete without a map to help you quickly find out what direction to head up for, That's why Yelpcamp counts
with an awesome interacting map, pinned right on top of your next camping paradise. Geocoding is also put in place to make sure the user creating a campground
will also be able to display its location accurately. 





### Built With

Yelpcamp is powered by: 


* MongoDB
* JavaScript
* CSS
* HTML
* Bootstrap
* MapBox
* Cloudinary
* EJS


* Helment
* Passport
* Express Monho Sanitize
* Npm





<!-- GETTING STARTED -->
## Getting Started

Would you like to see it by yourself?

You can visit: https://long-pink-camel-cape.cyclic.app/

Or if you would to run it locally, here it goes:

### Prerequisites

First lets make sure you hae NPM installed.
* npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

Get it up and running with:

1. Clone the repo
   ```sh
   git clone https://github.com/alantmatos/YelpCamp-App
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Create a .env file in the root of the project you will need the following variables:

- DATABASEURL='<url>'
- API_KEY=''<key>
- API_SECRET='<secret>'




<!-- USAGE EXAMPLES -->
## Usage


<div>
<img src="https://res.cloudinary.com/dlnhzrsfv/image/upload/v1674085204/yelpcamp-docs/Screenshot_2023-01-18_133121_hlaqbe.png" alt="Logo" width="1000" height="600">
</div>
<div>
<img src="https://res.cloudinary.com/dlnhzrsfv/image/upload/v1674085204/yelpcamp-docs/Screenshot_2023-01-18_132901_fyfb7x.png" alt="Logo" width="1000" height="600">
</div>
<div>
<img src="https://res.cloudinary.com/dlnhzrsfv/image/upload/v1674085204/yelpcamp-docs/Screenshot_2023-01-18_133333_hfwq3n.png" alt="Logo" width="1000" height="600">
</div>
<div>
<img src="https://res.cloudinary.com/dlnhzrsfv/image/upload/v1674085204/yelpcamp-docs/Screenshot_2023-01-18_133247_rxar9z.png" alt="Logo" width="1000" height="600">
</div>





<!-- CONTACT -->
## Contact

Alan 
* https://courageous-alpaca-aca2e9.netlify.app/ - Portfolio
* https://www.linkedin.com/in/alantmatos/ -  Linkedin
* https://github.com/alantmatos - GitHub

Project Link: https://github.com/alantmatos/YelpCamp-App




<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

Bugs and fixes 

{
519 - returnTo - Use Case: User who is not logged in tries to access a route that requires user to be logged in; The app will save the route the user is tring to access, redirect the user to login page, upon successful login the app will redirect the user to the desired url.
}

{
Detected bug - Middleware saves the desired url, app.middleware has access to it but the route for postlogin doesnt, so it stays undefined.
}

{
handle index page when there is image has not been loaded
}

{
572 - helmet. helmet was temporarily removed due to error with contentSecurityPolicy:, to be restored later.
}





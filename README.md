Hello.

This is a YelpCamp all, created using Express, MongoDB, and other technologies I have been experimenting with.





Bugs and fixes 

{
519 - returnTo - Use Case: User who is not logged in tries to access a route that requires user to be logged in; The app will save the route the user is tring to access, redirect the user to login page, upon successful login the app will redirect the user to the desired url.

Detected bug - Middleware saves the desired url, app.middleware has access to it but the route for postlogin doesnt, so it stays undefined.
}

{
handle index page when there is image has not been loaded
}

{
572 - helmet. helmet was temporarily removed due to error with contentSecurityPolicy:, to be restored later.
}







https://www.npmjs.com/package/sanitize-html
https://www.npmjs.com/package/express-mongo-sanitize
https://helmetjs.github.io/
https://docs.mapbox.com/mapbox-gl-js/guides/
https://cloudinary.com/documentation/how_to_integrate_cloudinary
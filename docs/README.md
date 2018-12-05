# MakersB&B

We would like a web application that allows users to list spaces they have available, and to hire spaces for the night.

### Class Diagram
![Screenshot](mbb_diagram.png)


### For testing:

On app.js, comment out:
  app.listen(3000, function() {
 	 console.log('Server started on port 3000');
  })

Since we’re using port 3000 for both running and testing, which requires running, we get a port 3000 in use error if this isn’t commented out.


Then run:
	 npm run test:cypress:dev

This command does two things:
 	1. Starts the development server on localhost: 3000 by using npm start
	2. Starts Cypress and runs local tests

Will fix this in future revisions.

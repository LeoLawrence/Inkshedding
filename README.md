

# Inkshedding

A full-stack web application using the Express.js, React.js, Node.js, and SQLite3. Allows students to answer a prompt with as many words as they want. Student responses are **anonymous,** allowing for confidential discussions on potentially sensitive topics.

## Authors

- [@LeoLawrence](https://www.github.com/leolawrence)

## FAQ

#### Why did you make this project?

I have been teaching for over 5 years and I noticed that for some classes (particularly discussion-based classes), some students have a harder time sharing their personal stories. It is important that each student has a voice within the classroom, so I needed to find some way to help students speak up. Since a lot of students did not want to speak in class, I decided that finding a virtual method would be best. I also find that writing out my thoughts improves general understanding, so having my students write out their thoughts on a screen would help them as well.

#### As a teacher, how do I use this project?

Once the project is hosted, project the main screen on the projector (this is a single-page application). Give your students a prompt and have them type their answers into the text box. Have them press the blue "POST" button once they are done answering. Observe student responses and read a few as needed. Ask follow up or discussion questions. This works very similar to traditional inkshedding, which is the primary metholodogy of this project!

#### Is this project deployed?

I temporarily hosted the project to use for both of my classes. However, the current iteration of the project cannot be hosted due to the implementation and a few bugs. It will be hosted upon completion with improved security and login functionality.

#### When will this project be complete?

There is not ETA on when this project will be complete. The project worked great as a temporary tool for myself to use for teaching, but I am currently taking a break from being an instructor to focus on development work. This project will be resumed if needed. At the time of writing and editing this README, this project, for all intents and purposes, is abandoned because I am taking an indefinitely break from teaching discussion-based courses (and potentially teaching in general?).


## Features

- User authentication with bcrypt and JWT
- Hashed and salted passwords
- Local storage with cookies
- Mobile and desktop-friendly
- High scalability


## Roadmap

- Rearchitecture with MVC
- Secure API routes and application
- Write API documentation
- Integrate login functionality with JWT authentication
- Re-host the website (no longer hosted due to security risks and no authentication)
- Pitch application to other teachers

## Tech Stack

**Client:** React
**Server:** Node, Express
**Database:** SQLite3

## Dependencies:
**Client:**
"@testing-library/jest-dom": "^5.17.0",
"@testing-library/react": "^13.4.0",
"@testing-library/user-event": "^13.5.0",
"axios": "^1.5.1",
"react": "^18.2.0",
"react-dom": "^18.2.0",
"react-router-dom": "^6.16.0",
"react-scripts": "5.0.1",
"web-vitals": "^2.1.4"

**Server:**
"body-parser": "^1.20.2",
"cors": "^2.8.5",
"express": "^4.18.2",
"sqlite3": "^5.1.6"
"nodemon": "^3.0.1"  (for development)

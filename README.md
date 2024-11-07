Portfolio Website Developed Using React + Vite and Third-party API to receive an email notification when the views send the message to our Gmail
This Application consists of the following modules
1. Navigation Bar
2. Hero Section
3. Skills
4. Education
5. Experience
6. Business Model
7. Projects
8. Contact Form
9. Footer

The Images and Resume.pdf was present in the src/assets folder

To Deploy this I used GIT bash my local before deploying I modified Package.json and vite.config.js
I Updated the following lines in the Package.json 
"homepage": "https://bharat-0099.github.io/website", In Scripts Object "predeploy": "npm run build",
   "deploy": "gh-pages -d dist"

   I Updated the following lines in the vite.config.js
   plugins: [react()],base: "/website/"

GitHub Commands to deploy
1. git init -> to initialize the empty repo
2. git add . -> to our files to the repo
3. git commit -m "Message" -> to add a message that describes what changes were made
4. git remote add origin  -> to link local repo to remote repo
5. git push --set-upstream origin master repo name -> to save the files to the GitHub
6. npm install gh-pages --save-dev -> to deploy the application in GitHub
7. npm run build ->  to optimize your project for deployment like converting React, JSX files will be converted into standard JavaScript files
8. npm run deploy -> used to deploy your project to a hosting platform




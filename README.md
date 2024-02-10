Visit this link - [NetFlixGPT](https://netflix-gpt-by-tushar.netlify.app/)

# NetFlixGPT

    - Create Vite@latest
    - Configured Tailwind CSS
    - React-Router-Dom
    - Header
    - Login Form
        - SignUp Form
        - Form Validation
    - Firebase Setup
    - Deploying our app onto production
    - Create SignUp User Account
    - Implemented Sign In User API
    - Created Redux Store with userSlice
    - Implemented Sign Out
    - Update Profile
    - BugFix: Sign up user displayName and profile picture update
    - BugFix: if the user is not logged in Redirect/browse to login page and vice versa
    - Unsubscribed onAuthStateChanged after the header component unmounts
    - Registered TMDB API & create an app $ get access token
    - Get Data from TMDB top rated movies list API
    - Create movieSlice
    - Update Store with movies list
    - Planning for Hero Section and Secondary Container
    - Fetch Data for Trailer Videos
    - Update Store with Trailer Video Data
    - Embedded the Youtube video with the key value from the trailer data
    - Added MovieMatch AI Feature Button Powered by OpenAi API
    - Created a GptSlice in the Redux Store to store all the ai feature related information
    - Cofigured the Button Toggle to Redux Store
    - Developed and Styled the MovieMatch AI Search Page
    - Imported OpenAI API Key to the Project
    - Installed and Configured openAi package in the project
    - Prepared a query to send request to OpenAi
    - Stored the results and Sent it to the tmdb API to fetch the movies details
    - Stored the moviesResults in the Redux Store
    - Subscribed to the store to get movieResults in the suggestion list component
    - Developed and styled the suggestion list component.
    - Made the website Responsive

# Features

- Sign-In/Sign-Up Form
  - redirect to browse page

- Browse (After Authentication)
  - Header
    - MovieMatch AI
      - Search Bar
      - Movie Suggestion List
    - Movies
      - Hero Section
        - Trailer in Background
        - Title in Description
        - Buttons
      - Secondary Container
        - Movies/TV Shows List
          - 20 Cards
    - TV Shows
        - Hero Section
          - Trailer in Background
          - Title in Description
          - Buttons
        - Secondary Container
          - Movies/TV Shows List
          - 20 Cards
    - Language
    - Sign Out


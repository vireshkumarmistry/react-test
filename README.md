# React Test Project  

## Overview  
This project is a simple React application that fetches and displays posts from an API. It includes pagination, dynamic routing, and state management to enhance the user experience.  

## Features  

### 1. Routing  
- `/` (Home Page): Home page have navigation to the /posts page.
- `/posts` (Home Page): Fetch and display all posts in a paginated format.  
- `/post/:id` (Post Detail Page): Fetch and display a single post based on the post ID.  

### 2. Fetching and Displaying Posts  
- Retrieve all posts from an API and store them in the component's state.  
- Display posts using a reusable **Card Component**.  
- Implement **pagination** to show **10 posts per page**.  
- Add **Next** and **Previous** buttons for navigation.  
- **Disable buttons** when reaching the first or last page.  

### 3. Fetching a Single Post  
- Retrieve a **single post** based on the dynamic post ID.  
- Display post details using the **Card Component**.  
- Show a **"Loading..."** text while fetching data.  


## Run Project
- yarn install
- yarn dev
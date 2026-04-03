# Reflection – Practical 1: TikTok Clone
## What I Built
I developed a web application that mimics TikTok’s interface, using Next.js for the framework and Tailwind CSS for styling. The app features a sidebar navigation panel, a main video feed, and functional login and registration forms.
## Key Concepts Applied
### 1. Next.js
This was my first experience with Next.js. I discovered its file-system-based routing: any folder created inside the app directory automatically becomes a route, eliminating the need for manual route configuration.
### 2. Components
I learned to divide the user interface into modular, reusable components. For instance, I built a VideoCard component that dynamically renders each video in the "For You" feed, promoting consistency and efficiency.
### 3. Tailwind CSS
Compared to traditional CSS, Tailwind felt more intuitive once I got used to it. Applying styles directly through utility classes took some getting used to, but over time it sped up the styling process significantly.
### 4. React Hook Form
I used this library to handle form validation in both the login and sign-up sections. It allowed me to enforce rules such as valid email formatting and minimum password length with minimal setup.
## Key Takeaways
- Setting up a Next.js project from the ground up
- Creating navigable pages using the file-based routing system
- Designing shared layouts that persist across multiple pages
- Integrating icons using the React Icons package
- Implementing form validation with React Hook Form
## Challenges Encountered
### Challenge 1: JSX Syntax Error
I included the phrase "Don't have an account?" directly in JSX, which caused a syntax error due to the unescaped apostrophe.
Solution:
I replaced the apostrophe with the HTML entity `'`, which resolved the parsing issue.
### Challenge 2: Non-functional Login Button
The login button didn’t trigger any navigation when clicked.
Solution:
I realized I hadn’t wrapped the button in Next.js’s `` component, which is necessary for client-side routing. After adding it, navigation worked as expected.
### Challenge 3: Navigating the Project Structure
Initially, I found it confusing to manage directories via the terminal and wasn’t sure where to place certain files.
Solution:
I paused to study the default folder structure and the purpose of each directory. Once I understood the logic, I restructured the project more clearly and moved forward with greater confidence.
## Final Thoughts
As everything was new, this exercise gave me a solid introduction to full-stack development concepts using React and Next.js. For the first time, I successfully built a multi-page application resembling TikTok, complete with navigation, layout, and interactive forms. I’m eager to expand on this foundation in upcoming projects.
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


- USER MANAGEMENT DASHBOARD
- A simple React application that allows users to be added, displayed in cards, and removed from the list. This project is a basic demonstration of React's state management, form handling, and component interaction.

Features
1. Add Users: Fill out the form with a user's name, email, and image URL to create a new user card.
2. Display Users: View added users in a responsive card layout, showing their name, email, and profile image.
3. Remove Users: Delete a user by clicking the "Remove It" button on their card.

-Installation
1. Clone the Repository:
   git clone https://github.com/your-username/user-cards-manager.git
   cd User-Mangement-Dashboard

2. Install Dependencies:
   npm i or npm install

3. Run the Application:
   rpm run dev or npm start

Usage
1. Adding Users:
  -> Enter the user's name, email, and image URL in the form fields.
  -> Click "Submit" to add the user. The user will appear in a new card below the form.

2. Removing Users:
  ->Click the "Remove It" button on a user's card to remove that user from the list.

Project Structure
App.js: Main component that manages the state and renders the Form and Cards components.
Form.js: Contains the form for adding new users.
Cards.js: Displays a list of user cards.
Card.js: Represents a single user card with name, email, and image, along with a remove button.

Technologies Used
1. React.js: A JavaScript library for building user interfaces.
2.Tailwind CSS: A utility-first CSS framework for styling the application.


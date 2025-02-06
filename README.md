
# Profile Card with Random User API

This project is a **React Vite** application that displays a user profile fetched from the [Random User API](https://randomuser.me/). The profile is showcased in a responsive card layout with hover effects, styled using **Tailwind CSS**.

---

## Features

- **Dynamic Data**: Fetches user data from the API.
- **Interactive UI**: Displays user information with hover effects.
- **Responsive Design**: Tailored for various screen sizes using Tailwind CSS.
- **Skeleton Loader**: Displays a loading animation while fetching data.
- **Modern Build System**: Built with Vite for fast development and optimized builds.

---

## Project Structure

```
.
├── public
├── src
│   ├── components
│   │   └── ProfileCard.jsx  // Main component for the profile card
│   ├── App.jsx              // Root component
│   ├── index.css            // Tailwind CSS configuration
│   └── main.jsx             // Entry point
├── package.json             // Project configuration and dependencies
├── vite.config.js           // Vite configuration
└── README.md                // Project documentation
```

---

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd <project-folder>
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up Tailwind CSS:
   If Tailwind CSS is not already configured, initialize it:
   ```bash
   npx tailwindcss init
   ```
   Then update your `tailwind.config.js` and CSS files as per the [Tailwind CSS installation guide](https://tailwindcss.com/docs/installation).

4. Start the development server:
   ```bash
   npm run dev
   ```

---

## How It Works

1. The app fetches data from the [Random User API](https://randomuser.me/api/?page=1&results=1&seed=abc) when the `ProfileCard` component mounts.
2. While fetching data, a skeleton loader provides visual feedback.
3. After fetching, user details such as name, email, phone, and location are displayed.
4. The card layout includes a hover effect to reveal additional information about the user.

---

## Commands

- Start the development server:
  ```bash
  npm run dev
  ```
- Build the project for production:
  ```bash
  npm run build
  ```
- Preview the production build:
  ```bash
  npm run preview
  ```

---

## Screenshots

### Default State:
![Default State](public/Screenshot%202025-02-06%20144118.png)

### Hover State:
![Hover State](public/Screenshot%202025-02-06%20144139.png)

---

## Built With

- **React**: A JavaScript library for building user interfaces.
- **Vite**: A fast build tool and development server for modern web projects.
- **Tailwind CSS**: A utility-first CSS framework for styling.
- **Random User API**: Provides free, randomly generated user data.

---

## Acknowledgments

- [Random User API](https://randomuser.me/) for providing test data.
- [Tailwind CSS](https://tailwindcss.com/) for simplifying the styling process.
- [Vite](https://vitejs.dev/) for the excellent development experience.

---

## License

This project is for educational purposes only and is not licensed for commercial use.

---

Enjoy coding with **React Vite**! 🚀
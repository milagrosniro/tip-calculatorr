# 💸 Restaurant Tip Calculator

A sleek, fast, and user-friendly **Restaurant Tip Calculator** built with **ReactJS**, **TypeScript**, and **Tailwind CSS** using **Vite** as the build tool. This application allows users to easily calculate tips and total costs for meals, providing a smooth and optimized experience thanks to performance enhancements like `useMemo` and custom hooks.

## ✨ Features

- **Dynamic Tip Calculation**: Enter the total bill, select the tip percentage, and see the total amount instantly.
- **Performance Optimization**: The app uses React’s `useMemo` to optimize component re-renders, ensuring a fast and responsive interface.
- **Custom Hooks**: Clean and reusable logic using custom hooks to handle calculations and state management efficiently.
- **Responsive Design**: Fully responsive, thanks to **Tailwind CSS**, for a great experience on any device.

## ⚙️ Evolution of the Project

Initially, the **Restaurant Tip Calculator** was developed using **custom hooks** to manage state and encapsulate the logic for handling tip calculations. This provided a modular and reusable codebase that allowed for simple management of the application’s core functionality.

However, as the project expanded and the state management became more complex, I opted to migrate the application to use the **`useReducer`** hook. This migration offered several key advantages:

- **Simplified State Management**: `useReducer` centralizes state logic, making it easier to manage and scale as new features are added.
- **Predictable State Transitions**: By using `reducers`, state changes follow clear and predictable patterns, reducing potential bugs and improving maintainability.
- **Extensibility**: The app became more flexible when handling new actions or more complex state updates, such as handling multiple user inputs or more advanced tip calculations.

This migration has led to a more robust and scalable solution, while still maintaining the core performance optimizations, such as the use of `useMemo` for expensive calculations.


## 🛠 Technologies Used

- **ReactJS**: Frontend library for building the user interface.
- **TypeScript**: Static typing for increased code quality and maintainability.
- **Vite**: Next-generation build tool for fast development.
- **Tailwind CSS**: Utility-first CSS framework for building responsive and customizable interfaces.
- **useMemo**: Performance optimization by memoizing heavy calculations and preventing unnecessary re-renders.
- **Custom Hooks**: Encapsulation of logic to keep the components clean and reusable.

## 🚀 Live Demo

Check out the live version [here](https://66e01991f1c74e52793160ea--admirable-alpaca-6993b5.netlify.app/).

## 🧑‍💻 Installation & Setup

**Clone the repository:**

```bash
git clone https://github.com/milagrosniro/tip-calculatorr.git
cd tip-calculatorr

## 🧑‍💻 Installation & Setup

**Install Dependencies:**

```bash
npm install
```

**Start the Project:**

```bash
npm run dev

The project will be available at https://66e01991f1c74e52793160ea--admirable-alpaca-6993b5.netlify.app/
```

## 📋 Available Scripts
```bash
npm run dev: Starts the development server.
npm run build: Builds the project for production.
npm run lint: Runs ESLint to analyze the code.
npm run test: Runs unit tests (if any).
 ```

## 📝 License
This project is licensed under the MIT License.

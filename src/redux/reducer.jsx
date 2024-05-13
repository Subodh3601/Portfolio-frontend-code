import { createSlice } from "@reduxjs/toolkit";
import c1 from '../assets/frontend1-1.png';
import c2 from '../assets/backend-1.png';
import c3 from '../assets/react-1.png';
import c4 from "../assets/aptitude-1.png";
import c5 from '../assets/dbms1-1.png';



const initialState = {
  frontend: {
    HTML: [
      "Intro to HTML",
      "Basic HTML Tags",
      "Lists",
      "Forms",
      "Table",
      "semantic tags",
      "Input Fields",
      "Block vs Inline",
      "Favicon and Metadata",
    ],
    CSS: [
      "Intro to CSS",
      "Styling with CSS",
      "Adding CSS to HTML Typs ",
      "Selectors",
      "Units and Position properties",
      "Box-Model",
      "Flex",
      "Responsive-Design",
      "Media-Query",
    ],
    JavaScript: [
      "Into to JavaScript",
      "Fundamentals of JS",
      "Conditionals and Looping",
      "Array,Strings,Function,Objects",
      "Working of JS",
      "Functions in JS",
      "OOP in JS",
      "ES6",
      "DOM Manipulation",
      "Asynchronous JS",
      "Modules in js",
    ],
    React: [
      "Intro to React",
      "Learnig JSX",
      "Create-React-App",
      "React Components",
      "Styling in React",
      "Components LifeCycle Methods",
      "React Hooks",
      "Context API",
      "React Router",
    ],
    Redux: [
      "Intro to Redux",
      "Redux in React",
      "Redux Toolkit",
      "Advanced Redux",
    ],
  },
  backend: {
    Node: ["Intro to Node", "Modules in Node", "Advanced Modules"],
    Express: [
      "Intro to Express",
      "MVC Pattern",
      "File upload, session, cookies",
      "Middlewares",
    ],
    RestAPI: [
      "Ubderstanding API",
      "Understanding Rest",
      "Intro to Routes",
      "Different Requests",
    ],
    Securing_API: [
      "Basic Authentication",
      "Understanding JWT",
      "CORS Policy",
      "Handling Errors",
    ],
  },
  database: {
    MongoDB: [
      "Getting Started with Databases",
      "Using Hash Password",
      "Using .env file",
      "Mongo Operators",
    ],
    Mongoose: [
      "Understanding Mongoose",
      "Creating Schema",
      "Relationships",
      "MiddleWares",
      "",
    ],
    Sql: [],
  },
  certificates: [
    {
      filename: c1,
      desc: "frontend",
      link: "https://certificate.codingninjas.com/view/82c424a1b792c70c",
    },
    {
      filename: c2,
      desc: "backend",
      link: "https://certificate.codingninjas.com/view/8f46b8fd0873d8f9",
    },
    {
      filename: c3,
      desc: "react",
      link: "https://certificate.codingninjas.com/view/3468f1a60280c5af",
    },
    {
      filename: c4,
      desc: "aptitude",
      link: "https://certificate.codingninjas.com/view/e6953c4cc7bc23b7",
    },
    {
      filename: c5,
      desc: "dbms",
      link: "https://certificate.codingninjas.com/view/bd05f5f13451ebb1",
    },
  ],
};

const dataSlice = createSlice({
  name: "data",
  initialState: initialState,
  reducers: {},
});

export const dataReducer = dataSlice.reducer;
export const frontendSelector = (state) => state.dataReducer.frontend;
export const backendSelector = (state) => state.dataReducer.backend;
export const databaseSelector = (state) => state.dataReducer.database;
export const certificatesSelector = (state) => state.dataReducer.certificates;
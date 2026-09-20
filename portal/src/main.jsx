import React from 'react';import{createRoot}from'react-dom/client';import{BrowserRouter}from'react-router-dom';import'@fontsource-variable/manrope';import App from './portfolio/App';import './portfolio/styles/main.css';
createRoot(document.getElementById('root')).render(<React.StrictMode><BrowserRouter><App/></BrowserRouter></React.StrictMode>);

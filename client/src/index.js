import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './app/app';
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { NextUIProvider } from "@nextui-org/react";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <NextThemesProvider defaultTheme="system" attribute="class">
      <NextUIProvider className='csProvider'>
        <App />
      </NextUIProvider>
    </NextThemesProvider>
  </React.StrictMode>
);

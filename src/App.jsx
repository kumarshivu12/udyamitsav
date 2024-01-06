import React from "react";
import { RouterProvider } from "react-router-dom";
import routes from "./routes/routes";
import ThemeProvider from "./theme";
import "./App.css";

const App = () => {
  return (
    <ThemeProvider>
      <RouterProvider router={routes} />
    </ThemeProvider>
  );
};

export default App;

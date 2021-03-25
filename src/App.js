import React from "react";
import Booklist from "./components/Booklist";
import Navbar from "./components/Navbar";
import ThemeContextProvider from './contexts/Theme.context';
import ToggleTheme from "./components/ToggleTheme";
import AuthContextProvider from './contexts/Auth.context';
import BookContextProvider from "./contexts/Book.context";

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <AuthContextProvider>
          <Navbar />
            <BookContextProvider>
              <Booklist />
            </BookContextProvider>
          <ToggleTheme />
        </AuthContextProvider>
      </ThemeContextProvider>
    </div>
  );
}

export default App;

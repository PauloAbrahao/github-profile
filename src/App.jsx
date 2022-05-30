import React from "react";
import Footer from "./components/Footer";
import GithubRepos from "./components/GithubRepos";
import Profile from "./components/Profile";
import { FetchProvider } from "./hooks/Fetch";

function App() {
  return (
    <FetchProvider>
      <div className="App">
        <Profile />
        <GithubRepos />
        <Footer />
      </div>
    </FetchProvider>
  );
}

export default App;

import React from "react";
import GithubRepos from "./components/GithubRepos";
import Profile from "./components/Profile";
import { FetchProvider } from "./hooks/Fetch";

function App() {
  return (
    <FetchProvider>
      <div className="App">
        <Profile />
        <GithubRepos />
      </div>
    </FetchProvider>
  );
}

export default App;

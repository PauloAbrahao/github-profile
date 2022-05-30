import React from "react";
import Footer from "../components/Footer";
import GithubRepos from "../components/GithubRepos";
import Profile from "../components/Profile";

export const FetchContext = React.createContext({});

export const FetchProvider = (props) => {
  const [info, setInfo] = React.useState(null);

  React.useEffect(() => {
    fetch(`https://api.github.com/users/PauloAbrahao/repos`)
      .then((res) => res.json())
      .then((userReponse) => setInfo(userReponse));
  }, []);

  return (
    <FetchContext.Provider value={{ info }}>
      <Profile />
      <GithubRepos />
      <Footer />
    </FetchContext.Provider>
  );
};

export const useFetch = () => React.useContext(FetchContext);

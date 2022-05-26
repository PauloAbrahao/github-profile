import React from "react";
import { BiBookAlt } from "react-icons/bi";
import { AiOutlineLink } from "react-icons/ai";

const GithubRepos = () => {
  const [info, setInfo] = React.useState(null);

  React.useEffect(() => {
    fetch(`https://api.github.com/users/PauloAbrahao/repos`)
      .then((res) => res.json())
      .then((userReponse) => setInfo(userReponse));
  }, []);

  if (!info) return null;
  else
    return (
      <div className="container">
        {info.map((i) => {
          return (
            <ul className="list" key={i.id}>
              <li className="Github-list">
                <div className="name-icon">
                  <BiBookAlt />
                  <h3 className="name">{i.name}</h3>
                </div>
                <p className="description">{i.description}</p>

                <a className="link-icon">
                  <AiOutlineLink />
                  <a href={i.html_url} target="_blank" className="link">
                    Dê uma olhada
                  </a>
                </a>
                <small>{i.language}</small>
              </li>
            </ul>
          );
        })}
      </div>
    );
};

export default GithubRepos;

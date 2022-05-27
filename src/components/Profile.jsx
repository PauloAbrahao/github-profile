import React from "react";
import { useFetch } from "../hooks/Fetch";
import "./Profile.css";

const Profile = () => {
  const { info } = useFetch();

  if (!info) return null;

  return (
    <div>
      <div className="profile">
        <img
          className="profile-pic"
          src={info[0].owner.avatar_url}
          alt="imagem de perfil"
        />

        <a href={info[0].owner.html_url} id="nome" target="_blank">
          {info[0].owner.login}
        </a>
      </div>
    </div>
  );
};

export default Profile;

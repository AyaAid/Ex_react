import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../style/User.css"
import Navbar from "../components/Navbar";

interface User {
  id: string;
  firstName: string;
  lastName: string;
  job: string;
  biography: string;
  numPosts: number;
  numRelations: number;
}

function UserProfile() {
  const { userId } = useParams<{ userId: string }>();
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {

    fetch("/users.json")
      .then((response) => response.json())
      .then((data: User[]) => {
        const matchedUser = data.find((user) => user.id === userId);
        if (matchedUser) {
          setUser(matchedUser);
        }
      })
      .catch((error) => {
        console.error("Erreur lors du chargement des données : " + error);
      });
  }, [userId]);

  if (!user) {
    return <p className="not-found">Utilisateur introuvable</p>;
  }

  return (
    <div>
    <Navbar/>
    <div className="user-profile">
      <div className="user-profile-header">
        <div className="user-profile-photo">
        </div>
        <div>
          <h1 className="user-profile-name">
            {user.firstName} {user.lastName}
          </h1>
          <p className="user-profile-job">{user.job}</p>
        </div>
      </div>
      <p className="user-profile-bio">{user.biography}</p>
      <div className="user-profile-stats">
        <div className="user-profile-stat">
          <p className="user-profile-stat-label">Publications</p>
          <p className="user-profile-stat-value">{user.numPosts}</p>
        </div>
        <div className="user-profile-stat">
          <p className="user-profile-stat-label">Relations</p>
          <p className="user-profile-stat-value">{user.numRelations}</p>
        </div>
      </div>
    </div>
    </div>
  );
}

export default UserProfile;

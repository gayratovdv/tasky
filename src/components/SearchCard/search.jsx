import React, { useState, useEffect } from "react";
import "./search.css";
import Images from "../../utils/images";
import { useNavigate } from "react-router-dom";

const SearchCard = ({ onUserSelect, userId }) => {
  const [username, setUsername] = useState("");
  const [userData, setUserData] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    if (username === "") {
      setUserData([]);
      setError("");
      return;
    }

    const timer = setTimeout(async () => {
      try {
        const response = await fetch(
          `https://simpletask.uz/account/search?=username${username}`
        );
        if (!response.ok) {
          throw new Error("User not found");
        }
        const data = await response.json();
        const filteredUsers = data.filter((user) =>
          user.username.toLowerCase().includes(username.toLowerCase())
        );

        if (filteredUsers.length > 0) {
          setUserData(filteredUsers);
          setError("");
        } else {
          setError("User not found");
          setUserData([]);
        }
      } catch (error) {
        setError("User not found or an error occurred");
        setUserData([]);
      }
    }, 500);

    return () => clearTimeout(timer);
  }, [username]);

  const handleInputChange = (e) => {
    setUsername(e.target.value);
  };

  const addFriend = (friendId) => {
    console.log("friendId:", friendId);

    if (!friendId) {
      console.error("User ID is undefined!");
      return;
    }

    const data = {
      user: friendId,
      friend: friendId,
    };

    fetch(`https://simpletask.uz/account/friend_add/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (!response.ok) {
          return response.json().then((data) => {
            console.log("Error response from server:", data);
            throw new Error("Request failed");
          });
        }
        return response.json();
      })
      .then((data) => {
        console.log("Friend added successfully:", data);
      })
      .catch((error) => {
        console.error("Error adding friend:", error);
      });
  };

  return (
    <div className="search-card">
      <h2>Search friends</h2>
      <div className="search-input">
        <input
          value={username}
          onChange={handleInputChange}
          type="text"
          placeholder="Full name"
        />
      </div>
      <h2>Results</h2>
      {error && <p>{error}</p>}
      {userData.length > 0 ? (
        userData.map((user) => (
          <div key={user.id} className="search-rectangle">
            <div className="rectangle__content">
              <div className="rectangle__content--wrapper">
                <img src={user.image || Images.avatar} alt="avatar" />
                <p>{user.username}</p>
                {console.log(user.id)}
              </div>
              <span onClick={() => addFriend(user.id)}>
                <i className="fa-solid fa-circle-plus"></i>
              </span>
            </div>
          </div>
        ))
      ) : (
        <p>No results</p>
      )}
    </div>
  );
};

export default SearchCard;

import React, { useState, useEffect } from "react";
import "./search.css";
import { OrbitProgress } from "react-loading-indicators";

const SearchFriends = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [friends, setFriends] = useState([]);
  const [loading, setLoading] = useState(false);
  const [userId] = useState("YOUR_USER_ID"); // Replace with your actual user ID

  const fetchFriends = async (query) => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://simpletask.uz/account/search/?username=${query}`
      );
      const data = await response.json();
      setFriends(data);
    } catch (error) {
      console.error("Error fetching friends:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (searchQuery.length > 0) {
      fetchFriends(searchQuery);
    } else {
      setFriends([]);
    }
  }, [searchQuery]);

  const filteredFriends = friends.filter((friend) =>
    friend.username.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const addFriend = async (friendId) => {
    const requestBody = {
      userId: new Date().getDay(),
      friendId: friendId,
    };

    console.log("Sending request body:", requestBody);

    try {
      const response = await fetch(
        "https://simpletask.uz/account/friend_add/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(requestBody),
        }
      );

      if (!response.ok) {
        const errorData = await response.json(); // Capture the error response
        console.error("Error response:", errorData); // Log the error response
        throw new Error("Failed to add friend");
      }

      const data = await response.json();
      console.log("Friend added successfully:", data);
    } catch (error) {
      console.error("Error adding friend:", error);
    }
  };

  return (
    <div className="search__content--card">
      <h2>Search friends</h2>
      <input
        type="text"
        placeholder="Full name"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="search-input"
      />
      <h3>Results</h3>
      {loading ? (
        <OrbitProgress color="8ab9ff" size={50} width={5} />
      ) : (
        <>
          {filteredFriends.length === 0 && searchQuery.length > 0 && (
            <p>No results found.</p>
          )}
          <ul className="friends-list search-results">
            {filteredFriends.map((friend) => (
              <li key={friend.id} className="friend-item">
                <div className="friend-info">
                  <img src={friend.avatar} alt="Avatar" className="avatar" />
                  <span className="friend-name">{friend.username}</span>
                </div>
                <button
                  className="add-button"
                  onClick={() => addFriend(friend.id)} // Call addFriend with the friend's ID
                >
                  <span className="add-icon">
                    <i className="fa-solid fa-circle-plus"></i>
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default SearchFriends;

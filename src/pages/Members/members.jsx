import React from "react";
import Navbar from "../../components/Navbar/navbar";
import Sidebar from "../../components/Sidebar/sidebar";
import "./members.css";
import SearchFriends from "../../components/SearchFriend/search";

const MembersPage = () => {
  const friends = [
    { id: 1, name: "John Ekeler", tasks: 11, avatar: "path/to/avatar" },
    { id: 2, name: "John Ekeler", tasks: 11, avatar: "path/to/avatar" },
    { id: 3, name: "John Ekeler", tasks: 11, avatar: "path/to/avatar" },
    { id: 4, name: "John Ekeler", tasks: 11, avatar: "path/to/avatar" },
    { id: 5, name: "John Ekeler", tasks: 11, avatar: "path/to/avatar" },
    { id: 6, name: "John Ekeler", tasks: 11, avatar: "path/to/avatar" },
  ];

  return (
    <div className="main">
      <Sidebar />
      <div className="content">
        <Navbar />
        <div className="content-main">
          <div className="members__content">
            <div className="members__content--card">
              <div className="members__content--card-wrapper">
                <h2>All friends</h2>
                <p>Done tasks</p>
              </div>
              <ul className="friends-list">
                {friends.map((friend) => (
                  <li key={friend.id} className="friend-item">
                    <div className="friend-info">
                      <img
                        src={friend.avatar}
                        alt="Avatar"
                        className="avatar"
                      />
                      <span className="friend-name">{friend.name}</span>
                    </div>
                    <span className="task-count">{friend.tasks}</span>
                    <button className="remove-button">
                      <span className="remove-icon">
                      <i className="fa-solid fa-circle-minus"></i>
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <SearchFriends />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MembersPage;

import React from "react";
import { TfiMobile } from "react-icons/tfi";
import { MdOutlineEmail } from "react-icons/md";
import User from "../types/userType";

interface UserCardProps {
  user: User;
  onClick: () => void;
}

const UserCard: React.FC<UserCardProps> = ({ user, onClick }) => {
  return (
    <div className="userCard" onClick={onClick}>
      <h2 className="userName">{user.name}</h2>
      <div className="userInfoContainer">
        <div className="userInfoRow">
          <TfiMobile className="icon" />
          <p className="">{user.phone}</p>
        </div>
        <div className="userInfoRow">
          <MdOutlineEmail className="icon" />
          <p>{user.email}</p>
        </div>
      </div>
    </div>
  );
};

export default UserCard;

import React, { useState } from "react";
import useModal from "./hooks/useModal";
import User from "./types/userType";
import Modal from "./components/Modal";
import UserCard from "./components/UserCard";

const UserList: React.FC<{ users: User[] }> = ({ users }) => {
  const { showModal, setShowModal, modalRef } = useModal();
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  const handleUserClick = (user: User) => {
    setSelectedUser(user);
    setShowModal(true);
  };

  return (
    <div className="userList">
      {users.map((user: User) => (
        <UserCard
          key={user.phone}
          user={user}
          onClick={() => handleUserClick(user)}
        />
      ))}
      {showModal && selectedUser && (
        <Modal
          selectedUser={selectedUser}
          setShowModal={setShowModal}
          modalRef={modalRef}
        />
      )}
    </div>
  );
};

export default UserList;

import React from "react";
import User from "../types/userType";

const Modal: React.FC<{
  selectedUser: User | null;
  setShowModal: (value: boolean) => void;
  modalRef: React.RefObject<HTMLDivElement>;
}> = ({ selectedUser, setShowModal, modalRef }) => {
  return (
    <div className="modalOverlay visible">
      <div className="modal" ref={modalRef}>
        <div className="modalContent">
          <div className="modalTopRow">
            <h2 className="modalUserName">{selectedUser?.name}</h2>
            <span className="closeButton" onClick={() => setShowModal(false)}>
              ×
            </span>
          </div>
          <div className="modalMain bold">
            <p>Phone:</p>
            <span className="pale">{selectedUser?.phone}</span>
            <p>Email:</p>
            <span className="pale">{selectedUser?.email}</span>
            <p>Hire Date:</p>
            <span className="pale">{selectedUser?.hire_date}</span>
            <p>Position:</p>
            <span className="pale">{selectedUser?.position_name}</span>
            <p>Department:</p>
            <span className="pale">{selectedUser?.department}</span>
          </div>
          <div className="modalBottom">
            <p className="bold">Дополнительная информация:</p>
            <p className="pale">
              Разработчики используют текст в качестве заполнителя макета
              страницы. Разработчики используют текст в качестве заполнителя
              макета страницы.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;

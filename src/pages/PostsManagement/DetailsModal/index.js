import React from "react";
import Modal from "react-modal";

const DetailsModal = (props) => {
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      width: "800px",
      transform: "translate(-50%, -50%)",
    },
  };

  return (
    <Modal
      isOpen={props.isOpen}
      onRequestClose={props.onClose}
      ariaHideApp={false}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <div className="flex justify-end">
        <button onClick={props.onClose}>X</button>
      </div>
      <div className="flex">
        <div className="basis-1/12">
          <div>ID </div>
          <div>User ID </div>
          <div>Title </div>
          <div>Body </div>
        </div>
        <div className="basis-11/12">
          <div>{props.data?.id}</div>
          <div>{props.data?.userId}</div>
          <div>{props.data?.title}</div>
          <div>{props.data?.body}</div>
        </div>
      </div>
    </Modal>
  );
};

export default DetailsModal;

import React, { useState } from "react";

function Modal() {
  const [show, setShow] = useState(false);

  return (
    <div>
      <button className="addbtn" onClick={() => setShow(true)}>
        +
      </button>

      {show && (
        <div className="modal-bg">
          <div className="modal-content">
            <button onClick={() => setShow(false)}>x</button>
            <input type="text" placeholder="Title" />
            <input type="text" placeholder="Category" />
            <input type="text" placeholder="Description" />
            <input type="img" src="" alt="" />
          </div>
        </div>
      )}
    </div>
  );
}

export default Modal;

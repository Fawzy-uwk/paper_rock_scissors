function Modal({ setModal, modal }) {
  return (
    <div className="modal p-4 bg-white">
      <div className="head">
        <h2 className=" uppercase text-lg font-bold">rules</h2>
        <img
          src="./icon-close.svg"
          alt="X"
          onClick={()=>setModal(!modal)}
        />
      </div>
      <img src="./image-rules.svg" alt="rules" />
    </div>
  );
}

export default Modal;

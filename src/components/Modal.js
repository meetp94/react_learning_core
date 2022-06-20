const Modal=(props)=> {

    const cancelHandler=() =>{
        props.onCancel();
    }
    const confirmHandler=()=>{
        props.onConfirm();
    }



    return <div className="modal">

        <p>Are you sure?</p>
        <button className="btn btn--alt" onClick={cancelHandler}>Cancle</button>
        <button className="btn" onClick={confirmHandler}>Confirm</button>

    </div>
};
export default Modal;
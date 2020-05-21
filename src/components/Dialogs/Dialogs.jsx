import React from "react";
import s from './Dialogs.module.css';
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogsItem";


const Dialogs = (props) => {

    let dialogsElements = props.dialogsData.map(d => <DialogItem name={d.name} id={d.id}/>)
    let messagesElements = props.messagesData.map(m => <Message message={m.message} id={m.id} />)

    let newMessageElement = React.createRef();
    let addMessage = ()=> {
        let text = newMessageElement.current.value;
        alert(text)
    }


    return (
        <div>
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
            <textarea ref={newMessageElement} value="add post"/>
            <div></div>
            <button onClick={addMessage}>Add message</button>
        </div>
    )
}

export default Dialogs;
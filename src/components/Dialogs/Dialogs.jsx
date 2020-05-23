import React from "react";
import s from './Dialogs.module.css';
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogsItem";


const Dialogs = (props) => {

    let state = props.messagesPage

    let dialogsElements = state.dialogsData.map(d => <DialogItem name={d.name} id={d.id}/>)
    let messagesElements = state.messagesData.map(m => <Message message={m.message} id={m.id}/>)
    let newMessageBody = state.newMessageText;


    let onSendMessageClick = () => {
        props.sendMessage();
    }
    let onNewMessageChange = (e) => {
        let text = e.target.value;
        props.updateNewMessageBody(text)

    }


    return (
        <div>
            <div className={s.dialogs}>
                <div className={s.dialogsItems}>
                    {dialogsElements}
                </div>
                <div className={s.messages}>
                    <div>{messagesElements}</div>
                </div>
            </div>
            <textarea value={newMessageBody}
                      onChange={onNewMessageChange}
                      placeholder="Enter you message"

            />
            <div></div>
            <button onClick={onSendMessageClick}>Add message</button>
        </div>
    )
}

export default Dialogs;
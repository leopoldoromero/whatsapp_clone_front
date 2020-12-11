import React, {useState, useEffect} from 'react'
import {Avatar, IconButton} from "@material-ui/core";
import {AttachFile, MoreVert, SearchOutlined, } from "@material-ui/icons";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import MicIcon from '@material-ui/icons/Mic';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import "./Chat.css"

function Chat() {
    const [input, setInput] = useState("");
    const [seed, setSeed] = useState("");

    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000))
    }, [])

    const sendMessage = (e) => {
        e.preventDefault();
        console.log("its working" + input)
        setInput("");
    }

    return (
        <div className="chat">
            <div className="chat_header">
                <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`}/>
                <div className="chat_header_info">
                    <h3>UserName</h3>
                    <p>timeStamp</p>
                </div>
                <div className="chat_header_right">
                    <IconButton>
                        <SearchOutlined />
                    </IconButton>
                    <IconButton>
                        <AttachFile/>
                    </IconButton>
                    <IconButton>
                        <MoreVert/>
                    </IconButton>  
                </div>
            </div>
            <div className="chat_body">
                <p className={`chat_message ${false && "chat_reciever"}`}>
                    <span className="chat_room_name">
                        Leopoldo
                    </span>
                    Hey Guys
                    <span className="chat_timestamp">
                        3.55am
                    </span>
                </p>
                <p className="chat_message chat_reciever">
                    <span className="chat_room_name">
                        Leopoldo
                    </span>
                    Hey Guys
                    <span className="chat_timestamp">
                        3.55am
                    </span>
                </p>
            </div>
            <div className="chat_footer">
                <div className="chat_footer_left">
                    <InsertEmoticonIcon />
                    <AttachFileIcon/>
                </div>
            <form>
                <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="type a message here"
                type="text"
                />
                <button onClick={sendMessage}>Send a Message</button>
            </form>
            <MicIcon/>
            </div>
        </div>
    )
}

export default Chat

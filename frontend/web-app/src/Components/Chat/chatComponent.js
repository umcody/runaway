import React, { useEffect, useState } from "react";
import socketioclient from "socket.io-client";
import { Launcher } from 'react-chat-window';
import "./chat.css";

class ChatComponent extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
        this.state = {
            messages: [],
            socket: socketioclient("localhost:7000")
        }
        
        this._onMessageUpdate = this._onMessageUpdate.bind(this);
    }


    socket_joinRoom(room) {
        this.state.socket.emit("joinRoom", room);
        this.state.socket.emit("volunteerJoined", "dummy");
        console.log("volunteerJoined sent");
    }


    componentDidMount() {
        //socket = socketioclient("https://runaway-practicum.herokuapp.com/");
        console.log(this.props.props[0]);
        this.socket_joinRoom(parseInt(this.props.props[0],10))
        this.state.socket.on = this.state.socket.on.bind(this);
        this.state.socket.on("updateMessage", function (message) {
            console.log("message recieved");
            this._onMessageUpdate(message);
        })
    }// eslint-disable-line react-hooks/exhaustive-deps

    _onMessageUpdate(message){
        this.setState({messages:[...this.state.messages, {
            author: 'them',
            type: 'text',
            data: { message }
        }]}
        );
    }
    _onMessageWasSent(message) {
        this.setState({
            messages: [...this.state.messages, message]
        });
        console.log(this.state.messages);
        this.state.socket.emit("sendMessage", message.data.text);
    }


    render() {
        return (
            <div style={{ "z-index": this.props.props[1] }}>
                <Launcher
                    agentProfile={{
                        teamName: 'react-chat-window',
                        imageUrl: 'https://a.slack-edge.com/66f9/img/avatars-teams/ava_0001-34.png'
                    }}
                    onMessageWasSent={this._onMessageWasSent.bind(this)}
                    messageList={this.state.messages}
                    showEmoji
                />
            </div >
        )
    }
}

export default ChatComponent;

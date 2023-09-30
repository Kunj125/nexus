import React, { useContext } from "react"
import { SocketContext } from "../SocketContext"
import "../App.css";
export default function Notifications() {
    const { answerCall, call, callAccepted } = useContext(SocketContext);

    return (
        <>
            {call.isReceivingCall && !callAccepted && (
                <div style={{ display: 'flex', justifyContent: 'space-around' }} className="notification-container">
                    <h1>{call.name ? call.name : "Unknown user"} is calling:</h1>
                    <button onClick={answerCall}>
                        Answer
                    </button>
                </div>
            )}
        </>
    );
};

import { SocketContext } from "../SocketContext";
import '../App.css';
import { useContext } from "react";
export default function VideoPlayer() {
    const { name, callAccepted, myVideo, userVideo, stream, call, callEnded } = useContext(SocketContext);
    return (
        <div className="video-grid">
            {stream && (<div className="video-container">
                <h5>{name || 'You'}</h5>
                <video playsInline muted ref={myVideo} autoPlay className="video" />
            </div>
            )}
            {callAccepted && !callEnded && (<div className="video-container">
                <h5>{call.name || "Peer"}</h5>
                <video playsInline ref={userVideo} autoPlay className="video" />
            </div>
            )}
        </div>
    )
}
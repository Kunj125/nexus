import "../App.css";
import { CopyToClipboard } from "react-copy-to-clipboard"
import { SocketContext } from "../SocketContext"
import { useContext, useState } from "react"
export default function Lobby({ children }) {
    const { me, callAccepted, name, setName, callEnded, leaveCall, callUser } = useContext(SocketContext);
    const [idToCall, setIdToCall] = useState("");
    return <>
        <div className="options-container">
            <div className="options">
                <div className="form">
                    <div className="options-grid-container">
                        <div className="options-grid-padding">
                            <h6>Account Info</h6>
                            {console.log(me)}
                            <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
                            <CopyToClipboard text={me}>
                                <button>
                                    Copy your ID
                                </button>
                            </CopyToClipboard>
                        </div>
                        <div className="options-grid-padding">
                            <h6>Make a call</h6>
                            <input type="text" placeholder="ID to Call " value={idToCall} onChange={(e) => setIdToCall(e.target.value)} />
                            {callAccepted && !callEnded ? (
                                <button style={{ "background": "red" }} onClick={leaveCall}>
                                    Hang up
                                </button>
                            ) : (
                                <button style={{ "background": "green" }} onClick={() => callUser(idToCall)}> Video Call </button>
                            )}
                        </div>
                    </div>
                </div>
                {children}
            </div>
        </div>
    </>
}
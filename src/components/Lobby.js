import "../App.css";
import { CopyToClipboard } from "react-copy-to-clipboard"
import { SocketContext } from "../SocketContext"
import { useContext, useState } from "react"
export default function Lobby({ children }) {
    const { me, callAccepted, callUser, name, setName, leaveCall, callEnded } = useContext(SocketContext);
    const [idToCall, setIdToCall] = useState("");
    return <>
        <div className="options-container">
            <div className="options">
                <form autoComplete="off" noValidate className="form">
                    <div className="options-grid-container">
                        <div className="options-grid-padding">
                            <h6>Account Info</h6>
                            <input type="text" placeholder="Name" onChange={(e) => setName(e.target.value)} />
                            <CopyToClipboard text={me} className="">
                                <button>
                                    Copy your ID
                                </button>
                            </CopyToClipboard>
                        </div>
                        <div className="options-grid-padding">
                            <h6>Make a call</h6>
                            <input type="text" placeholder="ID to Call " onChange={(e) => setIdToCall(e.target.value)} />
                            {callAccepted && !callEnded ? (
                                <button style={{ "background": "red" }} onClick={leaveCall}>
                                    Hang up
                                </button>
                            ) : (
                                <button style={{ "background": "green" }} onClick={() => callUser(idToCall)}> Video Call </button>
                            )}
                        </div>
                    </div>
                </form>
                {children}
            </div>
        </div>
    </>
}
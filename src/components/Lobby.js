import { CopyToClipboard } from "react-copy-to-clipboard"
import { SocketContext } from "../SocketContext"
import { useContext } from "react"
export default function Lobby({children}) {
    const {me, callAccepted, callUser, name, setName, leaveCall, callEnded} = useContext(SocketContext);
    return <>
        <div>
            <img alt=" " src=" ">

            </img>
            <input type="text">
            </input>
            <button>
                Join
            </button>
            {children}
        </div>
    </>
}
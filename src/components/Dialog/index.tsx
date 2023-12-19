import { useState } from "react"
import './index.css'
interface Props {
    message: string,
    removeMessage: (message:string) => void
}
const Dialog = ({ message, removeMessage }: Props) => {
    const [isOpen] = useState(true)

    const handleClose = () => {
        removeMessage(message)
        // setIsOpen(false)
    }
    const dialogStyle = {
        position: 'initial',
        padding: '2px 0 2px 13px',
        height: 'fit-content',
        borderRadius:'10px',
        margin:'0 10px 10px 0',
        borderStyle:'none',
        backgroundColor:'lightgray'
    }
    return (
        <>
            <dialog open={isOpen} onClose={handleClose} style={dialogStyle}>
                <div style={{ display: 'flex' }}>
                    <div style={{ display: 'flex', alignItems: 'center', paddingBottom:'6px' }}><span>{message}</span></div>
                    <button style={{
                        height: '30px',
                        color: 'red',
                        border: '1px solid green',
                        borderRadius: '12px',
                        borderStyle:'solid',
                        marginLeft: '4px',
                        width: '30px'
                    }} className={"closeButton"} onClick={handleClose}>X</button>
                </div>
            </dialog>
        </>
    )
}
export default Dialog
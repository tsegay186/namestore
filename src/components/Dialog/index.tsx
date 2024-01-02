import { useState } from "react"
import './index.css'
interface Props {
    message: string,
    removeMessage: (message: string) => void,
    children: any
}
const Dialog = ({ message, removeMessage, children }: Props) => {
    const [isOpen] = useState(true)

    const handleClose = () => {
        removeMessage(message)
        // setIsOpen(false)
    }
    const dialogStyle = {
        position: 'initial',
        padding: '2px 0 2px 13px',
        height: 'fit-content',
        borderRadius: '10px',
        margin: '0 10px 10px 0',
        borderStyle: 'none',
        backgroundColor: 'lightgray',
        maxWidth: '100%'
    }
    return (
        <>
            <dialog open={isOpen} onClose={handleClose} style={dialogStyle}>
                <div style={{ display: 'flex', gap:'8px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', paddingBottom: '6px' }}><span style={{ wordBreak: 'break-all' }}>{message}</span></div>
                    <div>
                    {children}
                    </div>
                </div>
            </dialog>
        </>
    )
}
export default Dialog
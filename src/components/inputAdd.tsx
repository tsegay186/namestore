import { useState } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
interface prop {
    adContent: (example: string) => void,

}
const AddContent = ({ adContent }: prop) => {
    const [content, setContent] = useState('')

    const addButtonStyle = { border: '1px solid green', fontFamily: '100px', borderLeftStyle: 'none', cursor: 'pointer', height: '38px', paddingTop: "0", borderLeft: '0px', borderBottomRightRadius: '8px', borderTopRightRadius: '8px' }

    return (
        <>
            <div style={{ display: 'flex' }}>
                <input id="example" className="inpt" value={content} onChange={(e) => setContent(e.target.value)} type="text" placeholder="add Example" style={{ height: '34px', paddingLeft: '10px', border: '1px solid green', borderBottomLeftRadius: '6px', borderTopLeftRadius: '6px' }} />
                <button onClick={() => {
                    adContent(content)
                    setContent('')
                }
                } style={addButtonStyle} className="zx"> <span style={{ fontSize: '30px', width: '100%' }}>
                        <FontAwesomeIcon color="green" icon={faCheck}></FontAwesomeIcon>
                    </span></button>
            </div>
        </>
    )
}
export default AddContent
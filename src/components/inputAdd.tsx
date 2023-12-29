import { useState } from "react"

const AddContent = () => {
    
    const [content, setContent] = useState('')
    const addButtonStyle = { border: '1px solid green', fontFamily: '100px', borderLeftStyle: 'none', cursor: 'pointer', height: '38px', paddingTop: "0", borderLeft: '0px', borderBottomRightRadius: '8px', borderTopRightRadius: '8px' }
    const addContent = (cont: string) => {
        alert(cont)
    }
    return (
        <>
            <div style={{ display: 'flex' }}>
                <input id="example" className="inputElement" value={content} onChange={(e) => setContent(e.target.value)} type="text" placeholder="add Example" style={{ height: '34px', width: '65%', paddingLeft: '10px', border: '1px solid green', borderBottomLeftRadius: '6px', borderTopLeftRadius: '6px' }} />
                <button onClick={() => addContent(content)} style={addButtonStyle} className="addShortButton"> <span style={{ fontSize: '30px', width: '100%' }}>+</span></button>
            </div>
        </>
    )
}
export default AddContent
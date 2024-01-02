import { entityName } from "./dataSchemas/name"
import AddNameDialog from "./components/addNameDialog";
import { useState, useRef } from "react";
import NameComponent from "./components/Dialog/nameComponent";
import './App.css'
const inputStyle = { height: '40px', width: '100%', paddingLeft: '20px', paddingRight: '20px', borderRadius: '20px', backgroundColor: 'lightgray', borderStyle: 'none' }
const App = () => {
  const [names, setNames] = useState<entityName[]>([])
  const dialogRef = useRef(null);
  const handleModalOpen = () => {
    dialogRef.current && dialogRef.current.showModal()
  }
  const handleModalClose = () => {
    dialogRef.current && dialogRef.current.close()
  }
  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div >
          <label htmlFor=""></label>
          <input autoFocus={false} type="text" placeholder="Add a Name you already know." style={inputStyle} onClick={handleModalOpen} />
        </div>
      </div>
      <dialog ref={dialogRef} style={{ marginTop: '0px', border: '3px solid gray', borderRadius: '18px', paddingTop: '0px', width: '80%' }}>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ alignSelf: 'center' }}>
            <button onClick={handleModalClose} style={{ height: '40px', borderRadius: '10px', borderColor: 'red', borderBottomStyle: 'inset', margin: '3px 0 3px 0', borderRightStyle: 'inset' }} >
              close
            </button>
          </div>
          <AddNameDialog names={names} setNames={setNames} closeModal={handleModalClose} />
        </div>
      </dialog>
      <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', marginTop:'10px' }}>
        {
          names.map((zac, index) => (
            <div key={index} style={{ margin: '5px auto', width:'970px', padding:'6px' }}>
              <NameComponent {...zac} />
            </div>
          ))
        }
      </div>
    </>
  )

}

export default App


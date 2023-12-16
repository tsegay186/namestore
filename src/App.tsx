import React, { useState } from "react"
import { entityName } from "./dataSchemas/name"

import './App.css'
const styleObect = {
  display: 'flex',
  gap: '8px',
  backgroundColor: 'blueviolet',
  padding: '4px',
}
const App = () => {
  const [short, setShort] = useState<string>('')
  const [example, setExample] = useState<string>('')

  const [nameEntity, setNameEntity] = useState<entityName>({
    id: '',
    name: '',
    genderIdentity: 'unknown',
    examples: [],
    shorts: [],
    origin: '',
    ageStage: 'unknown',
    designation: 'unknown'
  })
  const handleButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const htmlButtonElement = event.target as HTMLButtonElement
    const { name, value } = htmlButtonElement
    const updateNameEntity = { ...nameEntity, [name]: value }
    setNameEntity(updateNameEntity)
    setStateUpdated(true)
  }
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const htmlInpuElement = event.target as HTMLInputElement
    const { name, value } = htmlInpuElement
    const updateNameEntity = { ...nameEntity, [name]: value }
    setNameEntity(updateNameEntity)
    setStateUpdated(true)
  }
  const [stateUpdated, setStateUpdated] = useState(false)
  const handleSubmit = () => {
    console.log(nameEntity)
  }

  return (
    <>
      <div style={{ ...styleObect, margin: '3px', flexWrap: 'wrap' }}>
        <div >
          <button disabled>
            I know
          </button>
        </div>

        <div style={{ display: 'flex', gap: 8, backgroundColor: 'blueviolet', padding: 4 }}>
          <button name='ageStage' value='baby' onClick={handleButtonClick} style={{ backgroundColor: nameEntity.ageStage === 'baby' ? 'cadetblue' : 'buttonface' }}>a Baby</button>
          <button name='ageStage' value='adult' onClick={handleButtonClick} style={{ backgroundColor: nameEntity.ageStage === 'adult' ? 'cadetblue' : 'buttonface' }}>an Adult</button>
          <button name='ageStage' value='allAges' onClick={handleButtonClick} style={{ backgroundColor: nameEntity.ageStage === 'allAges' ? 'cadetblue' : 'buttonface' }}>a Person</button>
        </div>

        <div style={{ display: 'flex', gap: 8, backgroundColor: 'blueviolet', padding: 4 }}>
          <button name='genderIdentity' value='man' onClick={handleButtonClick} style={{ backgroundColor: nameEntity.genderIdentity === 'man' ? 'cadetblue' : 'buttonface' }}>Man </button>
          <button name='genderIdentity' value='woman' onClick={handleButtonClick} style={{ backgroundColor: nameEntity.genderIdentity === 'woman' ? 'cadetblue' : 'buttonface' }}>Woman</button>
          <button name='genderIdentity' value='allGenders' onClick={handleButtonClick} style={{ backgroundColor: nameEntity.genderIdentity === 'allGenders' ? 'cadetblue' : 'buttonface' }}>Man & Woman</button>
        </div>

        <div style={styleObect}>
          <button disabled>
            based  on
          </button>
        </div>

        <div >
          <input name="origin" value={nameEntity.origin} placeholder='Orgin' onChange={handleInputChange} />
        </div>

        <div style={{ display: 'flex', gap: 8, backgroundColor: 'blueviolet', padding: 4 }}>
          <button disabled>Whose</button>
        </div>

        <div style={{ display: 'flex', gap: 8, backgroundColor: 'blueviolet', padding: 4 }}>
          <button name='designation' value='profession' onClick={handleButtonClick} style={{ backgroundColor: nameEntity.designation === 'profession' ? 'cadetblue' : 'buttonface' }}>Profession </button>
          <button name='designation' value='honor' onClick={handleButtonClick} style={{ backgroundColor: nameEntity.designation === 'honor' ? 'cadetblue' : 'buttonface' }}>Honor</button>
          <button name='designation' value='proper' onClick={handleButtonClick} style={{ backgroundColor: nameEntity.designation === 'proper' ? 'cadetblue' : 'buttonface' }}>Proper</button>
        </div>

        <div style={{ display: 'flex', gap: 8, backgroundColor: 'blueviolet', padding: 4 }}>
          <button disabled>
            Name
          </button>
        </div>

        <div style={{ display: 'flex', gap: 8, backgroundColor: 'blueviolet', padding: 4 }}>
          <button disabled>
            is
          </button>
        </div>

        <div style={{ display: 'flex', gap: 8, backgroundColor: 'blueviolet', padding: 4 }}>

          <input name="name" value={nameEntity.name} placeholder='Name' onChange={handleInputChange} />

        </div>

        <div style={{ display: 'flex', backgroundColor: 'blueviolet', padding: 4 }}>
          {
            !stateUpdated &&
            <button onClick={handleSubmit} >
              <span style={{ fontSize: 18, alignItems: 'center' }}>So Do I</span>
            </button>
          }
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <div>
          <div style={{ margin: '4px' }}>
            shorts
          </div>

          {
            nameEntity.shorts &&
            <div style={{ margin: '8px 0 8px 0', display: 'flex', flexDirection: 'column', gap: '6px', width: '30%' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div>
                  short
                </div>
                <div>
                  <a href="http://">clear short</a>
                </div>
              </div>
              <div style={{display:'flex'}}>
                <input value={short} name="short" onChange={(event) => { setShort(event?.target.value) }} type="text" style={{ width: '100%' }} />
                <div>
                  <button>add short</button>
                </div>
              </div>
            </div>
          }
          <div>
            <button type="link" >
              {
                (nameEntity.shorts?.length ?? 0) > 0 ? 'Add more' : 'Add short'
              }
            </button>
          </div>

          <div>
            <span>
              add more
            </span>
          </div>

        </div>

        <div style={{ margin: '4px' }}>
          Examples
        </div>
        <div style={{ margin: '4px' }}>
          <button onClick={handleSubmit} >
            <span style={{ fontSize: 18, alignItems: 'center' }}>Save</span>
          </button>
        </div>
      </div>

    </>
  )
}

export default App
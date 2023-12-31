import { useRef, useState } from "react";
import Dialog from "./Dialog/index";
import { entityName } from "../dataSchemas/name"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';
const initial: entityName = {
    id: '',
    name: '',
    genderIdentity: 'unknown',
    examples: [],
    shorts: [],
    origin: '',
    ageStage: 'unknown',
    designation: 'unknown'
}
const editDeleteBtn = { borderRadius: '10px', borderStyle: 'none', width: 'fit-content', height: 'fit-content', padding: '8px', margin: '2px', backgroundColor: 'none' }

interface props {
    names: entityName[],
    setNames: (value: entityName[]) => void,
    closeModal: () => void
}
const AddNameDialog = ({ names, setNames, closeModal }: props) => {
    const inpt = useRef(null)
    const [nameEntity, setNameEntity] = useState<entityName>(initial)

    const [short, setShort] = useState('')
    const [shorts, setShorts] = useState<string[]>([])

    const [example, setExample] = useState('')
    const [examples, setExamples] = useState<string[]>([...(nameEntity?.examples ?? [])])

    const [shortInputOpen, setShortInputOpen] = useState<boolean>(false)
    const [exampleInputOpen, setExampleInputOpen] = useState<boolean>(false)
    const dialogRef = useRef(null);
    const handleModalOpen = () => {
      dialogRef.current && dialogRef.current.showModal()
    }
    const handleModalClose = () => {
      dialogRef.current && dialogRef.current.close()
    }

    const handleAddButtonStyle = { borderStyle: 'none', color: 'blue', cursor: 'pointer', padding: '10px 22px 10px 22px', width: 'fit-content', borderRadius: '10px' }
    const addButtonStyle = { border: '1px solid green', fontFamily: '100px', borderLeftStyle: 'none', cursor: 'pointer', height: '38px', paddingTop: "0", borderLeft: '0px', borderBottomRightRadius: '8px', borderTopRightRadius: '8px' }

    const addShort = () => {

        if (shorts.includes(short) || (nameEntity?.shorts.includes(short))) {
            console.log('short already registered')
        } else {
            setShorts(prev => [...prev, short])
            setShort('')
        }

    }
    const removeShort = (value: string) => {
        console.log(value, 'value')
        const shortss = shorts.filter((short) => short !== value)
        setShorts(shortss)
    }

    const removeExample = (value: string) => {
        console.log(value)
        const exampless = examples.filter((exmple) => exmple !== value)
        console.log(examples, exampless)
        setExamples(exampless)
    }

    const addExample = (example: string) => {
        if (examples.includes(example) || (nameEntity?.examples.includes(example))) {
            console.log('example already taken')
        } else {
            setExamples(prev => [...prev, example])
            setExample('')
        }
    }

    function handleAddShortClick() {
        setShortInputOpen(true)
        setExampleInputOpen(false)
    }

    function handleAddExampleClick() {
        setShortInputOpen(false)
        setExampleInputOpen(true)
    }

    const styleObect = {
        display: 'flex',
        gap: '8px',
        backgroundColor: 'lightgray',
        padding: '4px',
    }

    const handleButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        const htmlButtonElement = event.target as HTMLButtonElement
        const { name, value } = htmlButtonElement
        const updateNameEntity = { ...nameEntity, [name]: value }
        setNameEntity(updateNameEntity)
    }

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const htmlInpuElement = event.target as HTMLInputElement
        const { name, value } = htmlInpuElement
        const updateNameEntity = { ...nameEntity, [name]: value }
        setNameEntity(updateNameEntity)
        if (value.length > 7 && value.length < 30) {
            inpt.current.style.width = value.length + 'ch'
        }
    }

    const handleSubmit = () => {
        const allExamples = [...nameEntity?.examples ?? [], ...examples]
        const allShorts = [...nameEntity?.shorts ?? [], ...shorts]
        const newEntity = { ...nameEntity, examples: [... new Set(allExamples)], shorts: [... new Set(allShorts)] }
        setNameEntity(() => newEntity)
        setNames([...names, newEntity])
        setNameEntity(() => initial)
        setExamples(() => [])
        setShorts(() => [])
        shortInputOpen && setShortInputOpen(false)
        exampleInputOpen && setExampleInputOpen(false)
        closeModal()
    }

    const disabledButtonColor = {
        color: 'green'
    }

    return (
        <>
            <div style={{ ...styleObect, minWidth: 'fit-content', flexDirection: "column", borderRadius: '12px', paddingRight: '12px' }}>
                <div style={{ margin: '3px', ...styleObect, flexWrap: 'wrap' }} className="contentContainer">
                    <div style={styleObect}>
                        <button disabled style={disabledButtonColor}>
                            I know
                        </button>
                    </div>

                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, padding: 4 }}>
                        <button name='ageStage' value='baby' onClick={handleButtonClick} >a Baby</button>
                        <button name='ageStage' value='adult' onClick={handleButtonClick} style={{ backgroundColor: nameEntity.ageStage === 'adult' ? 'cadetblue' : 'buttonface' }}>an Adult</button>
                        <button name='ageStage' value='person' onClick={handleButtonClick} style={{ backgroundColor: nameEntity.ageStage === 'person' ? 'cadetblue' : 'buttonface' }}>a Person</button>
                    </div>

                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, padding: 4 }}>
                        <button name='genderIdentity' value='man' onClick={handleButtonClick} style={{ backgroundColor: nameEntity.genderIdentity === 'man' ? 'cadetblue' : 'buttonface' }}>Man </button>
                        <button name='genderIdentity' value='woman' onClick={handleButtonClick} style={{ backgroundColor: nameEntity.genderIdentity === 'woman' ? 'cadetblue' : 'buttonface' }}>Woman</button>
                        <button name='genderIdentity' value='person' onClick={handleButtonClick} style={{ backgroundColor: nameEntity.genderIdentity === 'person' ? 'cadetblue' : 'buttonface' }}>Man & Woman</button>
                    </div>

                    <div style={styleObect}>
                        <button disabled style={disabledButtonColor}>
                            based  on
                        </button>
                    </div>

                    <div style={styleObect}>
                        <input name="origin" value={nameEntity.origin} placeholder='Orgin' onChange={handleInputChange} />
                    </div>

                    <div style={{ display: 'flex', gap: 8, padding: 4 }}>
                        <button disabled style={disabledButtonColor}>Whose</button>
                    </div>

                    <div style={{ display: 'flex', flexWrap: 'wrap', width: '100%', gap: 8, padding: 4 }}>
                        <button name='designation' value='profession' onClick={handleButtonClick} style={{ backgroundColor: nameEntity.designation === 'profession' ? 'cadetblue' : 'buttonface' }}>Profession </button>
                        <button name='designation' value='honor' onClick={handleButtonClick} style={{ backgroundColor: nameEntity.designation === 'honor' ? 'cadetblue' : 'buttonface' }}>Honor</button>
                        <button name='designation' value='proper' onClick={handleButtonClick} style={{ backgroundColor: nameEntity.designation === 'proper' ? 'cadetblue' : 'buttonface' }}>Proper</button>
                    </div>

                    <div style={{ display: 'flex', gap: 8, padding: 4 }}>
                        <button disabled style={disabledButtonColor}>
                            Name
                        </button>
                    </div>

                    <div style={{ display: 'flex', gap: 8, padding: 4 }}>
                        <button disabled style={disabledButtonColor}>
                            is
                        </button>
                    </div>

                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, padding: 4 }}>

                        <input ref={inpt} name="name" value={nameEntity.name} placeholder='Name' onChange={handleInputChange} style={{ paddingRight: '12px', maxWidth: '100%' }} />

                    </div>
                </div>

                <div style={{ gap: '18px', display: 'flex', flexDirection: 'column' }}>

                    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly', padding: '10px', width: 'fit-content', backgroundColor: 'whitesmoke', borderRadius: '12px', flexWrap: 'wrap', borderStyle: 'none', minWidth: '', maxWidth: '600px' }}>

                        <div style={{ display: 'flex', width: 'fit-content', maxWidth: '100%', height: 'fit-content', flexWrap: 'wrap' }}>
                            {
                                shorts.map((short: string, index: number) => (
                                    <div style={{ display: 'block', borderStyle: 'none', maxWidth: '100%' }} key={index}>
                                        <Dialog message={short} removeMessage={removeShort}>
                                            <button onClick={() => {
                                                removeShort(short)
                                            }} style={editDeleteBtn}>
                                                <FontAwesomeIcon color="red" icon={faTrash} ></FontAwesomeIcon>
                                            </button>
                                        </Dialog>
                                    </div>
                                ))
                            }

                        </div>

                        {
                            !shortInputOpen ? <button onClick={handleAddShortClick} style={handleAddButtonStyle}> add short </button>
                                :
                                <div style={{ display: 'flex' }}>
                                    <input id="short" className="inputElement" value={short} onChange={(e) => setShort(e.target.value)} type="text" placeholder="add short" style={{ height: '34px', width: '50%', paddingLeft: '10px', border: '1px solid green', borderBottomLeftRadius: '6px', borderTopLeftRadius: '6px' }} />
                                    <button onClick={addShort} style={addButtonStyle} > <span style={{ fontSize: '30px', width: '100%' }}>+</span></button>
                                </div>
                        }
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly', padding: '14px', width: 'fit-content', backgroundColor: 'whitesmoke', borderRadius: '12px', flexWrap: 'wrap', borderStyle: 'none', maxWidth: '600px' }}>
                        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: '12px', width: 'fit-content' }}>
                            {
                                examples.map((example: string, index: number) => (
                                    <div style={{ display: 'block', borderStyle: 'none' }} key={index}>
                                        <Dialog message={example} removeMessage={removeExample}>
                                            <dialog ref={dialogRef}>
                                                <input type="text" placeholder="" value={example} />
                                            </dialog>
                                                                                        <button onClick={() => removeExample(example)} style={editDeleteBtn}>
                                                <FontAwesomeIcon color="red" icon={faTrash} ></FontAwesomeIcon>
                                            </button>
                                        </Dialog>

                                    </div>
                                ))
                            }

                        </div>
                        {
                            !exampleInputOpen ?
                                <button onClick={handleAddExampleClick} style={handleAddButtonStyle}> add example</button>
                                :
                                <div style={{ display: 'flex' }}>
                                    <input id="example" className="inputElement" value={example} onChange={(e) => setExample(e.target.value)} type="text" placeholder="add Example" style={{ height: '34px', width: '65%', paddingLeft: '10px', border: '1px solid green', borderBottomLeftRadius: '6px', borderTopLeftRadius: '6px' }} />
                                    <button onClick={() => addExample(example)} style={addButtonStyle} > <span style={{ fontSize: '30px', width: '100%' }}>+</span></button>
                                </div>
                        }
                    </div>
                </div>
                <button style={{ height: '40px', borderStyle: 'none', borderRadius: '8px' }} onClick={handleSubmit}>Add Name</button>
            </div>

        </>
    )

}

export default AddNameDialog 

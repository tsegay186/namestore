import { useState } from "react";
import Dialog from "./Dialog/index";
import { entityName } from "../dataSchemas/name"
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
interface props {
    names: entityName[],
    setNames: (value: entityName[]) => void,
    closeModal:()=> void
}
const AddNameDialog = ({ names, setNames, closeModal }: props) => {
    const [nameEntity, setNameEntity] = useState<entityName>(initial)

    const [short, setShort] = useState('')
    const [shorts, setShorts] = useState<string[]>([])

    const [example, setExample] = useState('')
    const [examples, setExamples] = useState<string[]>([...(nameEntity?.examples ?? [])])

    const [shortInputOpen, setShortInputOpen] = useState<boolean>(false)
    const [exampleInputOpen, setExampleInputOpen] = useState<boolean>(false)

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
        const exampless = examples.filter((exmple) => exmple !== value)
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

    return (
        <>
            <div style={{ ...styleObect, flexDirection: "column", borderRadius: '12px' }}>
                <div style={{ margin: '3px', ...styleObect, flexWrap: 'wrap' }} className="contentContainer">
                    <div style={styleObect}>
                        <button disabled>
                            I know
                        </button>
                    </div>

                    <div style={{ display: 'flex', gap: 8, padding: 4 }}>
                        <button name='ageStage' value='baby' onClick={handleButtonClick} style={{ backgroundColor: nameEntity.ageStage === 'baby' ? 'cadetblue' : 'buttonface' }}>a Baby</button>
                        <button name='ageStage' value='adult' onClick={handleButtonClick} style={{ backgroundColor: nameEntity.ageStage === 'adult' ? 'cadetblue' : 'buttonface' }}>an Adult</button>
                        <button name='ageStage' value='person' onClick={handleButtonClick} style={{ backgroundColor: nameEntity.ageStage === 'person' ? 'cadetblue' : 'buttonface' }}>a Person</button>
                    </div>

                    <div style={{ display: 'flex', gap: 8, padding: 4 }}>
                        <button name='genderIdentity' value='man' onClick={handleButtonClick} style={{ backgroundColor: nameEntity.genderIdentity === 'man' ? 'cadetblue' : 'buttonface' }}>Man </button>
                        <button name='genderIdentity' value='woman' onClick={handleButtonClick} style={{ backgroundColor: nameEntity.genderIdentity === 'woman' ? 'cadetblue' : 'buttonface' }}>Woman</button>
                        <button name='genderIdentity' value='person' onClick={handleButtonClick} style={{ backgroundColor: nameEntity.genderIdentity === 'person' ? 'cadetblue' : 'buttonface' }}>Man & Woman</button>
                    </div>

                    <div style={styleObect}>
                        <button disabled>
                            based  on
                        </button>
                    </div>

                    <div style={styleObect}>
                        <input name="origin" value={nameEntity.origin} placeholder='Orgin' onChange={handleInputChange} />
                    </div>

                    <div style={{ display: 'flex', gap: 8, padding: 4 }}>
                        <button disabled>Whose</button>
                    </div>

                    <div style={{ display: 'flex', gap: 8, padding: 4 }}>
                        <button name='designation' value='profession' onClick={handleButtonClick} style={{ backgroundColor: nameEntity.designation === 'profession' ? 'cadetblue' : 'buttonface' }}>Profession </button>
                        <button name='designation' value='honor' onClick={handleButtonClick} style={{ backgroundColor: nameEntity.designation === 'honor' ? 'cadetblue' : 'buttonface' }}>Honor</button>
                        <button name='designation' value='proper' onClick={handleButtonClick} style={{ backgroundColor: nameEntity.designation === 'proper' ? 'cadetblue' : 'buttonface' }}>Proper</button>
                    </div>

                    <div style={{ display: 'flex', gap: 8, padding: 4 }}>
                        <button disabled>
                            Name
                        </button>
                    </div>

                    <div style={{ display: 'flex', gap: 8, padding: 4 }}>
                        <button disabled>
                            is
                        </button>
                    </div>

                    <div style={{ display: 'flex', gap: 8, padding: 4 }}>

                        <input name="name" value={nameEntity.name} placeholder='Name' onChange={handleInputChange} />

                    </div>
                </div>

                <div style={{ gap: '18px', display: 'flex', flexDirection: 'column' }}>

                    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly', padding: '10px', width: 'fit-content', backgroundColor: 'whitesmoke', borderRadius: '12px', flexWrap: 'wrap', borderStyle: 'none', minWidth: '', maxWidth: '600px' }}>

                        <div style={{ display: 'flex', width: 'fit-content', height: 'fit-content', flexWrap: 'wrap' }}>
                            {
                                shorts.map((short: string, index: number) => (
                                    <div style={{ display: 'block', borderStyle: 'none' }} key={index}>
                                        <Dialog message={short} removeMessage={removeShort}></Dialog>
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
                                        <Dialog message={example} removeMessage={removeExample}></Dialog>
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

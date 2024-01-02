import { entityName } from "../../dataSchemas/name"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faPlus, faUserCheck, faSmile, faCheck } from '@fortawesome/free-solid-svg-icons';
import Dialog from "."
import AddContent from "../inputAdd"
import { useState } from "react";
// import { useState } from "react"

const NameComponent = ({ ...prop }: entityName) => {
    const [shortFlag, setShortFlag] = useState(false)
    const [exampleFlag, setExampleFlag] = useState(false)

    // const [example, setExample] = useState('')
    // const addExample = (example: string) => {
    //     alert(example)
    // }
    const [name, setName] = useState(prop)
    console.log(name)

    const styleObect = {
        display: 'flex',
        gap: '8px',
        backgroundColor: '#f1f3f4',
        padding: '4px',
    }

    const editDeleteBtn = { borderRadius: '10px', width: 'fit-content', height: 'fit-content', padding: '8px', margin: '2px', backgroundColor: 'none' }
    const bottomBtnStyle = { margin: '6px' }

    const removeExample = (example: string) => {
        const { examples } = name
        console.log(examples)
        const exampless = examples.filter((exmple) => exmple !== example)
        setName({ ...name, examples: exampless })
    }

    const removeShort = (short: string) => {
        const { shorts } = name
        console.log(shorts)
        const shortss = shorts.filter((srt) => srt !== short)
        setName({ ...name, shorts: shortss })
    }

    const addExample = (example: string) => {
        const { examples } = name
        if (examples.includes(example)) {
            console.log('example already added')
        } else {
            if (example) {
                const updatedExamples = [...examples, example]
                setName({ ...name, examples: updatedExamples })
            }
        }
    }
    const addShort = (short: string) => {
        const { shorts } = name

        if (shorts.includes(short)) {
            console.log('short already added')
        } else {
            if (short) {
                const updatedShorts = [...shorts, short]
                setName({ ...name, shorts: updatedShorts })
            }
        }
    }

    return (
        <>
            <div style={{ margin: '3px', ...styleObect, flexDirection: 'column', flexWrap: 'wrap', flexShrink: 'inherit', borderRadius: '8px', width: 'fit-content' }} className="contentContainer">
                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
                    <div style={styleObect}>
                        <button disabled>
                            I know
                        </button>
                    </div>

                    <div style={{ display: 'flex', gap: 8, padding: 4 }}>
                        <button name='ageStage' disabled>{prop.ageStage.startsWith('a') ? 'an' : 'a'} {prop.ageStage}</button>
                    </div>

                    <div style={{ display: 'flex', gap: 8, padding: 4 }}>
                        <button name='genderIdentity' disabled>{prop.genderIdentity}</button>
                    </div>

                    <div style={styleObect}>
                        <button disabled>
                            based  on
                        </button>
                    </div>

                    <div style={styleObect}>
                        <button name="origin" disabled>{prop.origin}</button>
                    </div>

                    <div style={{ display: 'flex', gap: 8, padding: 4 }}>
                        <button disabled>Whose</button>
                    </div>

                    <div style={{ display: 'flex', gap: 8, padding: 4 }}>
                        <button name='designation' disabled>{prop.designation}</button>
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
                        <button name="name" disabled> {prop.name}</button>
                    </div>
                </div>
                <div>
                    <div >
                        <div >
                            {
                                name.shorts.length ? <div>
                                    <span style={{ margin: '8px' }}>Shorts</span>
                                </div> : ''
                            }

                            <div style={{ marginLeft: '18px', marginTop: '8px', display: 'flex', width: 'fit-content', maxWidth: '100%', height: 'fit-content', flexWrap: 'wrap' }}>
                                {
                                    name.shorts.map((short: string, index: number) => (
                                        <div style={{ display: 'block', borderStyle: 'none', maxWidth: '100%' }} key={index}>
                                            <Dialog message={short} removeMessage={() => { }}>
                                                <button onClick={() => removeShort(short)} style={editDeleteBtn}>
                                                    <FontAwesomeIcon color="red" icon={faTrash} ></FontAwesomeIcon>
                                                </button>
                                            </Dialog>
                                        </div>
                                    ))
                                }
                            </div>
                            {
                                shortFlag ? <div style={{ marginLeft: '18px' }}>
                                    <AddContent adContent={addShort} />
                                </div> : ''
                            }
                        </div>
                    </div>
                    <div >
                        {
                            name.examples.length ? <div><span style={{ margin: '8px' }}>Exampless</span></div>
                                : ''
                        }
                        <div style={{ marginLeft: '18px', marginTop: '8px', width: 'fit-content', maxWidth: '100%', height: 'fit-content', flexWrap: 'wrap' }}>
                            {
                                name.examples.map((example: string, index: number) => (
                                    <div style={{ display: 'block', borderStyle: 'none', maxWidth: '100%' }} key={index}>
                                        <Dialog message={example} removeMessage={() => { }}>
                                            <button onClick={() => removeExample(example)} style={editDeleteBtn}>
                                                <FontAwesomeIcon color="red" icon={faTrash} ></FontAwesomeIcon>
                                            </button>
                                        </Dialog>

                                    </div>
                                ))
                            }
                            {
                                exampleFlag ? <div>
                                    <AddContent adContent={addExample} />
                                </div> : ''
                            }
                        </div>
                    </div>
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', width: '100%' }}>
                    <div style={{ display: 'flex', gap: '12px', justifySelf: 'center' }}>
                        <button onClick={() => {
                            setShortFlag(flag =>!flag)
                            
                            }} style={bottomBtnStyle}>
                            <FontAwesomeIcon color="green" icon={faPlus}></FontAwesomeIcon> short
                        </button>
                        <button style={bottomBtnStyle} onClick={() => setExampleFlag(flag => !flag)}>
                            <FontAwesomeIcon color="green" icon={faPlus}></FontAwesomeIcon> example
                        </button>
                    </div>
                    <div style={{ display: 'flex', gap: '12px', justifyContent: 'center' }}>
                        <button style={bottomBtnStyle}> <FontAwesomeIcon icon={faSmile}></FontAwesomeIcon>my name</button>
                        <button style={bottomBtnStyle}>
                            <FontAwesomeIcon icon={faUserCheck}></FontAwesomeIcon>
                            so do I</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NameComponent
import { entityName } from "../../dataSchemas/name"
const NameComponent = ({...prop}:entityName) => {
    const styleObect = {
        display: 'flex',
        gap: '8px',
        backgroundColor: 'lightgray',
        padding: '4px',
      }
    return (
        <>
            <div style={{ margin: '3px', ...styleObect, flexWrap: 'wrap', width: 'fit-content', borderRadius: '8px' }} className="contentContainer">
                <div style={styleObect}>
                    <button disabled>
                        I know
                    </button>
                </div>

                <div style={{ display: 'flex', gap: 8, padding: 4 }}>
                    <button name='ageStage' disabled>{prop.ageStage.startsWith('a')?'an':'a'} {prop.ageStage}</button>
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
        </>
    )
}

export default NameComponent
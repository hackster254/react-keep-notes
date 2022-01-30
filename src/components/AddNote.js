import {useState} from 'react'
const AddNote=({handleAddNote})=>{

    const [noteText, setNoteText]= useState("")

    const characterLimit = 200;

    const handleChange=(event)=> {
        //console.log(event.target.value)
        if(characterLimit - event.target.value.length >=0){
            setNoteText(event.target.value)
        }
        



    }

    const handleSaveClick =()=> {
        if(noteText.trim().length > 0){
            handleAddNote(noteText)
            setNoteText('')
        }
        

    }
    return(
        <div className="note new">
            <textarea onChange={handleChange} value={noteText}
            rows={8} cols={8} placeholder="Type to add a note"></textarea>
        
            <div className="note-footer">
                <small>{characterLimit - noteText.length} characters remaining</small>
                <button onClick={handleSaveClick} className="save">Save</button>
            </div>
        
        </div>
    )
}


export default AddNote
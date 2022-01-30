import { useEffect, useState } from "react"
import NotesList from "./components/NotesList"
import {nanoid} from 'nanoid'
import Search from "./components/Search"
import Header from "./components/Header"

const App = ()=> 
  {

    const [notes, setNotes] = useState([
      {
      text: "this is my first note",
      date: "12/04/2021",
      id: nanoid()
  }, {
    text: "this is my second note",
    date: "12/04/2021",
    id: nanoid()
  },
  {
    text: "this is my third note",
    date: "12/04/2021",
    id: nanoid()
  }, {
    text: "this is my 4th note",
    date: "12/04/2021",
    id: nanoid()
  }
  ])

  const [searchText, setSearchText]= useState('')


  const [darkMode, setDarkMode] = useState(false)

  useEffect(()=> {
    localStorage.setItem('react-notes-app-data', JSON.stringify(notes))

  }, [notes]) // save notes to local storage everytime it changes


  useEffect(()=> {
      const savedNotes = JSON.parse(localStorage.getItem('react-notes-app-data'))

      if(savedNotes){
        setNotes(savedNotes)
      }
  
    }, []) // only run on the first load



  const addNote =(text)=> {
    //console.log(text)
    const date = new Date()
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString()
    }

    const newNotes = [...notes, newNote]
    setNotes(newNotes);

  }

  const deleteNote = (id)=> {
    const newNotes = notes.filter((note)=> note.id !== id)
    setNotes(newNotes)

  }
  return (
    <div className={`${darkMode && 'dark-mode'}`}>
      <div className="container">
          <Header handleToggleDarkMode={setDarkMode} />
          <Search handleSearchNote={setSearchText} />
          <NotesList notes={notes.filter((note)=> note.text.toLocaleLowerCase().includes(searchText))} handleAddNote={addNote} handleDeleteNote={deleteNote}/>
        </div>
    </div>
  
  )
}

export default App
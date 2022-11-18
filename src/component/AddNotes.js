import React, { useState } from 'react'
import { useContext } from 'react';
import Alert from './Alert';
import noteContext from "../context/notes/noteContext";
import './AddNotes.css'
import { MdOutlineSubtitles, MdDescription } from 'react-icons/md';
import { ImPriceTags } from 'react-icons/im';
import { CgNotes } from 'react-icons/cg';

const AddNotes = (props) => {
    const context = useContext(noteContext);
    const {addNote} = context;
    
    const [note , setNote] = useState({title: " ", description:" ", tag:" "})

    const handleClick = (e)=>{
        e.preventDefault();
       addNote(note.title, note.description, note.tag);
       setNote({title: " ", description:" ", tag:" "})
       props.showAlert("Added succssfully" , "success");
    }

    const onChange = (e)=>{
       setNote({...note, [e.target.name]: e.target.value})
    }

    return (
        <div>
            <Alert message="this is good alert " />
            <div className='container addnotes'>
                    <h2><CgNotes/>  Add a notes</h2>
                <form className='my-4'>
                    <div className="mb-3">
                        <label htmlFor="title" className="form-label">  <MdOutlineSubtitles/>  Title</label>
                        <input type="text" className="form-control" id="title"  value ={note.title} name="title" aria-describedby="emailHelp" onChange={onChange} minLength={5} required/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="description" className="form-label"> <MdDescription/>  Description</label>
                        <input type="text" className="form-control" id="description" value ={note.description}  name="description" onChange={onChange} minLength={5} required/>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="tag" className="form-label"><ImPriceTags/>    Tag</label>
                        <input type="text" className="form-control" id="tag" value ={note.tag} name="tag" onChange={onChange} minLength={5} required/>
                    </div>
                    
                    <div className='addnotebuttonCenter'>
                    <button disabled={note.title.length<5 || note.description.length<5} type="submit" className="btn addnotebutton" onClick={handleClick}>Add Note</button></div>
                </form>
            </div>
        </div>

    )
}

export default AddNotes

import React from 'react'
import { AiTwotoneDelete } from 'react-icons/ai';
import { FaEdit } from 'react-icons/fa';
import { useContext } from 'react';
import noteContext from "../context/notes/noteContext";


const Noteitem = (props) => {
    const context = useContext(noteContext);
    const { deleteNote } = context;
    const { note, updateNote } = props;
    return (
        <>
        <div className='row my-3'>
            <div className="card my-3 NoteItem border border-dark ">
                <div className="card-body">
                    <h5 className="card-title"> {note.title}</h5>
                    <p className="card-text">{note.description}</p>
                    <i className='mx-2' onClick={()=>{deleteNote(note._id); props.showAlert("Deleted succssfully" , "success");}}><AiTwotoneDelete/></i>
                    <i className='mx-2' onClick={()=>{updateNote(note)}}><FaEdit/></i>
                </div>
            </div>
        </div>
      
   
     </>
    )
}

export default Noteitem

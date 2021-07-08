
import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import CreateNote from "./CreateNote";
import Note from './Note'
import { useState } from "react";
function AddNote(props) {
 let[addItem,setAddItem] = useState([])	
	const addNote = (note) => {
		setAddItem((preVal) => {
	 return [...preVal,note]
 })
}

	const handleDelete = (id) => {
		setAddItem((oldData) => 
			oldData.filter((val, indx) => {
				console.log(indx);
				return indx !== id;
			})
		)
}

	return (
		
		<>
<Header/>

{/* <Footer/> */}
			<CreateNote passNote={addNote}/>
 <div className="note-container">			{addItem.map((elem, index) => {

				return < Note
				key = { index }
				id = { index }
				title = { elem.title }
				content = { elem.content }
		    handleDelete = {handleDelete}
					/>
 })}
			</div>

		</>
	)
}

export default AddNote;

import React from 'react';
import Tooltip from '@material-ui/core/Tooltip';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

import Fab from '@material-ui/core/Fab';
function Note(props) {
	const onDelete = () => {
  props.handleDelete(props.id) 
 }

		return (
			<>
				<div className="note">	
				<h2>{props.title}</h2>
				<p>{props.content}</p>
<div className="btn">
			<Tooltip title="Delete">
 <Fab size ="small" color="secondary" className='delete-btn' aria-label="add" onClick = {onDelete}>
       <DeleteForeverIcon />
      </Fab>
				</Tooltip></div>
				</div>

				</>
	)

}

export default Note;
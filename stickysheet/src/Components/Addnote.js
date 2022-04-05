import { useState } from 'react';

const [noteText, setNoteText] = useState('');

return (
    <div className='note new'>
        <textarea
            rows='8'
            cols='10'
            placeholder='Type to add a note...'
            value={noteText}
            onChange={handleChange}
        ></textarea>
        <div className='note-footer'>
            <button className='save' onClick={handleSaveClick}>
                Save
            </button>
        </div>
    </div>
);
};

export default AddNote;
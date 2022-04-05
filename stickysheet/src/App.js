import NotesList from "./Components/NoteList";

const App = () => {


  const addNote = (text) => {
		const date = new Date();
		const newNote = {
			id: nanoid(),
			text: text,
			date: date.toLocaleDateString(),
		};
    
    return (

  <div className='container'>
    
    <NotesList/>
  </div>
);
};

export default App;

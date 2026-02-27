import { useState, useEffect } from 'react';
import List from './List';
import Textarea from './Textarea';
import styled from 'styled-components';
import SearchBar from './SearchBar';
import { nanoid } from 'nanoid';
import './App.css';

function generateId() {
  return nanoid();
}

const Wrapper = styled.div`
    width: 100%;
    position: relative;
`;

const STORAGE_KEY = 'notes_app';

function App() {
  const [state, setState] = useState({ edit: false, id: undefined });
  const [notes, setNotes] = useState(() => {
    const savedNotes = localStorage.getItem(STORAGE_KEY);
    const parsed = JSON.parse(savedNotes);
    return parsed || [];
  });
  const [text, setText] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(notes));
  }, [notes]);

  const filteredNotes = notes.filter(note =>
    note.text.toLowerCase().includes(searchTerm.toLowerCase())
  );

  function addZero(num) {
    if (num >= 0 && num <= 9) {
      return '0' + num;
    } else {
      return num;
    }
  }

  function handleBlur(event) {
    if (state.edit) {
      setNotes(notes.map(note =>
        note.id === state.id ? { ...note, text: event.target.value } : note
      ));
      setText('');

      setState({ edit: false, id: undefined });
    } else {
      let date = new Date;
      let now =
        addZero(date.getHours()) + ':' +
        addZero(date.getMinutes()) + ':' +
        addZero(date.getSeconds()) + ' ' +
        addZero(date.getDate()) + '.' +
        addZero(date.getMonth() + 1) + '.' +
        date.getFullYear();

      let copy = Object.assign([], notes);
      copy.push({ text: event.target.value, time: now, id: generateId() });
      setNotes(copy);

      setText('');
    }
  }

  function clickhandler(note, event) {
    setText(note.text);
    setState({ edit: true, id: note.id });
  }

  function handleChange(event) {
    setText(event.target.value);
  }

  const deleteItem = (id, event) => {
    event.stopPropagation();
    setNotes(notes.filter(note => note.id !== id));
    setState({ edit: false, id: undefined });
  };

  return <>
    <Wrapper>
      <SearchBar searchTerm={searchTerm} onSearch={setSearchTerm} />
      <List filteredNotes={filteredNotes} clickhandler={clickhandler} deleteItem={deleteItem} editingId={state.id} />
      <Textarea handleBlur={handleBlur} text={text} handleChange={handleChange} />
    </Wrapper>
  </>;
}

export default App
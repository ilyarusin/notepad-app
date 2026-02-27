import styled from 'styled-components';

const StyledList = styled.ul`
    float: left;
	margin-top: 96px;
	padding-left: 0;
	margin-left: 50px;
    list-style-type: none;
`;

const ListItem = styled.li`
    margin-bottom: 10px;
`;

const DeleteButton = styled.span`
    margin-left: 20px;
    color: #da2222;
    cursor: pointer;
    padding: 4px 8px;
    border-radius: 4px;
    transition: all 0.2s;

    &:hover {
        background-color: #ff4444;
        color: white;
    }
`;

function List({ filteredNotes, clickhandler, deleteItem, editingId }) {
    const result = filteredNotes.map(function (note) {
        return <ListItem onClick={() => clickhandler(note)} key={note.id} $isEditing={editingId === note.id}>
            {note.time}
            <DeleteButton onClick={(event) => deleteItem(note.id, event)}>Удалить</DeleteButton>
        </ListItem>;
    });

    return <StyledList>
        {result}
    </StyledList>;
}

export default List;
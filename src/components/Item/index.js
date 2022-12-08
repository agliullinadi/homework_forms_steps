import React from 'react';
import PropTypes from 'prop-types';

function Item({ date, km, onDeleteNote, id, }) {

    return (
        <ul className="item">
            <li>{date}</li>
            <li>{km}</li>
            <li><button onClick={() => onDeleteNote(id)}>Удалить</button></li>
        </ul>
    );
}

export default Item;

Item.propTypes = {
    date: PropTypes.string.isRequired,
    km: PropTypes.number.isRequired,
    onDeleteNote: PropTypes.func.isRequired,
    id: PropTypes.string.isRequired,
};
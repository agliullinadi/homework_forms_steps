import React from 'react';
import PropTypes from 'prop-types';
import Item from '../Item';

function List(props) {
    const { notes } = props;

    if (!notes.length) {
        return (
            <p>Нет данных</p>
        );
    }

    const notesSortedByDateFromNew = notes.sort((a, b) => {
        const collator = new Intl.Collator();
        return collator.compare(b.date, a.date);
    });

    return (
        <div>
            <ul className="head">
                <li>Дата (ДД.ММ.ГГГГ)</li>
                <li>Пройдено км</li>
                <li>Действия</li>
            </ul>
            <div>
                {notesSortedByDateFromNew.map((o) => (
                    <Item
                        key={o.id}
                        id={o.id}
                        date={o.date}
                        km={o.km}
                        onDeleteNote={props.onDeleteNote}
                    />
                ))}
            </div>
        </div>
    );
}

export default List;

List.propTypes = {
    notes: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
        km: PropTypes.number.isRequired,
    })).isRequired,
    onDeleteNote: PropTypes.func.isRequired,
};
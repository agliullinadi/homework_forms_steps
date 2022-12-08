import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';

function Form({ onSubmit }) {
    const [date, setDate] = useState('');
    const handleDateInput = (e) => {
        setDate(() => e.target.value);
    };

    const [km, setKm] = useState('');
    const handleKmInput = (e) => {
        setKm(() => e.target.value);
    };

    const resetForm = () => {
        setDate(() => '');
        setKm(() => '');
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (date) {
            onSubmit({
                id: nanoid(),
                date,
                km: parseFloat(km) || 0,
            });
            resetForm();
        }
    };

    return (
        <div className="container">
            <form className="form" onSubmit={handleSubmit}>
                <input className="form-date" type="text" placeholder="Дата (ДД.ММ.ГГГГ)" value={date} onChange={handleDateInput} />
                <input className="form-km" type="text" placeholder="Километры" value={km} onChange={handleKmInput} />
                <button type="submit">ОК</button>
            </form>
        </div>
    );
}

export default Form;

Form.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};
import React from 'react';
import CheckBox from './CheckBox';

export default function TodoItem(props) {
    const {data, changeStatus, deleteItem} = props;
    const handleChange = (checked) => changeStatus(data.id, checked);
    const className = 'todo-item ui-state-default ' + (data.completed === true ? 'completed' : 'pending');
    const handleDelete = () => deleteItem(data.id);

    return (
        <li className={className}>
            <div className="checkbox">
                <label>
                    <CheckBox checked={data.completed} onChange={handleChange}/>
                    {data.text}
                </label>
                <button id={data.id} className="delete" onClick={handleDelete}/>
            </div>
        </li>
    );
}

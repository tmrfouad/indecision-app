import React from 'react';
import Option from './Option'

const Options = props => (
    <div>
        <button
            onClick={props.onRemoveAll}>
            Remove All
        </button>
        {
            props.options.length === 0
            && <p>Please add an option to get started!</p>
        }
        {
            props.options.map(option =>
                <Option onRemove={props.onRemoveOption} key={option} option={option} />)
        }
    </div>
);

export default Options;
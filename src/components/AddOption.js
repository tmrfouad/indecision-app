import React from 'react';

export default class AddOption extends React.Component {
    state = {
        error: undefined
    };

    onFormSubmit = (e) => {
        e.preventDefault();

        const optionElement = e.target.elements.option;
        const option = optionElement.value.trim();

        const error = this.props.onAddOption(option);

        this.setState(() => ({ error }));

        if (!error) {
            optionElement.value = null;
        }

        optionElement.focus();
    };

    render() {
        return (
            <div>
                {this.state.error && <p className="add-option-error">{this.state.error}</p>}
                <form
                    className="add-option"
                    onSubmit={this.onFormSubmit}
                >
                    <input
                        className="add-option__input"
                        type="text"
                        name="option"
                    />
                    <button className="button">Add Option</button>
                </form>
            </div>
        );
    }
}
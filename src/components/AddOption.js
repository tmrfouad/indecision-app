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
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.onFormSubmit}>
                    <input type="text" name="option" />
                    <button>Add Option</button>
                </form>
            </div>
        );
    }
}
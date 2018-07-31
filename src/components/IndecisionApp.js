import React from 'react';
import AddOption from './AddOption';
import Options from './Options'
import Action from './Action'
import Header from './Header'
import OptionModal from './OptionModal'

export default class IndecisionApp extends React.Component {
    state = {
        subTitle: 'Put your life in the hands of a computer',
        options: [],
        selectedOption: null
    };

    handleDeleteOptions = () => {
        this.setState(() => ({ options: [] }));
    };

    handleDeleteOption = (option) => {
        this.setState(prevState =>
            ({ options: prevState.options.filter(o => o !== option) }));
    };

    handlePick = () => {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        this.setState(() => ({selectedOption: option}));
    };

    handleAddOption = (option) => {
        if (!option) {
            return 'Enter a valid value to add an option.'
        } else if (this.state.options.includes(option)) {
            return 'This option already exists.'
        }

        this.setState(prevState =>
            ({ options: prevState.options.concat([option]) }));
    };

    handleModalClose = () => {
        this.setState(() => ({selectedOption: null}));
    }

    componentDidMount() {
        try {
            const options = JSON.parse(localStorage.getItem('options'));
            if (options) {
                this.setState(() => ({ options }));
            }
        } catch (error) {
            // Do nothing.
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.options.length !== this.state.options.length) {
            const jsonOptions = JSON.stringify(this.state.options);
            localStorage.setItem('options', jsonOptions);
        }
    }

    componentWillUnmount() {
        
    }

    render() {
        return (
            <div>
                <Header subTitle={this.state.subTitle} />
                <Action
                    onPick={this.handlePick}
                    hasOptions={this.state.options.length > 0} />
                <Options
                    onRemoveOption={this.handleDeleteOption}
                    onRemoveAll={this.handleDeleteOptions}
                    options={this.state.options} />
                <AddOption onAddOption={this.handleAddOption} />
                <OptionModal
                    selectedOption={this.state.selectedOption}
                    onModalClose={this.handleModalClose}
                />
            </div>
        );
    }
}
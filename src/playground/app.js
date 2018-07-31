class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);

        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);

        this.state = {
            subTitle: 'Put your life in the hands of a computer',
            options: []
        }
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
        console.log('componentWillUnmount');
    }

    handleDeleteOptions() {
        this.setState(() => ({ options: [] }));
    }

    handleDeleteOption(option) {
        this.setState(prevState =>
            ({ options: prevState.options.filter(o => o !== option) }));
    }

    handlePick() {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        alert(option);
    }

    handleAddOption(option) {
        if (!option) {
            return 'Enter a valid value to add an option.'
        } else if (this.state.options.includes(option)) {
            return 'This option already exists.'
        }

        this.setState(prevState =>
            ({ options: prevState.options.concat([option]) }));
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
            </div>
        );
    }
}

const Header = props => {
    return (
        <div>
            <h1>{props.title}</h1>
            {props.subTitle && <h2>{props.subTitle}</h2>}
        </div>
    );
}

Header.defaultProps = {
    title: 'Indecision'
};

const Action = props => {
    return (
        <div>
            <button
                disabled={!props.hasOptions}
                onClick={props.onPick}>
                What should I do?
                </button>
        </div>
    );
}

const Options = props => {
    return (
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
}

const Option = props => {
    return (
        <div>
            -- {props.option}
            <button
                onClick={() => props.onRemove(props.option)}>
                Remove
            </button>
        </div>
    );
}

class AddOption extends React.Component {
    constructor(props) {
        super(props);

        this.onFormSubmit = this.onFormSubmit.bind(this);

        this.state = {
            error: undefined
        };
    }

    onFormSubmit(e) {
        e.preventDefault();

        const optionElement = e.target.elements.option;
        const option = optionElement.value.trim();

        const error = this.props.onAddOption(option);

        this.setState(() => ({ error }));

        if (!error) {
            optionElement.value = null;
        }

        optionElement.focus();
    }

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

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));
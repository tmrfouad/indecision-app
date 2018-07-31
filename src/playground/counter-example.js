class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.plusOne = this.plusOne.bind(this);
        this.minusOne = this.minusOne.bind(this);
        this.reset = this.reset.bind(this);
        this.state = {
            count: 0
        }
    }

    componentDidMount() {
        const count = localStorage.getItem('count');
        if (count && !isNaN(+count)) {
            this.setState(() => ({ count: +count }));
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.count !== this.state.count) {
            localStorage.setItem('count', this.state.count);
        }
    }

    plusOne() {
        this.setState(prevState => ({ count: prevState.count + 1 }));
    }

    minusOne() {
        this.setState(prevState => ({ count: prevState.count - 1 }));
    }

    reset() {
        this.setState(() => ({ count: 0 }));
    }

    render() {
        return (
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.plusOne}>+1</button>
                <button onClick={this.minusOne}>-1</button>
                <button onClick={this.reset}>Reset</button>
            </div>
        );
    }
}

ReactDOM.render(<Counter />, document.getElementById('app'));
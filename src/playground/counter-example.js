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

    plusOne() {
        this.setState(prevState => {
            return {
                count: ++prevState.count
            };
        });
    }

    minusOne() {
        this.setState(prevState => {
            return {
                count: --prevState.count
            };
        });
    }

    reset() {
        this.setState(() => {
            return {
                count: 0
            };
        });
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

// //------ template two ------
// const appRoot = document.getElementById('app');

// let count = 0;
// const plusOne = () => {
//     count++;
//     render();
// };
// const minusOne = () => {
//     count--;
//     render();
// };
// const reset = () => {
//     count = 0;
//     render();
// };

// const render = () => {
//     // JSX Javascript XML
//     const template = (
//         <div>
//             <h1>Count : {count}</h1>
//             <button onClick={plusOne}>+1</button>
//             <button onClick={minusOne}>-1</button>
//             <button onClick={reset}>Reset</button>
//         </div>
//     );

//     // render JSX template
//     ReactDOM.render(template, appRoot);
// }

// render();
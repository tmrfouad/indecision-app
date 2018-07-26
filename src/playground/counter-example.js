//------ template two ------
const appRoot = document.getElementById('app');

let count = 0;
const plusOne = () => {
    count++;
    render();
};
const minusOne = () => {
    count--;
    render();
};
const reset = () => {
    count = 0;
    render();
};

const renderApp = () => {
    // JSX Javascript XML
    const template = (
        <div>
            <h1>Count : {count}</h1>
            <button onClick={plusOne}>+1</button>
            <button onClick={minusOne}>-1</button>
            <button onClick={reset}>Reset</button>
        </div>
    );

    // render JSX template
    ReactDOM.render(template, appRoot);
}

render();
const appRoot = document.getElementById('app');

const app = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of a computer',
    options: []
}

const onFormSubmit = (e) => {
    e.preventDefault();

    const optionElement = e.target.elements.option;
    const option = optionElement.value;
    if (option) {
        if (!app.options.includes(option)) {
            app.options.push(option);
            optionElement.value = null;
            render();
        }
    }
}

const onRemoveAll = () => {
    app.options = [];
    render();
};

const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNum];
    alert(option);
}

const render = () => {
    // JSX Javascript XML
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{
                (app.options && app.options.length > 0)
                    ? 'Here are your options:'
                    : 'No options.'
            }</p>
            <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should I do?</button>
            <button onClick={onRemoveAll}>Remove All</button>
            {
                (app.options && app.options.length > 0)
                &&
                <ol>
                    {
                        app.options.map(option => <li key={option}>{option}</li>)
                    }
                </ol>
            }
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option" />
                <button>Add Option</button>
            </form>
        </div>
    );

    ReactDOM.render(template, appRoot);
};

render();

// const appRoot = document.getElementById('appRoot');

// const user = {
//     name: 'Tamer Fouad',
//     age: 35,
//     location: 'Cairo'
// }

// function getLocation(location) {
//     if (location) {
//         return <p>Location: {location}</p>;
//     }
// }

// const template = (
//     <div>
//         <h1>{user.name ? user.name : 'Anonymous'}</h1>
//         {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
//         {getLocation(user.location)}
//     </div>
// );

// ReactDOM.render(template, appRoot);
'use strict';

var appRoot = document.getElementById('app');

var app = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of a computer',
    options: []
};

var onFormSubmit = function onFormSubmit(e) {
    e.preventDefault();

    var optionElement = e.target.elements.option;
    var option = optionElement.value;
    if (option) {
        if (!app.options.includes(option)) {
            app.options.push(option);
            optionElement.value = null;
            render();
        }
    }
};

var onRemoveAll = function onRemoveAll() {
    app.options = [];
    render();
};

var onPickOption = function onPickOption() {};

var render = function render() {
    // JSX Javascript XML
    var template = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            app.title
        ),
        app.subtitle && React.createElement(
            'p',
            null,
            app.subtitle
        ),
        React.createElement(
            'p',
            null,
            app.options && app.options.length > 0 ? 'Here are your options:' : 'No options.'
        ),
        React.createElement(
            'button',
            { onClick: onPickOption },
            'What should I do?'
        ),
        React.createElement(
            'button',
            { onClick: onRemoveAll },
            'Remove All'
        ),
        app.options && app.options.length > 0 && React.createElement(
            'ol',
            null,
            app.options.map(function (option) {
                return React.createElement(
                    'li',
                    { key: option },
                    option
                );
            })
        ),
        React.createElement(
            'form',
            { onSubmit: onFormSubmit },
            React.createElement('input', { type: 'text', name: 'option' }),
            React.createElement(
                'button',
                null,
                'Add Option'
            )
        )
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

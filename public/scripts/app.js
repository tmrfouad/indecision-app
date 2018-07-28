'use strict';

var app = {
    title: 'Visibility Toggle',
    visible: false
};

var onVisiblityToggle = function onVisiblityToggle() {
    app.visible = !app.visible;
    render();
};

var render = function render() {
    var template = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            app.title
        ),
        React.createElement(
            'button',
            { onClick: onVisiblityToggle },
            app.visible ? 'Hide' : 'Show',
            ' details'
        ),
        app.visible && React.createElement(
            'p',
            null,
            'Hey. These are some details you can now see!'
        )
    );
    // <p style={app.visible ? {display: 'block'} : {display: 'none'}}>Hey. These are some details you can now see!</p>

    var appRoot = document.getElementById('app');
    ReactDOM.render(template, appRoot);
};

render();

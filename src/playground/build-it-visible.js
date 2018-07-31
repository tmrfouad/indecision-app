class VisibilityToggle extends React.Component {
    constructor(props) {
        super(props);

        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);

        this.state = {
            title: 'Visibility Toggle',
            visibility: false
        };
    }

    handleToggleVisibility() {
        this.setState(prevState => {
            return {
                visibility: !prevState.visibility
            };
        });
    }

    render() {
        return (
            <div>
                <h1>{this.state.title}</h1>
                <button onClick={this.handleToggleVisibility}>{this.state.visibility ? 'Hide' : 'Show'} details</button>
                {this.state.visibility && <p>Hey. These are some details you can now see!</p>}
            </div>
        );
    }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));

// const app = {
//     title: 'Visibility Toggle',
//     visible: false
// }

// const onVisiblityToggle = () => {
//     app.visible = !app.visible;
//     render();
// }

// const render = () => {
//     const template = (
//         <div>
//             <h1>{app.title}</h1>
//             <button onClick={onVisiblityToggle}>{app.visible ? 'Hide' : 'Show'} details</button>
//             {app.visible && <p>Hey. These are some details you can now see!</p>}
//         </div>
//     )
//     // <p style={app.visible ? {display: 'block'} : {display: 'none'}}>Hey. These are some details you can now see!</p>

//     const appRoot = document.getElementById('app');
//     ReactDOM.render(template, appRoot);
// }

// render();
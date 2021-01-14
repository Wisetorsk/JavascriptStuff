class OutputField extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (<div>
            <h1>{this.props.header}</h1>
            <div>Active people {this.props.enviroment.people.length}</div>
            <div>Active infections {this.props.enviroment.people.filter(i => i.infected).length}</div>
            </div>
        );
    }
}

OutputField.defaultProps = {
    header: 'Infection'
};

function update() {
    ReactDOM.render(<OutputField enviroment={env}/>, document.getElementById("reactContainer"))
}

update();
import React from 'react';
import ReactDOM from 'react-dom';
import InputField from './components/InputField';

class App extends React.Component{
    constructor(props) {
        super(props);
        this.state= {
            displayInputs:false,
            name:'',
            email:'',
            phone:'',
        };
    }
    handleFieldChange = (id , value,isRequired) => {
        if(isRequired && value == '' )
            this.setState({[id]:false});
        else
            this.setState({[id]:value});
    }
    handleClick = ()=>{
        if(this.state.name !== false && this.state.email !== false && this.state.phone !== false )
            this.setState({displayInputs:true});
        else
            alert('There is missing required input !');
    }

    render() {
        return(
            <div>
                <h1> Welcome </h1>
                { !this.state.displayInputs ?
                    <div className="row">
                        <InputField id="name" name={"Name"}  callbackFunction={this.handleFieldChange}  value={this.state['name']} isRequired={true} />
                        <InputField id="email" name={"Email"} callbackFunction={this.handleFieldChange}  value={this.state['email']} isRequired={false} />
                        <InputField id="phone" name={"Phone"}  callbackFunction={this.handleFieldChange}  value={this.state['phone']} isRequired={false} />
                        <div><Button onClick={this.handleClick} >submit</Button></div>
                    </div>:<div><h2>{this.state['name'] + " "+ this.state['email']  +" "+ this.state['phone'] }</h2></div>}
            </div>
        );
    }
}
const Button = ({ onClick }) => (
    <button onClick={onClick} type="button">
        Show Inputs
    </button>
);
ReactDOM.render(
    <App />,
    document.getElementById('root')
);

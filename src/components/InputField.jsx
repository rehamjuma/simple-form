import React,{ Component } from 'react';

class InputField extends Component{
    constructor(props) {
        super(props);
        this.state = {
            text: null,
            blured:false,
        };
    }

    updateTextInput(event){
        const newText = event.target.value;
        this.setState({text:newText});
        if (newText != "" || !this.props.isRequired)
            this.setState({isSet:true});
        this.props.callbackFunction(this.props.id , newText ,  this.props.isRequired);

    }
    componentWillMount(){
        this.props.callbackFunction(this.props.id , '',this.props.isRequired);
    }
    render(){
        const style = {backgroundColor:'white'};
        if(this.state.blured && this.state.text != null) {
            style.backgroundColor = 'green'
        }
        return (
            <>
                <fieldset>
                    <legend>Enter your {this.props.name}:</legend>
                    <input placeholder="" type="text" onChange={this.updateTextInput.bind(this)} onBlur={()=>{this.setState({blured:true})}} style={style}/>
                    {this.props.isRequired == true ? <span> * Required</span> : null}
                </fieldset>
            </>
        )
    }
}

export default InputField;
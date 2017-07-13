import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';
import {Row,Col} from 'react-flexbox-grid';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import {blueGrey100} from 'material-ui/styles/colors';
import { Link } from 'react-router-dom';


const style = {
    paperstyle : {margin: '80px',textAlign : 'center',
                    backgroundColor : blueGrey100},
    raisedstyle : {margin : '12'}
}

class Signup extends React.Component
{
    constructor()
    {
        super();
        this.state = {users : [],firstname : "",lastname : "",username :"",password : "",email : ""};
    }
    handleChange(e)
    {
        var firstname = e.target.value;
        this.setState({firstname : firstname});
    }
    handleChange(e)
    {
        var lastname = e.target.value;
        this.setState({lastname : lastname});
    }
    handleChange(e)
    {
        var username = e.target.value;
        this.setState({username : username});
    }
    handleChange(e)
    {
        var email = e.target.value;
        this.setState({email : email});
    }
    handleChange(e)
    {
        var password = e.target.value;
        this.setState({password : password});
    }
    render()
    {
        return(<MuiThemeProvider>
        <Row around='xs'>
        <Col center='xs' xs = {6} md = {4}>
        <Paper style = {style.paperstyle} zDepth={4}>
       
       <TextField  floatingLabelText="Firstname"  floatingLabelFixed={true} onChange = {this.handleChange.bind(this)}/><br />
       <TextField  floatingLabelText="Lastname" floatingLabelFixed={true} onChange = {this.handleChange.bind(this)}/><br />
       <TextField  floatingLabelText="Username" floatingLabelFixed={true} onChange = {this.handleChange.bind(this)}/><br />
        <TextField  floatingLabelText="Email" floatingLabelFixed={true} onChange = {this.handleChange.bind(this)}/><br />
        <TextField  floatingLabelText="Password" floatingLabelFixed={true} type="password" onChange = {this.handleChange.bind(this)}/><br/>

        <Link to = "/"><RaisedButton label="Register" primary={true} style={style.raisedstyle} /></Link>
        
       </Paper>
        </Col>
        </Row>
        
        </MuiThemeProvider>
        );
    }
}
export default Signup;
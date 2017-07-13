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
class Login extends React.Component
{
    render()
    {
        return(<MuiThemeProvider>
        <Row around='xs'>
        <Col center='xs' xs = {6} md = {4}>
        <Paper style = {style.paperstyle} zDepth={4}>
       
        <TextField  floatingLabelText="Username" floatingLabelFixed={true}/><br />
        <TextField  floatingLabelText="Password" floatingLabelFixed={true} type="password"/><br/>
        <Link to = "/home"><RaisedButton label="Login" primary={true} style={style.raisedstyle} /></Link>
        <Link to = "/signup"><RaisedButton label="Signup" primary={true} style={style.raisedstyle} /></Link>
        
       </Paper>
        </Col>
        </Row>
        
        </MuiThemeProvider>
        );
    }
}
export default Login;
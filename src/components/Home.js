import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import {teal500,teal100,teal50} from 'material-ui/styles/colors';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { Link } from 'react-router-dom';
import {Row,Col} from 'react-flexbox-grid';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';
import $ from 'jquery';
import Search from 'react-material-icons/icons/action/search';
import SearchData from './Search.js';
import AutoComplete from 'material-ui/AutoComplete';


injectTapEventPlugin();

const style = {
    appbarstyle : {textAlign : 'center',backgroundColor : teal500},
    raisedstyle : {margin : '12'},
    dialogstyle : {textAlign : 'center'}
};
const menuProps = {
  desktop: true,
  disableAutoFocus: true,
};
const mov = [];
class Home extends React.Component
{
    constructor()
    {
        super();
   this.state = {
    open: false,drawer : false,moviename : "",title : "", poster : "", date : "",
    cardData : '',suggestion : []

  };
      this.handleToggle = this.handleToggle.bind(this);
      this.handleOpen = this.handleOpen.bind(this);
      this.handleClose = this.handleClose.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

 
 handleOpen = () => {
    
    this.setState({open: true});
    this.setState({drawer:false});
  };
  handleToggle()
  {
      
      this.setState({drawer : !this.state.drawer});
  }
  
   handledisplay(movie)
   {
       
       alert(movie.movietitle);
       
   }


  handleClose()
  {
     
      this.setState({open: false});
    }
/****to fetch data from tmdb api for suggestion ***/   
    handleChange(name) {
       var suggest = [];
        var object = this;
    this.setState ({moviename : name});
    $.ajax({
       type: "GET",
       url: 'https://api.themoviedb.org/3/search/keyword?api_key=360fb236234213ff65f11eac623fb645&query='+name,
       data: "{}",
       contentType: "application/json; charset=utf-8",
       dataType: "json",
       success: function (response) {
                        response.results.map(moviedata =>{
                
                suggest.push(moviedata.name) 
              });
              object.setState({suggestion : suggest});
              
       },
       error: function (response) {
           console.log("error");
       }
   });
}
  
  getMovie()
  {
       this.setState({open: false});
       var moviedatas = '';
       var object = this;
      let movie = this.state.moviename;
      if (movie.length === 0)
      {
          alert("Please enter movie name");
      }
      else
      {
      $.ajax({
          url : 'https://api.themoviedb.org/3/search/movie?api_key=360fb236234213ff65f11eac623fb645&query=' + this.state.moviename,
          type : 'GET',
          data : {},
          success : function(response)
          {
              if(response.total_results == 0)
              {
                  alert("there is no such movie..Please enter correct name")
              }
              else
              {
              console.log(response);
              console.log(response.results[4]);
              moviedatas =response.results.map(moviedata =>{
                return (
                <SearchData movie = {moviedata} handledisplay = {object.handledisplay.bind(object)}/>
                ); 
              });

            object.setState({cardData:moviedatas});   
        }

          },
          error : function(err)
          {
              alert("error");
          }
          
      });
     
      }     
  }
  
  
  
    render()
    {
         const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onClick={this.handleClose}
      />,
    
    ];
    
        return(<MuiThemeProvider>
       <div>
      
        <AppBar style = {style.appbarstyle} title="Movie Ground" onLeftIconButtonTouchTap={this.handleToggle}/>
       <Drawer docked={false} width={200} open={this.state.drawer}
          onRequestChange={(open) => this.setState({open})}>
         
          <MenuItem onClick={this.handleOpen}>Search</MenuItem>
          <MenuItem >Display Favourites</MenuItem>
           <MenuItem >Add New Playlists</MenuItem>
        </Drawer>
         
        <Row center = 'xs' xs = {12} md = {6}>
        
        <Dialog style = {style.dialogstyle}  bodyStyle={{ backgroundColor: teal50 }} titleStyle={{ backgroundColor: teal100 }} actionsContainerStyle = {{backgroundColor : teal50}} 
        title="Search for a movie" actions={actions}  
        modal={false} open={this.state.open} onRequestClose={this.handleClose}>
           <Search/>
           {/*<TextField   ref = "name"    onChange={this.handleChange.bind(this)}/> */}
            <AutoComplete ref="name" hintText="Type moviename" onUpdateInput={this.handleChange} completionThreshold={0}
            dataSource={this.state.suggestion} menuProps={this.menuProps}/>
            <RaisedButton label="Search" secondary={true} onClick = {this.getMovie.bind(this)} style={style.raisedstyle} />
        </Dialog>
    
  </Row>
  {this.state.cardData}
        </div>
        </MuiThemeProvider>);
    }

}

export default Home;





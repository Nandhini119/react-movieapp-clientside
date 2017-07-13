import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Row,Col} from 'react-flexbox-grid';
import {teal50} from 'material-ui/styles/colors';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
var image = require('../image/noimage.jpg');

const style = {
    space : {
        margin : '15'
    },
    cardcolor : {
        backgroundColor : teal50
    }
    
}
class Search extends React.Component
{
  constructor(props) {
  super(props);
  this.state = { shadow: 1 ,poster : ' ' , title : false, action : false, details : false,
  movietitle : this.props.movie.title, poster_path : this.props.movie.poster_path, release_date : this.props.movie.release_date
  };
  this.onMouseOver = this.onMouseOver.bind(this);
  this.onMouseOut = this.onMouseOut.bind(this);
}

onMouseOver ()
{
   this.setState({action : true});
    this.setState({title : true});
    this.setState({ shadow: 3 });
}
onMouseOut()
{
    this.setState({action : false})
    this.setState({title : false});
    this.setState({ shadow: 1 });
    this.setState({details : false});
}
details()
{
    this.setState({details : true});
    
}
favourite()
{
this.props.handledisplay({movietitle : this.state.movietitle, poster_path : this.state.poster_path, release_date : this.state.release_date});
}

    render(){
        /* if(this.props.movie.poster_path == null)
         {
             this.setState({poster : image})
             //alert(this.props.poster_path);'http://image.tmdb.org/t/p/w185'+this.props.movie.poster_path  "https://smoothtouchcosmetics.com/wp-content/uploads/2016/08/No-Image-Available.jpg"
         }
         else
         {
             var img = "http://image.tmdb.org/t/p/w185/"+this.props.movie.poster_path;
             this.setState({poster :img})
         }*/
        
        return(<MuiThemeProvider>
        <div style = {style.space}>
         <Row center = 'xs'>
         <Col xs = {6}>
<Card onMouseOver={this.onMouseOver}
   onMouseOut={this.onMouseOut}
   zDepth={this.state.shadow}>
   
    {this.state.title?<CardHeader style = {style.cardcolor} title={this.props.movie.title} open={this.state.title}/>: ''}
    <CardMedia>
      <img height = {400} src={'http://image.tmdb.org/t/p/w185'+this.props.movie.poster_path} alt="" />
    </CardMedia>
    
   <CardActions style = {style.cardcolor} >
      
      <svg  xmlns="http://www.w3.org/2000/svg" width="30" onClick = {this.details.bind(this)} onMouseOut={this.onMouseOut} height="30" viewBox="0 0 24 24"><path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/></svg>
      <svg xmlns="http://www.w3.org/2000/svg" width="30" onClick = {this.favourite.bind(this)} height="30" viewBox="0 0 24 24"><path d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z"/></svg>
    </CardActions>
    {this.state.details ? <CardText open = {this.state.details} >
    Movie Name : {this.props.movie.title}<br />
    Release Date : {this.props.movie.release_date}<br/>
    Popularity : {this.props.movie.popularity}<br/>
    Overview : {this.props.movie.overview}
    </CardText> : " "}
  {/* {this.state.action? <CardActions style = {style.cardcolor} open = {this.state.action}>
      
      <svg  xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/></svg>
      <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z"/></svg>
    </CardActions> : ' '}*/}
    
  </Card>
  </Col>
  </Row>
        </div>
        </MuiThemeProvider>);
    }
}
export default Search;
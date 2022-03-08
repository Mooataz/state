import * as React from 'react';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


export default class Profile extends React.Component {
state={
    fullname:'MOaataz',
    bio:'bio',
    imgsrc:'https://maphotoportrait.fr/1391-thickbox_default/seance-de-coaching-image-et-photo-de-profil-linkedin-et-cv.jpg',
    profession:'profession',
    timer:0,
}

componentDidMount(){
    setInterval(()=>{this.setState({timer:this.state.timer+1})
},1000)
}
 render(){
    return (
        <center><div>
        <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={this.state.imgsrc}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {this.state.fullname}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        {this.state.profession}
        <br/>
        {this.state.bio}
        </Typography>
      </CardContent>
      <CardActions>
        
        <Button size="small">{this.state.timer}</Button>
      </CardActions>
    </Card>
    
        
        </div>
        </center>
      )
 } 
}

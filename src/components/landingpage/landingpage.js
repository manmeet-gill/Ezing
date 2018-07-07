import React, {Component} from 'react';
import {Message, Button, Image,Card, Grid} from 'semantic-ui-react';
import './landingpage.css';
import Menu from './menu.js';
import impexp from './impexp.jpg';
import study from '../../images/studyabroad.jpg'


class landingpage extends Component{

    divStyle = {
        margin: '40px',
        border: '5px solid',
        width: '400px',
        height: '400px'
    };
    render(){
    return(
        <div>
            <Menu/>
        <div id="outerdiv" style={{animation: "hello 1.5s ease-in-out infinite"}}>

        <Button content='Ezing' primary />
            <br/>
            <br/>
            <div >
            <Grid columns={2} stackable centered>
                <Grid.Column>
                    <Card style={this.divStyle}
                        image={impexp}
                        header='Import Export'
                    />
                </Grid.Column>
                <Grid.Column>
                    <Card style={this.divStyle}
                        image={study}
                        header='Study Overseas '
                    />
                </Grid.Column>
            </Grid>
            </div>
        </div>
        </div>)
    }

}
export default landingpage;
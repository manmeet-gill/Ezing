import React, {Component} from 'react';
import {Message, Button, Image,Card} from 'semantic-ui-react';
import './landingpage.css';
import Menu from './menu.js';
import impexp from './impexp.jpg';
import study from '../../images/studyabroad.jpg'


class landingpage extends Component{


    render(){
    return(
        <div>
            <Menu/>
        <div id="outerdiv" style={{animation: "hello 1.5s ease-in-out infinite"}}>

        <Button content='Ezing' primary />
        </div>
        </div>)
    }

}
export default landingpage;
import React, {Component} from 'react';
import Menu from '../landingpage/menu'
import {List, Card, Grid, Button,Icon, Container,Image,Header, Segment } from 'semantic-ui-react'
import CII from '../../images/CII.jpg'
import UNI from '../../images/UNI.jpg'
import Visa from '../../images/visa.png'
import Bottom from '../landingpage/bottom'
import Carousel from './carousel';
import Quote from './quote'
import Davinder from '../../images/davinderjit.png'
import Balkar from '../../images/balkar.png'
import Gurdeep from '../../images/gurdeep.png'
class homepage extends Component{

    render(){
        return(
            <div>
                <Menu/>
                <Carousel/>

                <Container fluid>
                <Segment textAlign='center'  >
                    <Header as='h2' textAlign='center'>
                        About Us
                    </Header>
                    E-Zing Overseas Educational Consultancy   is working as an Overseas Educational Services. For the past many years, we have been sending hundreds of students every year to various highly reputed Universities/ Colleges in UK, Ireland, USA, Canada, Australia, New Zealand and France. We believe that the number of students who want to study in overseas countries will be increasing every year. As professional educational consultants, we provide services such as Career counseling, Student academic assessment, Organizing awareness seminars, Admissions, Visa guidance, Pre departure orientation and survival tips for living and studying in the host country.
                    <br/>
                    <Button  animated size='small'>
                        <Button.Content visible>Read More</Button.Content>
                        <Button.Content hidden>
                            <Icon name='right arrow' />
                        </Button.Content>
                    </Button>

                        <Grid columns={3} stackable>
                            <Grid.Column >
                                <Header as='h4' textAlign='left'>
                                    CERTIFIED  FROM UNI AGENT
                                </Header>
                            </Grid.Column>
                            <Grid.Column>
                                <Header as='h4' textAlign='left'>
                                    SPECIAL IELTS  CLASSES                                </Header>
                            </Grid.Column>
                            <Grid.Column>
                                <Header as='h4' textAlign='left'>
                                    CERTIFIED FROM CII
                                </Header>
                            </Grid.Column>
                        </Grid>

                </Segment>
                </Container>
                <Container fluid={true}>
                    <Segment textAlign='center' >
                        <Header as='h2' textAlign='center'>
                            OUR EXCLUSIVE SERVICES                     </Header>
                        <text>WHAT MAKES US STAND OUT FROM CROWD
                        </text>
                    </Segment>
                    <Grid centered columns={2} stackable>
                        <Grid.Column >
                            <Card
                                image={CII}
                                header='CONFEDERATION OF INDIAN INDUSTRY'
                                description='The Confederation of Indian Industry (CII) works to create and sustain an environment conducive to the growth of industry in India'
                            />
                        </Grid.Column>
                        <Grid.Column>
                            <Card
                                image={UNI}
                                header='UNI AGENT'
                                description='UniAgents offers educational consultants an opportunity to experience flawless and streamlined office operations.'
                            />
                        </Grid.Column>
                    </Grid>
                </Container>
                <Container fluid={true}>
                    <Segment textAlign='center' >
                        <Header as='h2' textAlign='center'>
                            WE ARE DEALING WITH
                        </Header>
                        <Grid centered={true} columns={2}>
                            <Grid.Column>
                                <Header as='h4' textAlign='left'>
                                    Study Visa
                                </Header>
                                <text>We are the official representatives of several colleges and universities in different countries.
                                    With wide knowledge and experience of the overseas education system, we believe that we are perfectly placed to provide you with exactly the right service and assistance.
                                </text>
                                <List bulleted>
                                    <List.Item>Canada</List.Item>
                                    <List.Item>USA</List.Item>
                                    <List.Item>UK</List.Item>
                                    <List.Item>Australia</List.Item>
                                    <List.Item>New Zealand</List.Item>
                                    <List.Item>Singapore</List.Item>
                                    <List.Item>Ireland</List.Item>
                                </List>
                                <Button>
                                    Learn More
                                </Button>
                            </Grid.Column>
                            <Grid.Column>
                                <Image size='large' src={Visa}/>
                            </Grid.Column>
                        </Grid>
                    </Segment>
                </Container>
                <Container fluid>
                    <Segment inverted>
                        <Header as='h2' textAlign='center'>
                            OUR SERVICES
                        </Header>
                        <Header as='h3' textAlign='center'>
                            We Also Provide Career Counselling And Advise To The Students.
                        </Header>
                        <p>
                            Ezing Overseas Educational Consultancy is working as an Overseas Educational Services.
                        </p>
                        <Button>Read More</Button>
                    </Segment>
                </Container>
                <Container>
                    <Header as='h4' textAlign='center'>
                        STUDENTS' WORDS
                    </Header>
                    <Header as='h6' textAlign='center'>
                        OUR CLIENTS ALWAYS SPEAKS FOR US
                    </Header>
                    <Container>
                        <Segment textAlign='center'>
                           <Grid columns={3} divided stackable>
                               <Grid.Column><Quote name={"Davinderjit Singh"} info={"Amritsar to Hospitality Australia"}  imgpath={Davinder} /></Grid.Column>
                               <Grid.Column><Quote name={"Balkar Singh"} info={"Jammu to Comm. Cookry Australia"}  imgpath={Balkar}/></Grid.Column>
                               <Grid.Column><Quote name={"Gurdeep Singh"} info={"Jammu to Bussines New Zealand"} imgpath={Gurdeep}/></Grid.Column>

                           </Grid>
                        </Segment>
                    </Container>
                </Container>
                <Bottom/>
            </div>
        )
    }
}
export default homepage;
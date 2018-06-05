import React, {Component} from 'react';
import Menu from '../landingpage/menu'
import {List, Card, Grid, Button,Icon, Container,Image,Header, Segment } from 'semantic-ui-react'
import Slider1 from '../../images/ezing_roller_1.PNG'
import Slider2 from '../../images/ezing_roller_2.PNG'
import CII from '../../images/CII.jpg'
import UNI from '../../images/UNI.jpg'
import Visa from '../../images/visa.png'
import Bottom from '../landingpage/bottom'
import 'pure-react-carousel/dist/react-carousel.es.css';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
class homepage extends Component{

    render(){
        return(
            <div>
                <Menu/>
                <CarouselProvider
                    naturalSlideWidth={100}
                    naturalSlideHeight={30}
                    totalSlides={2}
                >
                    <Slider>
                        <Slide index={0}><Image src={Slider1} fluid /></Slide>
                        <Slide index={1}><Image src={Slider2} fluid /></Slide>
                    </Slider>
                    <ButtonBack>Back</ButtonBack>
                    <ButtonNext>Next</ButtonNext>
                </CarouselProvider>

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

                        <Grid columns={3}>
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
                            OUR EXCLUSIVE SERVICES
                        </Header>
                        <text>WHAT MAKES US STAND OUT FROM CROWD
                        </text>
                    </Segment>
                    <Grid centered columns={2}>
                        <Grid.Column>
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

                        </Segment>
                    </Container>
                </Container>
                <Bottom/>
            </div>
        )
    }
}
export default homepage;
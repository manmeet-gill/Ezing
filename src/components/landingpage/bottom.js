import React, { Component } from 'react'
import { Container, Segment, Grid, List, Header } from 'semantic-ui-react'

export default class Menubar extends Component {
    render() {


        return (
            <Container fluid >
                <Segment inverted>
                    <Grid centered={true} columns={3}>
                        <Grid.Column>
                            <Header as='h4' inverted>
                                EZING Overseas
                            </Header>
                            <text fontSize='1'>
                                E-Zing Overseas Educational Consultancy is working as an Overseas Educational Services. For the past many years, we have been sending hundreds of students every year to various highly reputed Universities/ Colleges in UK, Ireland, USA, Canada, Australia, New Zealand and France.
                            </text>
                        </Grid.Column>
                        <Grid.Column>
                            <Header as='h5' inverted>
                                ALSO VISIT ON
                            </Header>
                            <List>
                                <List.Item>
                                    English World
                                </List.Item>
                                <List.Item>
                                    Travel UpDown
                                </List.Item>
                                <List.Item>
                                    English Pillars
                                </List.Item>
                            </List>
                            <Header as='h5' inverted>
                                QUICK LINKS
                            </Header>
                            <List>
                                <List.Item>
                                    Contact
                                </List.Item>
                                <List.Item>
                                    Services
                                </List.Item>
                                <List.Item>
                                    About Us
                                </List.Item>
                            </List>
                        </Grid.Column>
                        <Grid.Column>
                            <Header as='h4' inverted>
                                VISIT OUR OFFICE
                            </Header>
                            <p>
                                Ezing Overseas<br/>
                                6th floor, SCO 27 <br/>
                                B-block, Ranjit Avenue<br/>
                                Amritsar, Punjab, India - 143001
                            </p>
                            <br/>
                            <p>
                                Phone: +91 183-5020599<br/>
                                Mobile: +91 98767-17090<br/>
                                Email: info@ezingoverseas.com
                            </p>

                        </Grid.Column>
                    </Grid>
                </Segment>
            </Container>
        )
    }
}
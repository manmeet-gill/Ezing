import React, { Component } from 'react'
import { Grid,Header,Input, Segment, Button } from 'semantic-ui-react'
import Menu from '../components/landingpage/menu'
import Bottom from '../components/landingpage/bottom'

export default class Menubar extends Component {

    render() {

        return (
            <div>
                <Menu/>
                <Grid columns={2}>
                    <Grid.Column width={10}>
                        <Header as='h3'>
                            GET IN TOUCH
                        </Header>
                        <Header as='h5' color='grey'>
                            Please feel free to contact us any time
                        </Header>
                        <Grid columns={2}>
                            <Grid.Column>
                            <Input placeholder='Your Name(required)'/>
                            </Grid.Column>
                            <Grid.Column>
                                <Input placeholder='Your Email(required)'/>
                            </Grid.Column>
                        </Grid>
                        <br/>
                        <br/>
                        <Input fluid placeholder='Subject'/>
                        <br/>
                        <Input fluid placeholder='Your Message' />
                        <br/>
                        <Button>SUBMIT</Button>
                    </Grid.Column>
                    {/*address*/}
                    <Grid.Column width={6}>
                        <Segment padded raised={10}>
                            <Header as='h4'>
                                VISIT OUR OFFICE
                            </Header>
                            <Header  as='h5' color='grey'>
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
                            </Header>
                            <Header as='h4'>
                                WORKING HOURS
                            </Header>
                            <Header  as='h5' color='grey'>
                                <b>Monday – Friday </b>– 9am to 8pm<br/>
                                <b>Saturday</b> – 9am to 5pm<br/>
                                <b>Sunday</b> – Closed
                            </Header>
                        </Segment>
                    </Grid.Column>
                </Grid>
                <Bottom/>
            </div>
        )
    }
}
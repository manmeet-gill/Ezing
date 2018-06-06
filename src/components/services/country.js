import React, { Component } from 'react'
import { Container, Segment,Grid, Card, List,Image, Header, Icon } from 'semantic-ui-react'
export default class Menubar extends Component {
    render() {


        return (
            <Segment >
            <Grid columns={2} stackable textAlign='left'>
                <Grid.Column>
                    <Image src ={this.props.pic}/>
                </Grid.Column>
                <Grid.Column>
                    <Header as='h3'>
                        Study in {this.props.name}
                    </Header>
                    <p>
                        {this.props.p1}
                    </p>
                    <p>
                        {this.props.p2}
                    </p>
                    <Header as='h4' color='grey'>Why Study in {this.props.name}</Header>
                    <Header as='h4' color={'grey'}>
                        <ul>
                            {this.props.lists.points[this.props.index].map((point) => <li>{point}</li>)}
                        </ul>
                    </Header>
                </Grid.Column>
            </Grid>
            </Segment>

        )
    }
}
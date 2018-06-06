import React, { Component } from 'react'
import { Container, Segment, Card, List,Image, Header, Icon } from 'semantic-ui-react'
export default class Menubar extends Component {
    render() {


        return (
            <Card.Content>
                <Card.Description>""</Card.Description>
                <Image src={this.props.imgpath} size='small' wrapped />
                <Card.Header>{this.props.name}</Card.Header>
                <Card.Meta>{this.props.info}</Card.Meta>
            </Card.Content>
        )
    }
}
import 'pure-react-carousel/dist/react-carousel.es.css';
import {List, Card, Grid, Button,Icon, Container,Image,Header, Segment } from 'semantic-ui-react'
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import React, { Component } from 'react'
import Slider1 from '../../images/ezing_roller_1.PNG'
import Slider2 from '../../images/ezing_roller_2.PNG'
export default class Menubar extends Component {
    state = {}

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {
        const { activeItem } = this.state

        return (
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
        )
    }
}
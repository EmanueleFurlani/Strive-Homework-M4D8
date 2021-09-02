import React, { Component } from 'react'
import {Button} from 'react-bootstrap'

export default class CarouselButton extends Component {
	render() {
		return(
			<>
				<Button className="carousel-control-prev" type="button" data-bs-target="#trending-now" data-bs-slide="prev">
					<span className="carousel-control-prev-icon" aria-hidden="true"></span>
					<span className="visually-hidden">Previous</span>
				</Button>
				<Button className="carousel-control-next " type="button" data-bs-target="#trending-now" data-bs-slide="next">
					<span className="carousel-control-next-icon" aria-hidden="true"></span>
					<span className="visually-hidden">Next</span>
				</Button>
			</>
		)
	}	
}
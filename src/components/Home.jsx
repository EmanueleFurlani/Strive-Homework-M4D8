
import { Component } from 'react'
import React from 'react'
import MovieSection from './MovieSection'
import Loader from './Loader'
import Error from './Error'


export default class Home extends Component {
	state = {
		isLoading: true,
		isError: false,

		sections: [{
			title: "Mission Impossible",
			query: "mission",
			movies: []
		},{
			title: "Love & Romance",
			query: "love",
			movies: []
		},{
			title: "Robots",
			query: "robot",
			movies: []
		}]
	}
	
	componentDidMount = async () => {
		try {
			let response = await fetch(`http://www.omdbapi.com/?apikey=3552ae54&s=${this.state.sections[0].query}`)
			let responseTwo = await fetch(`http://www.omdbapi.com/?apikey=3552ae54&s=${this.state.sections[1].query}`)
			let responseThree = await fetch(`http://www.omdbapi.com/?apikey=3552ae54&s=${this.state.sections[2].query}`)
			let data = await Promise.all([response, responseTwo, responseThree]).then(responses => {
				return Promise.all(responses.map(r => r.json()))
			})
	
			
			for (let section in this.state.sections){
				var movieSection = {...this.state.sections}
				movieSection[section].movies = data[section]
			}
			this.setState({
				isLoading: false,
				sections: movieSection
			})
			
		} catch (error) {
			console.log(error)
			this.setState({
				isError: true,
				isLoading: false
			})
			
		}
			
	}
	
	render() {
	
		if (this.state.isLoading !== true && !this.state.isError){
			return (
				<>
			 
					<MovieSection 
						sectionTitle={this.state.sections[0].title} 
						moviesFetch={this.state.sections[0].movies}
                    
					/>
                  
					<MovieSection 
						sectionTitle={this.state.sections[1].title} 
						moviesFetch={this.state.sections[1].movies}
					/>
					<MovieSection 
						sectionTitle={this.state.sections[2].title} 
						moviesFetch={this.state.sections[2].movies}
					/>
				</>
			)
		} else {
			return (
				<>
				{this.state.isError?
				<Error />:<Loader />
				 }
				</>
			)
		}
	}
}


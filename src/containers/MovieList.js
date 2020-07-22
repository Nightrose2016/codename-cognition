import React, { Component } from 'react'
import MovieItem from '../components/items/MovieItem'
import { connect } from 'react-redux'
import { fetchMovies } from '../actions/moviesActions'

class MovieList extends Component {

    componentDidMount(){
        this.props.fetchMovies()
    }

    render() {
        const movies = this.props.movies.map(( movie, a) => <MovieItem key={a} movie={ movie } />)
        return (
            <div>
                <h3 className="earwig">Movies</h3>
                <ul className="movie-collection">
                    { movies }
                </ul>
            </div>
            )
        }
}
  
const mapStateToProps = state => {
    return {
        movies: state.movies
    }
}
  
  
  
export default connect(mapStateToProps, {fetchMovies})(MovieList)
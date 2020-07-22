import React from 'react'
import { connect } from 'react-redux'

const MovieItem = ({ movie }) => {
    return (
        <dl className="movie-collection">
            <dt>Movie title: { movie.name}</dt>
            <dd>Boosted stat: { movie.effect }</dd>
            <dd>Screening: { movie.screening }</dd>
            <dd>Location: { movie.location } </dd>
            <dd>Special event: { movie.specialevent } </dd>
        </dl>
    );
}

export default connect(null)(MovieItem)
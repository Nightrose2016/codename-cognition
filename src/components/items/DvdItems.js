import React from 'react'
import { connect } from 'react-redux'

const DvdItem = ({ dvd }) => {
    return (
        <dl className="dvd-collection">
            <dt>Dvd title: { dvd.name}</dt>
            <dd>Boosted stat: { dvd.boostedstat }</dd>
            <dd>Day available: { dvd.availabledate }</dd>
            <dd>Number of watches: { dvd.episodes } </dd>
        </dl>
    );
}

export default connect(null)(DvdItem)
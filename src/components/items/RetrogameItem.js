import React from 'react'
import { connect } from 'react-redux'

const RetrogameItem = ({ retrogame }) => {
    return (
        <dl className="retrogame-collection">
            <dt>Game title: { retrogame.name}</dt>
            <dd>Boosted stat { retrogame.boostedstat }</dd>
            <dd>Day available: { retrogame.availabledate }</dd>
            <dd>playtime { retrogame.playtime } </dd>
            <dd>where to buy { retrogame.location } </dd>
            <dd>Reward for completing {retrogame.reward } </dd>
        </dl>
    );
}

export default connect(null)(RetrogameItem)
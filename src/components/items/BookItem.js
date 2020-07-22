import React from 'react'
import { connect } from 'react-redux'

const BookItem = ({ book }) => {
    return (
        <dl className="book-collection">
            <dt>Book title: { book.name}</dt>
            <dd>Boosted stat: { book.boostedstat }</dd>
            <dd>Day available: { book.availabledate }</dd>
            <dd>chapters: { book.chapters } </dd>
            <dd>where to buy/borrow: { book.location } </dd>
        </dl>
    );
}

export default connect(null)(BookItem)
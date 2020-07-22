import React, { Component } from 'react'
import BookItem from '../components/items/BookItem'
import { connect } from 'react-redux'
import { fetchBooks } from '../actions/booksActions'

class BookList extends Component {

    componentDidMount(){
        this.props.fetchBooks()
    }

    render() {
        const books = this.props.books.map(( book, a) => <BookItem key={a} book={ book } />)
        return (
            <div>
                <h3 className="earwig">Books</h3>
                <ul className="book-collection">
                    { books }
                </ul>
            </div>
            )
        }
}
  
const mapStateToProps = state => {
    return {
        books: state.books
    }
}
  
  
  
export default connect(mapStateToProps, {fetchBooks})(BookList)
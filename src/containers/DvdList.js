import React, { Component } from 'react'
import DvdItem from '../components/items/DvdItems'
import { connect } from 'react-redux'
import { fetchDvds } from '../actions/dvdActions'

class DvdList extends Component {

    componentDidMount(){
        this.props.fetchDvds()
    }

    render() {
        const dvds = this.props.dvds.map(( dvd, a) => <DvdItem key={a} dvd={ dvd } />)
        return (
            <div>
                <h3 className="earwig">Dvds</h3>
                <ul className="dvd-collection">
                    { dvds }
                </ul>
            </div>
            )
        }
}
  
const mapStateToProps = state => {
    return {
        dvds: state.dvds
    }
}
  
  
  
export default connect(mapStateToProps, {fetchDvds})(DvdList)
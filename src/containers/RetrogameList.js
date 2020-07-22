import React, { Component } from 'react'
import RetrogameItem from '../components/items/RetrogameItem'
import { connect } from 'react-redux'
import { fetchRetrogames } from '../actions/retrogamesActions'

class RetrogameList extends Component {

    componentDidMount(){
        this.props.fetchRetrogames()
    }

    render() {
        const retrogames = this.props.retrogames.map((retrogame, b) => <RetrogameItem key={b} retrogame={ retrogame }/>)
        
        return (
            <div>
                <h3 className="earwig">RetRo gAmes</h3>
                <ul className="retrogame-collection">
                    { retrogames }
                </ul>
            </div>
        )
    }
}
  
const mapStateToProps = state => {
    return {
        retrogames: state.retrogames
    }
}
  
  
  
export default connect(mapStateToProps, {fetchRetrogames})(RetrogameList)
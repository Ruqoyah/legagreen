import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getCardDataAction } from '../actions/carDataAction';
import { Grid } from 'semantic-ui-react';
import SingleCard from './modules/SingleCard';
import SearchInput from './modules/SearchInput';
import Notification from './modules/Notification';

import '../styles/app.scss';

/**
 * @class Dashboard
 *
 * @classdesc Dashboard component
 *
 */
class Dashboard extends Component {
  /**
   * constructor - contains the constructor
   *
   * @param  {object} props the properties of the class component
   *
   * @return {void} no return or void
   *
   */
  constructor(props) {
    super(props);
    this.handleSearch = this.handleSearch.bind(this);
  }

  /**
   * @description - gets card data
   *
   * @return {void} no return or void
   */
  componentDidMount() {
    this.props.actions.getCardDataAction()
  }

  handleSearch(event) {
    console.log(event.target.value, 'event')
    this.props.actions.getCardDataAction(event.target.value)
  }

  /**
   * @description render - renders the class component
   *
   * @return {object} returns an object
   */
  render() {
    const { cardData } = this.props;

    return (
      <div className="main-wrapper">
        <Grid stackable columns={2}>

          <Grid.Row>
            <Grid.Column>
              <div className="title">Dashboard</div>
            </Grid.Column>

            <Grid.Column textAlign={'right'}>
              <SearchInput
                handleSearch={this.handleSearch}
              />
              <Notification />
            </Grid.Column>
          </Grid.Row>

        </Grid>
        <Grid stackable columns={3}>
          <Grid.Row>
            {
              cardData && cardData.length < 1 ?
                <div className="no-data">No Data Found </div> :
                cardData && cardData.map(data => (
                  <Grid.Column key={data.id && data.id}>
                    <SingleCard
                      name={data.name && data.name}
                      type={data.type && data.type}
                      description={data.description && data.description}
                      avatar={data.owner && data.owner.avatar && data.owner.avatar}
                      profileName={data.owner && data.owner.firstName && data.owner.firstName}
                    />
                  </Grid.Column>
                ))
            }
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}


/**
 * @description mapStateToProps - maps state value to props
 *
 * @param  {object} state the store state
 *
 * @return {Object} returns state object
 *
 */
function mapStateToProps(state) {
  return {
    cardData: state.card.cardData
  };
}


/**
* @description mapDispatchToProps - maps dispatch to props value
*
* @param  {Function} dispatch dispatchs function
*
* @return {Object} returns an Object
*
*/
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({
      getCardDataAction
    }, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);

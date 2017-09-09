import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

const SelectedItem = ({item})=>{
  if (item.id)
  return (
    <span>
      <span>Selected: {item.id} - {item.name}</span>
    </span>
  )
  else
  return (<span>None selected!!</span>);
}

SelectedItem.propTypes = {
  item: PropTypes.object.isRequired
};

const mapStateToProps = (state, ownProps) =>{
  return {
    item: state.todo.get('selectedItem')
  }
};

export default connect(mapStateToProps, null)(SelectedItem);

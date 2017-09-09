import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {deleteItem, selectItem} from '../../redux/actions/todo';
import SelectedItem from '../selectedItem';
import {lightBlack} from 'material-ui/styles/colors';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import {List, ListItem, Subheader, Divider, MenuItem, IconMenu, IconButton, CardText, LinearProgress} from 'material-ui';

const iconButtonElement = (
  <IconButton
    touch={true}
    tooltip="more"
    tooltipPosition="bottom-left"
  >
    <MoreVertIcon color={lightBlack} />
  </IconButton>
);

const rightIconMenu = (item, onSelect, onDelete) => (
  <IconMenu iconButtonElement={iconButtonElement}>
    <MenuItem onClick={() => { onSelect(item) }}>Select</MenuItem>
    <MenuItem onClick={() => { onDelete(item.id) }}>Delete</MenuItem>
  </IconMenu>
);

class ListItems extends Component {
  render() {
    const { items, onSelect, onDelete } = this.props;
    if (items.length===0)
      return (<CardText><LinearProgress mode="indeterminate" /></CardText>);
    else
      return (
        <div>
          <List>
            {items.map((item, i) => {
              return (
                <div key={i}>
                  <ListItem
                    rightIconButton={rightIconMenu(item, onSelect, onDelete)}
                    primaryText={[item.id, item.name + ' '].join(' - ')}
                  />
                  <Divider />
                </div>
              )
            })}
            <Subheader>
              <SelectedItem />
            </Subheader>
          </List>
        </div>
      );
  }
}

ListItems.propTypes = {
  items: PropTypes.array.isRequired
};

const mapStateToProps = (state, ownProps) =>{
  return {
    items: state.todo.get('items')
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  onDelete: (id) => dispatch(deleteItem(id)),
  onSelect: (item) => dispatch(selectItem(item))
});

export default connect(mapStateToProps,mapDispatchToProps)(ListItems);

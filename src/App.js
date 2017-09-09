import React from 'react';
import {Provider} from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Card, CardText} from 'material-ui/Card';
import NavBar from './components/navbar';
import AddItem from './components/addItem';
import ListItems from './components/listItems';

const styles = {
  container: {
    textAlign: 'left',
    paddingTop: 50,
    paddingBottom: 50,
    width: 500,
    maxWidth: '100%',
    margin: '0 auto'
  },
};

const App = ({store}) => {
  return (
    <Provider store={store}>
      <MuiThemeProvider>
        <section style={styles.container}>
          <NavBar />
          <Card>
            <CardText>
              <AddItem />
            </CardText>
            <ListItems />
          </Card>
        </section>
      </MuiThemeProvider>
    </Provider>
  )
}

export default App;

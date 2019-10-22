import React from 'react';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { connect } from '@music/mrx-react';
import logo from './logo.svg';

import './App.css';

function App(props) {
  const { list } = props;
  console.log(props)
  const [text, setText] = useState('');
  function onAdd() {
    props.addTodo()
  }
  function handleInput(e) {
    console.log(e.target.value)
  }
  return (
    <div className="App">
      <div>
        <input type="text" onChange={handleInput}/>
        <button>{ text }</button>
      </div>
      <ul>
        {
          list.map((item) => {
            return (
              <li key={ item.id }>{ item.title }</li>
            )
          })
        }
      </ul>
    </div>
  );
}

App.propTypes = {
  list: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    id: PropTypes.number
}))
}

function mapStateToProps(store) {
  return {
    list: store.select(list)
  }
}

function mapDispatchToProps(store) {
  return {
    addTodo: (text) => store.dispatch('addTodo', text)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

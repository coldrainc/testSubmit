import React from 'react';
import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { connect } from '@music/mrx-react';

import './App.css';

function App(props) {
  const { list } = props;
  const [text, setText] = useState('');
  useEffect(() => {
    document.title = text
  }, [text])
  function onAdd() {
    props.addTodo(text)
  }
  function handleInput(e) {
    let value = e.target.value;
    setText((preValue) => {
      return value;
    })
  }
  const test = function () {
    console.log('test');
  }
  return (
    <div className="App">
      <div>
        <input type="text" onChange={handleInput}/>
        <button onClick={ onAdd }>onAdd</button>
      </div>
      <ul>
        {
          list.map((item) => {
            return (
              <li key={ item.id } onClick={test}>{ item.title }</li>
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
    list: store.select('list')
  }
}

function mapDispatchToProps(store) {
  return {
    addTodo: (text) => store.dispatch('addTodo', text)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

import React from 'react';

import './App.css';
import {SuperButton} from './components/SuperButton';
import SuperTodolist from './components/SuperTodolist';

function App() {

    const tasks = [
        {id: 1, title: 'HTML&CSS', isDone: true},
        {id: 2, title: 'JS', isDone: true},
        {id: 3, title: 'REACT', isDone: false},
    ]
  return (
    <div className="App">
        <SuperTodolist tasks={tasks}>{'I am a child'}</SuperTodolist>
        <SuperTodolist tasks={tasks}>
            <button>X</button>
            <button>X</button>
            <button>X</button>
            <input/>
            <SuperButton callBack={()=>{}} color={'red'}>Red SuperButton</SuperButton>
        </SuperTodolist>
        <SuperTodolist tasks={tasks}>
            <SuperButton callBack={()=>{}} color={'red'}>Red SuperButton</SuperButton>
            <SuperButton callBack={()=>{}} color={'secondary'}>Red SuperButton</SuperButton>
            <SuperButton callBack={()=>{}} disabled>Red SuperButton</SuperButton>
            <span>Lorem ipsum dolor.</span>
            <span>Lorem ipsum dolor.</span>
            <span>Lorem ipsum dolor.</span>
            <button>X</button>
            <button>X</button>
            <button>X</button>
            <input/>
            <SuperButton callBack={()=>{}} color={'red'}>Red SuperButton</SuperButton>
        </SuperTodolist>
      {/*<SuperButton callBack={() => {}} color={'pink'}/>*/}
      {/*<SuperButton callBack={() => {}} color={'blue'}>{'My name is Button'}</SuperButton>*/}

        <SuperButton callBack={()=>{}} color={'red'}>Red SuperButton</SuperButton>
        <SuperButton callBack={()=>{}} color={'secondary'}>Red SuperButton</SuperButton>
        <SuperButton callBack={()=>{}} disabled>Red SuperButton</SuperButton>
    </div>
  );
}

export default App;

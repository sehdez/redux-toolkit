import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import App from './App'
import './index.css'
import { PokemonApp } from './PokemonApp'

import { store } from './store/store'
import { Todos } from './Todos';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
        {/* <App /> */}
        {/* <PokemonApp/> */}
        <Todos />
    </Provider>
  </React.StrictMode>
)

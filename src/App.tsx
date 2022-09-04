import { useDispatch, useSelector } from 'react-redux'

import logo from './logo.svg'
import './App.css'
import { RootState } from './store/store'
import { decrement, increment, incrementByAmount } from './store/slices/counter/counterSlice'

function App() {

    const { counter } = useSelector((state: RootState) => state.counter)
    const dispatch = useDispatch()


    return (
        <div className="App">
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>{ counter }</p>
            <p>
            <button type="button" onClick={() => dispatch(decrement()) }>
                -1
            </button>
            <button type="button" onClick={() => dispatch(increment()) }>
                +1
            </button>
            <button type="button" onClick={() => dispatch( incrementByAmount(10)) }>
                +10
            </button>
            </p>
        </header>
        </div>
    )
}

export default App

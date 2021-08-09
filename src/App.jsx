// importacion 
import React from 'react'
import Result from './components/Result'
import MathOperations from './components/MathOperations'
import Functions from './components/Functions'
import Numbers from './components/Numbers'



import './App.css'

const App = () => {
    console.log("Renderización de App")
    return (
    <main className='react-calculator'>
        <Result value={"0"}/>
        <Numbers onClickNumber={number => console.log('Click en number', number)}/>
        <Functions
            onContentClear={clear => console.log('Clear:', clear) }
            onDelete={delet => console.log('Delete:', delet) }
        />
        <MathOperations 
            onClickOperation={operation => console.log('Operation:', operation) }
            onClickEqual={equal => console.log('Equal:', equal) }
        />
    </main>)
}

export default App

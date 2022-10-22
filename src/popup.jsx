import React from 'react'
import { render } from 'react-dom'

function Popup() {
    return (
        <div>
            <h1>Hello guyz !</h1>
            <p>This is simply a popup using webPack here.</p>
        </div>
    )
}

render(<Popup/>, document.getElementById('react-target'))
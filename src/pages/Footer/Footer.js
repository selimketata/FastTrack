import React from 'react'
import { useNavigate } from 'react-router-dom'

function Footer() {
    let navigate = useNavigate()

    return (
        <div>
            Footer
            <button onClick={() => { navigate('contact/') }}>Contact</button>
        </div>

    );
}

export default Footer;



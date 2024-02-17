import React from 'react';
import './admin.css';
import { Form } from 'react-router-dom';

function App() {
    return (
        <>
            <div className='admin_conn'>
                <h1>Adminisztráció</h1>
                <p>Emberek hozzáadása külböző kijelölt posztokra.</p>
                <form action="">
                        <select name="pozicio" id="pozicio">
                            <option value="1">Adminisztrátor</option>
                            <option value="2">Felhasználó</option>
                            <option value="3">Vendég</option>
                        </select>
                        
                        <select name='szemely' id='szemely'>
                            <option value="1">Példa1</option>
                            <option value="2">Példa2</option>
                            <option value="3">Példa3</option>
                        </select><br/>
                        <button type="submit">Hozzárendelés</button>
                </form>
            </div>
        </>
    );
}

export default App;
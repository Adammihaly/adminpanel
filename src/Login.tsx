import React from 'react';
import './login.css';

function Login() {
    return(
        <div className='login_conn'>
            <div className='login_form'>
                <i className="bi bi-person-video2"></i>
                <h1>Bejelentkezés</h1>
                <form action="" method="">
                    <label>Felhasználónév vagy Email cím</label><br/>
                    <input type="text" name="felhasznalonev" placeholder="Felhasználónév vagy Email cím" /><br/>	
                    <label>Jelszó</label><br/>
                    <input type="password" name="jelszo" placeholder="Jelszó" /><br/>
                    <button>Bejelentkezés!</button>
                </form>
            </div>
        </div>
    );
}

export default Login
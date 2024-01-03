import React from 'react';
import './auth.css';
import './login.css';
import QrCode from './assets/img/testqr.jpg';

function Auth()
{
    return (
        <div  className='login_conn'>
            <div className='login_form'>
                <h1>Két faktoros hitelesítés</h1>
                <p>Kedves csapattag! Az Admin felület használatához köteles vagy beállítani a két faktoros hitelesítést. Töltsd le a telefonodra az árűházból a Google Auth nevű aplikációt. Ezt követően olvasd le a a QR kódot. A lent található mezőbe írd be a kapott kódot.</p>
                <img src={QrCode} alt='QR Kod' className='QRCode'/>
                <form>
                    <input type='number' placeholder='Kapott hitelesítő kód' />
                    <button>Hitelesítés</button>
                </form>
            </div>
        </div>
    );
}

export default Auth
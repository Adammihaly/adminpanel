import React from "react";
import './home.css';

function Home()
{
    return(
        <>
          <div className="home_conn">
            <h1>Admin Panel</h1> 
            <p>Kedves csapat! Meg szeretnénk kérni titeket, hogy az Adminpanelt annak rendeltetése szerint használjátok. Minden számotokra elérhető funkció logolva van, így mindent tudunk, hogy ki és milyen műveletett hajtott végre. A funkciók folyton bővülnek és egyes jogosultságokkal teljes kontrol is elérhető. </p>
              <div className="stats_grid">
                <div className="stat_box">
                  <h2>Regisztrációk</h2>
                  <h3>2352</h3>
                </div>
                <div className="stat_box">
                  <h2>Posztok</h2>
                  <h3>1574</h3>
                </div>
                <div className="stat_box">
                  <h2>Commentek</h2>
                  <h3>958</h3>
                </div>
              </div>
           </div>  
        </>
    );
}

export default Home;
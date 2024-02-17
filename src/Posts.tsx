import React, { useState } from "react";
import Post_item from './Post_item.tsx'
import './posts.css';

function Post()
{

    const [selectedOption, setSelectedOption] = useState('');
    const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => { 
        setSelectedOption(e.target.value);
    }

    const [selectedOptionDel, setSelectedOptionDel] = useState('');
    const handleSelectChangeDel = (e: React.ChangeEvent<HTMLSelectElement>) => { 
        setSelectedOptionDel(e.target.value);
    }

    const [showDiv, setShowDiv] = useState<boolean>(false);

    const megseButtonClick = () => {
        setShowDiv(false);
    };

    const [showDiv2, setShowDiv2] = useState<boolean>(false);

    const megseButtonClick2 = () => {
        setShowDiv2(false);
    };

    return(
        <>
            <div className="posts_conn">

                <h1>Posztok</h1>

                <div className="posts_grid">
                    <Post_item showDiv={showDiv} setShowDiv={setShowDiv} showDiv2={showDiv2} setShowDiv2={setShowDiv2} />
                    <Post_item showDiv={showDiv} setShowDiv={setShowDiv} showDiv2={showDiv2} setShowDiv2={setShowDiv2} />
                    <Post_item showDiv={showDiv} setShowDiv={setShowDiv} showDiv2={showDiv2} setShowDiv2={setShowDiv2} />
                    <Post_item showDiv={showDiv} setShowDiv={setShowDiv} showDiv2={showDiv2} setShowDiv2={setShowDiv2} />
                    <Post_item showDiv={showDiv} setShowDiv={setShowDiv} showDiv2={showDiv2} setShowDiv2={setShowDiv2} />
                </div>


                <div className="wrapper" style={{  display: showDiv ? 'flex' : 'none' } }>
                    <div className="popupdel">
                        <h2>Indokold meg a törlést</h2>
                        <form>
                        <select name="alapindok" onChange={handleSelectChangeDel}>
                                <option value="" selected disabled>Válassz indokot</option>
                                <option value="A poszt hírdetést tartalmaz">A poszt hírdetést tartalmaz</option>
                                <option value="A poszt szidást vagy káromlást tartalmaz">A poszt szidást vagy káromlást tartalmaz</option>
                                <option value="A poszt nem megfelelő tartalmat tartalmaz">A poszt nem megfelelő tartalmat tartalmaz</option>
                                <option value="A poszt spamet tartalmaz">A poszt spamet tartalmaz</option>
                                <option value="A poszt nem megfelelő kategóriába lett feltöltve">A poszt nem megfelelő kategóriába lett feltöltve</option>
                                <option value="Egyéb">Egyéb</option>
                            </select>
                            {selectedOptionDel === 'Egyéb' && <input type="text" name="egyebindok" placeholder="Indok" />}<br />
                            <button>Végleges törlés</button><br />
                        </form> 
                        <button onClick={megseButtonClick}>Mégse</button>
                    </div>
                </div>
                <div className="wrapper" style={{  display: showDiv2 ? 'flex' : 'none' } }>
                    <div className="popupdel">
                        <h2>Indokold meg a felfüggesztést</h2>
                        <form>
                        <select name="alapindok" onChange={handleSelectChange}>
                                <option value="" selected disabled>Válassz indokot</option>
                                <option value="A poszt hírdetést tartalmaz">A poszt hírdetést tartalmaz</option>
                                <option value="A poszt szidást vagy káromlást tartalmaz">A poszt szidást vagy káromlást tartalmaz</option>
                                <option value="A poszt nem megfelelő tartalmat tartalmaz">A poszt nem megfelelő tartalmat tartalmaz</option>
                                <option value="A poszt spamet tartalmaz">A poszt spamet tartalmaz</option>
                                <option value="A poszt nem megfelelő kategóriába lett feltöltve">A poszt nem megfelelő kategóriába lett feltöltve</option>
                                <option value="Egyéb">Egyéb</option>
                            </select>
                            {selectedOption === 'Egyéb' && <input type="text" name="egyebindok" placeholder="Indok" />}<br />
                            <button>Felfüggesztés</button><br />
                        </form> 
                        <button onClick={megseButtonClick2}>Mégse</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Post;
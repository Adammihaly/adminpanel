import React, { useState } from "react";
import Post_item from './Post_item.tsx'
import './posts.css';

function Post()
{

    const [showDiv, setShowDiv] = useState<boolean>(false);

    const megseButtonClick = () => {
        setShowDiv(false);
    };

    return(
        <>
            <div className="posts_conn">
                <h1>Posztok</h1>
                <div className="posts_grid">
                    <Post_item showDiv={showDiv} setShowDiv={setShowDiv} />
                </div>
                <div className="wrapper" style={{  display: showDiv ? 'flex' : 'none' } }>
                    <div className="popupdel">
                        <h2>Indokold meg a törlést</h2>
                        <form>
                            <input type="text" name="indok" placeholder="Indok" /><br />
                            <button>Végleges törlés</button><br />
                        </form> 
                        <button onClick={megseButtonClick}>Mégse</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Post;
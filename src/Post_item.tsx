import { useState } from "react";

interface PotsItemProps {
    showDiv: boolean;
    setShowDiv: React.Dispatch<React.SetStateAction<boolean>>;
}

function Pots_item({ showDiv, setShowDiv }: PotsItemProps)
{

    const showButtonClick = () => {
        setShowDiv(true);
    };

    return(
        <>
            <div className="post">
                <div className="post_data">
                    <h2>58472</h2>
                    <h3>Minecraft</h3>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur odit error illo enim ducimus magnam alias cum fugit, iste repellat, dolore, culpa veritatis ipsum animi tempora repudiandae. Quidem, molestias quasi!</p>
                    <h4>2024.01.22</h4>
                </div>
                <div className="post_act">
                    <button onClick={showButtonClick}>Törlés</button> <br />
                    <button>Felfüggesztés</button> 
                </div>
            </div>
        </>
    );
}

export default Pots_item;
import { useState } from "react";

interface PotsItemProps {
    showDiv: boolean;
    setShowDiv: React.Dispatch<React.SetStateAction<boolean>>;
    showDiv2: boolean;
    setShowDiv2: React.Dispatch<React.SetStateAction<boolean>>;
}

function Pots_item({ showDiv, setShowDiv, showDiv2, setShowDiv2 }: PotsItemProps)
{

    const showButtonClick = () => {
        setShowDiv(true);
    };

    const showButtonClick2 = () => {
        setShowDiv2(true);
    };

    return(
        <>
            <div className="post">
                <div className="post_data">
                    <h2>58472</h2>
                    <h5>A poszt törölve van</h5>
                    <h6>A poszt fel van függesztve</h6>
                    <h3>Minecraft</h3>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur odit error illo enim ducimus magnam alias cum fugit, iste repellat, dolore, culpa veritatis ipsum animi tempora repudiandae. Quidem, molestias quasi!</p>
                    <h4>2024.01.22</h4>
                </div>
                <div className="post_act">
                    <button onClick={showButtonClick}>Törlés</button> <br />
                    <button onClick={showButtonClick2}>Felfüggesztés</button> 
                </div>
            </div>
        </>
    );
}

export default Pots_item;
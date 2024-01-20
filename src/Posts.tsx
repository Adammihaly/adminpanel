import React from "react";
import './posts.css';

function Post()
{
    return(
        <>
            <div className="posts_conn">
                <h1>Posztok</h1>
                <div className="posts_grid">
                    <div className="post">
                        <div className="post_data">
                            <h2>58472</h2>
                            <h3>Minecraft</h3>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur odit error illo enim ducimus magnam alias cum fugit, iste repellat, dolore, culpa veritatis ipsum animi tempora repudiandae. Quidem, molestias quasi!</p>
                            <h4>2024.01.22</h4>
                        </div>
                        <div className="post_act">
                            
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Post;
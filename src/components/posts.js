import React, { useContext } from "react";
import { ApiContext } from "../context/ApiContext";
import {Circular} from "styled-loaders-react";
import Post from "./Post";

function Posts(){

    const {state, loading} = useContext(ApiContext);
    let content = null;

    if(loading){
        content = <div>
            <Circular color = "black" size="50px"/>
        </div>
    }else{
        content=(
            <div>
                {state.map(result=>
                    <Post key = {result.id} value={result} />
                )}
            </div>
        )
    }

    return (
        <div>
            {content}
        </div>
    )
}

export default Posts;
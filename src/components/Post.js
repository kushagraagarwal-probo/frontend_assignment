import React from "react"

function Post({value}){
    return(
        <div className="bg-white mb-10 shadow p-10">
            <h1 className="text-2xl font-medium">{value.title}</h1>
            <p className="mt-5">{value.body}</p>
        </div>
    );
}

export default Post;
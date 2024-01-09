import React from "react";
import Navbar from "./components/Navbar";
import { ApiContextProvider } from "./context/ApiContext";
import Posts from "./components/posts";

function App(){
    return (
        <ApiContextProvider>
            <div className="w-3/5 mx-auto">
                <Navbar />
                <Posts />
            </div>
        </ApiContextProvider>
    );
}

export default App;
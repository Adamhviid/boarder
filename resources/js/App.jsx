import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
    useEffect(() => {
        getPosts();
    }, []);

    async function getPosts() {
        await axios
            .get("http://boarder.test/posts")
            .then((response) => console.log(response.data));
    }

    return (
        <div style={{ background: "red" }}>
            <h1>Hello, react!</h1>
        </div>
    );
}

export default App;

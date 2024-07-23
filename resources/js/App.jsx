import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        getPosts();
    }, []);

    async function getPosts() {
        try {
            const response = await axios.get("http://boarder.test/posts");
            setPosts(response.data);
        } catch (error) {
            console.error("Error fetching posts:", error);
        }
    }

    return (
        <div>
            <h1>Boarder</h1>
            <h2>For when youre bored on the board</h2>
            <div className="container">
                <div className="posts-container">
                    {posts.map((post) => (
                        <div key={post.id} className="post">
                            <h3>{post.title}</h3>
                            <p>{post.content}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default App;

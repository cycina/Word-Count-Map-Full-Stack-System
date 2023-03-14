import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { ENDPOINT } from '../api/api';

const Home = () => {
    const [posts, setPosts] = useState([]);

    // convert an object to an array 
    function generateArray(obj) {
        return Object.keys(obj).map((key) => {
            const data = { key: key, value: obj[key] }
            return data
        });
    }

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios.get(ENDPOINT+'api/posts');
            setPosts(generateArray(result.data));
          };
    
        fetchData();
        
        //Update data as new data is available
        const ws = new WebSocket('ws://localhost:8080');
        ws.onmessage = (event) => {
          setPosts(generateArray(JSON.parse(event.data)));
        };
    
        return () => {
          ws.close();
        };
      }, []);

    return (
        <>
            <div className="container">
                <table className="mt-5 table table-striped table-bordered">
                    <thead>
                        <tr>
                            <th>words</th>
                            <th>number of repetitions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {posts && posts.map((word, index) =>
                            <tr key={index}>
                                <td>{word.key}</td>
                                <td>{word.value}</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>

        </>
    );
};

export default Home;
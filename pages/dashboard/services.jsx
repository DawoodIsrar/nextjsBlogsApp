import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from '../../styles/Home.module.css'
import Link from 'next/link'

const Services = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const res = await axios.get('http://localhost:3000/api/getallblogs');
                setBlogs(res.data);
            } catch (error) {
                console.error('Error fetching blogs:', error);
            }
        };
        fetchBlogs();
    }, []);

    return (
        <>
            {blogs.map((blog) => (
                <div className={styles.blogs}>
                    <div key={blog.id}>
                        
                        <Link href={`/dashboard/blogpost/?slug=${blog.title}.json`}> <h2>{blog.title}</h2></Link>
                        <p>{blog.content.substr(0, 50)}   ....</p>
                    </div>
                </div>

            ))}
        </>
    );
};

export default Services;

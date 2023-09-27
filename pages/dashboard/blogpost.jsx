import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from '../../styles/Home.module.css';
import Link from 'next/link';
import { useRouter } from 'next/router';

const BlogPost = (props) => {
  const [blog, setBlog] = useState([]);
  const router = useRouter();
  const { slug } = router.query;
console.log(props)
//   useEffect(() => {
//     const fetchBlogBySlug = async () => {
//       try {
//         if (!router.isReady || !slug) {
//           return;
//         }

//         console.log("slug:", slug);

//         const res = await axios.get(`http://localhost:3000/api/getblogsbyname/?slug=${slug}`);
        
//         // Check the data structure of the response
//         if (Array.isArray(res.data)) {
//           setBlog(res.data);
//         } else if (res.data && typeof res.data === 'object') {
//           // If the response is an object, set it to a single-item array
//           setBlog([res.data]);
//         } else {
//           // Handle other response types or show an error message
//           console.error('Unexpected API response:', res.data);
//         }
        
//       } catch (error) {
//         console.error('Error fetching blog by slug:', error);
//       }
//     };
//     fetchBlogBySlug();
//   }, [router.isReady, slug]);

  return (
    <>
      {/* {blog.map((blogItem) => (
        <div className={styles.blog} key={blogItem.id}> */}
         <div className={styles.blog}>
         <h2>{props.data.title}</h2>
          <p>{props.data.content}</p>
         </div>
        {/* </div>
      ))} */}
    </>
  );
};


// server side rendering 
export async function getServerSideProps(context) {
  

       const slug = context.query.slug

    // Fetch data from external API
    const res = await fetch(`http://localhost:3000/api/getblogsbyname/?slug=${slug}`)
    const data = await res.json()
    console.log(data)
   
    // Pass data to the page via props
    return { props: { data } }
  }
   
export default BlogPost;

import React from 'react'
import {Link} from 'react-router-dom'
import {useState, useEffect} from 'react'

const Documentation = () => {

    const [allBlogs, setAllBlogs] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const res = await fetch('/api/blogs');
                const data = await res.json();
                setAllBlogs(data);   
            } catch (error) {
                console.log('Error fetching data', error);
            }finally {
                setLoading(false);
            }
        }
        fetchBlogs();
    }, []);

    const shortContent = (content) => {
      const short = [...content]
      const ok = short.splice(0,85)
      return ok
    }
    
  return (
    <div>
      <h2 className="text-rec-blue text-xl font-semibold ">Documentatie</h2>
      <div className='ml-5 mt-6'>
      <div className='text-start'>
      {loading ? (<h3>Loading....</h3>) : (
        <>
        {allBlogs.map((blog, index) => (
            <div className='start' key={index}>
        <Link to={`/blogs/${blog.id}`}><h3 className='font-semibold mt-4'>{blog.titel}</h3>
        <p className='text-sm'>{shortContent(blog.content)}...</p>
        </Link>
        </div>    
        ))}
        </>)}
        </div>
      </div>
    </div>
  )
}

export default Documentation

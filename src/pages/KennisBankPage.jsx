import React from 'react';
import {Link} from 'react-router-dom';
import { getBlogs } from '../api/blogs';
import { useQuery } from '@tanstack/react-query';

const KennisBankPage = () => {

    const blogs = useQuery({
        queryKey:  ["blogs"],
        queryFn: getBlogs,
    })

  const shortContent = (content) => {
    const short = [...content]
    const ok = short.splice(0,85)
    return ok
  }
  
return (
  <div>
    <h2 className="text-rec-blue text-xl font-semibold ">Kennisbank</h2>
    <div className='ml-5 mt-6'>
    <div className='text-start'>
    {blogs.isLoading ? (<h3>Loading....</h3>) : (
      <>
      {blogs.data.map((blog, index) => (
          <div className='start' key={index}>
      <Link to={`/app/blogs/${blog.id}`}><h3 className='font-semibold mt-4'>{blog.titel}</h3>
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
export default KennisBankPage

import { useQuery } from '@tanstack/react-query';
import React from 'react'
import { useParams , Link} from 'react-router-dom';
import { getBlog } from '../api/blogs';

const BlogPage = () => {
  const { id } = useParams();
    const blog = useQuery ({
      queryKey:  ["blog", id],
      queryFn: () => getBlog(id),
  })
  

  return (
    <div>
      {blog.isLoading ? (<h2>loading</h2>) : (
        <>
        <h2 className="text-rec-blue text-xl font-semibold ">Documentatie</h2>
        <div className='w-3/4 m-auto mt-6 '>
            <img src={blog.data.img} alt='' className='rounded-2xl m-auto object-cover'></img>
        </div>
        <h3 className='text-xl font-semibold mt-6'>{blog.data.titel}</h3>
        <div className='text-start w-5/6 m-auto mt-6 border-t-2'>
            <p className='mt-6 text-small'>{blog.data.content}</p>
        </div>
        <Link to="/app/kennisbank"><h2 className="text-gray-700 italic font-semibold mt-6">Terug</h2></Link>
        </>
       )}
    </div>
  )
}

  export default BlogPage;

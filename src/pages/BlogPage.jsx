import React from 'react'
import { useParams , useLoaderData, Link} from 'react-router-dom';

const BlogPage = () => {
    const { id } = useParams();
    const blog = useLoaderData();
  return (
    <div>
        <h2 className="text-rec-blue text-xl font-semibold ">Documentatie</h2>
        <div className='w-3/4 m-auto mt-6 '>
            <img src={blog.img} alt='' className='rounded-2xl m-auto'></img>
        </div>
        <h3 className='text-xl font-semibold mt-6'>{blog.titel}</h3>
        <div className='text-start w-5/6 m-auto mt-6 border-t-2'>
            <p className='mt-6 text-small'>{blog.content}</p>
        </div>
        <Link to="/documentation"><h2 className="text-gray-700 italic font-semibold mt-6">Terug</h2></Link>
    </div>
  )
}

const blogLoader = async ({params}) => {
    const res = await fetch(`/api/blogs/${params.id}`);
    const data = await res.json();
    return data;
  }

  export {BlogPage as default, blogLoader };

import React from 'react'

export const BlogList = ({blogs,title , handleDelete}) => {

  
    
  return (
    <div className="blog-list">
        <h2>{title}</h2>
        {
            blogs.map((blog)=>(
              <div className="blog-preview" key={blog.id}>
                <h2>{blog.title}</h2>
                <p>{blog.author}</p>
                <button onClick={()=> handleDelete(blog.id)}>Delete</button>
              </div>
            ))
          }
    </div>
  )
}


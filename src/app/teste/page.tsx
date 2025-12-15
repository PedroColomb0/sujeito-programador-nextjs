'use client'

import { useEffect, useState } from "react"

export default function pageTeste() {

    const [post, setPosts] = useState([])

    useEffect((() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => setPosts(data.posts))
        
    }), [])

  return (
    <div>
        <div>
            <h1>Pagina Client</h1>

            <div>
                {post.map(post => (
                    // <div key={post.id}>
                    //     <h2>{post.title}</h2>
                    //     <p>{post.body}</p>
                    // </div>
                ))}
            </div>
        </div>
    </div>
  )
  
}



interface PostProps {
    id: number;
    title: string;
    body: string;
    userId: number;
}

interface ResponseProps {
    posts: PostProps[]
}

export default async function PostsPage() {

    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data: ResponseProps = await response.json()

    console.log(data)

    return(
        <div>
            <h1>Todos os Posts</h1>

            <div>
                {data.posts.map(post => (
                    <div key={post.id}>
                        <h2>{post.title}</h2>
                        <p>{post.body}</p>
                    </div>
                ))}
            </div>
        </div>
    )
} 
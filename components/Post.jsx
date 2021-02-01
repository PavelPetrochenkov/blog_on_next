function Post({post}) {
    return (
        <div>
            {
                post.creator && <div>{post.creator}</div>
            }
            <div>{post.title}</div>
            <p>{post.body}</p>
            {
                post.date && <div>{post.date}</div>
            }
        </div>
    )
}

export default Post

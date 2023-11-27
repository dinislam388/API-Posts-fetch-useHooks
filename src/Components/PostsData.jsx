const PostsData = ({post}) => {
    // console.log(post);
    const {id, title, body} = post
    // console.log(post.id);

    return (
        <div className="postInfo">
            <h2>Id: {id}</h2>
            <h3>Title: {title}</h3>
            <p> <strong>Description:</strong> {body}</p>
        </div>
    )
};

export default PostsData;
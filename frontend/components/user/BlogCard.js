const BlogCard = ({ data }) => {
    return (
        <>
            {data.map((blogs, idx) => (
                <div className="post-preview">
                    <a>
                        <h2 className="post-title fw-bold">{blogs.attributes.nama}</h2>
                        <p className="post-subtitle fw-display">{blogs.attributes.deskripsi}</p>
                    </a>
                    <p className="post-meta fw-display">
                        Posted by
                        <a>{blogs.attributes.author}</a>
                    </p>
                </div>
            ))}
        </>
    );
}

export default BlogCard

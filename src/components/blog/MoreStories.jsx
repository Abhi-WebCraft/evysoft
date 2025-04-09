import PostPreview from "@/components/blog/PostPreview";

export default function MoreStories({ posts }) {
  // Log the posts object for debugging
  console.log("Posts:", posts);

  return (
    <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
      {posts?.edges?.length > 0 ? (
        posts.edges.map(({ node }) => (
          <PostPreview
            key={node.slug}
            title={node.title}
            coverImage={node.featuredImage}
            date={node.date}
            author={node.author}
            slug={node.slug}
            excerpt={node.excerpt}
          />
        ))
      ) : (
        <p>No posts available.</p>
      )}
    </div>
  );
}

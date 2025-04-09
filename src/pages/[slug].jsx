import { useRouter } from "next/router";
import ErrorPage from "next/error";
import Head from "next/head";
import { GetStaticPaths, GetStaticProps } from "next";
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import Layout from "@/components/Layout/Layout";
import Container from "@/components/Layout/Container";
// import Schemas from '@/components/schemas/PostPageSchemas';
import PostBody from "@/components/blog/PostBody";
import MoreStories from "@/components/blog/MoreStories";
import PostHeader from "@/components/blog/PostHeader";
import PostTitle from "@/components/blog/PostTitle";
import Tags from "@/components/blog/Tags";
import { getAllPostsWithSlug, getPostAndMorePosts } from "@/lib/api";
import Link from "next/link";
import Form from "@/components/Common/Form";
export default function Post({ post, posts, preview }) {
const router = useRouter();
const morePosts = posts?.edges;
if (!router.isFallback && !post?.slug) {
return 
<ErrorPage statusCode={404} />
;
}

const links = [
  {
    href: "#",
    text: "Unlocking Global Opportunities: The Role of Abroad Education Consultants in Dubai",
  },
  {
    href: "#",
    text: "Master the IELTS: Your Ultimate Guide to IELTS Test Preparation in Dubai",
  },
  
];
return (
<Layout preview={preview}>
    <Header/>
    <Head>
        <title>{`${post.title}`}</title>
        <meta name="description" content={`${post.title}`} />
        {/* 
        <link rel="canonical" href="https://www.gurnalaw.ca" />
        */}
        <meta property="og:locale" content="en_US" />
        <meta property="og:site_name" content="Gurna Law Coroporation News" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={`${post.title}`} />
        <meta property="og:description" content={`${post.title}`} />
        {/* 
        <meta property="og:url" content="https://www.gurnalaw.ca" />
        */}
        <meta property="og:site_name" content="Gurna Law Corporation - Canadian immigration lawyer in BC" />
        <meta property="og:image" content={post.featuredImage?.node.sourceUrl} />
        {/* 
        <Schemas schemaData={post}/>
        */}
    </Head>
    {router.isFallback ? (
    <PostTitle>Loading…</PostTitle>
    ) : (
    <>
    <div className="bg-white section">
        <article>
            <Container>
                <div className="grid grid-cols-12 gap-12 ">
                    <div className="pr-[50px] border-r-[1px] border-r-[#f0f0f0] lg:col-span-8 md:col-span-12 col-span-12">
                        <PostHeader
                            title={post.title}
                            coverImage={post.featuredImage}
                            date={post.date}
                            author={post.author}
                            categories={post.categories}
                            />
                        {/* 
                        <CoverImage title={post.title} coverImage={post.featuredImage} />
                        */}
                        <PostBody content={post.content} />
                        <footer>
                            {post.tags.edges.length > 0 && 
                            <Tags tags={post.tags} />
                            }
                        </footer>
                    </div>
                    <div className="col-span-12 border rounded shadow-sm max-h-max lg:col-span-4 md:col-span-12">
                    <div className="pt-[5px] px-3">
                        <h2 className="pb-3 font-[800] text-[42px] mb-6 border-[#28aa4a] border-b-4">Recent Posts</h2>
                      </div>
                      <div className="flex flex-col gap-3">
                         {links.map((link, index) => (
                          <Link
                              key={index}
                              href={link.href}
                              className="py-[5px] px-3 border-b hover:translate-x-2 hover:text-[#28aa4a] text-[18px] transition-transform duration-300 ease-in-out"
                              >
                              {link.text}
                          </Link>
                      ))}
                      </div>
                    </div>
                </div>
            </Container>
        </article>
        <div className="pb-[1px]">
            <Container>
                {morePosts.length > 0 && 
                <MoreStories posts={morePosts} />
                }
            </Container>
        </div>
    </div>
    </>
    )}
</Layout>
);
}
export const getServerSideProps= async ({
params,
preview = false,
previewData,
}) => {
const data = await getPostAndMorePosts(params?.slug, preview, previewData);
return {
props: {
preview,
post: data.post,
posts: data.posts,
revalidate: 10,
}
};
};
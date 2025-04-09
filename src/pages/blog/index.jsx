import { getAllPostsForHome } from "@/lib/api";
import PageHead from "@/components/Layout/PageHead";
import Layout from "@/components/Layout/Layout";
import Container from "@/components/Layout/Container";
import HeroPost from "@/components/blog/HeroPost";
import MoreStories from "@/components/blog/MoreStories";
import InnerBannerDesign from "@/components/Common/InnerBannerDesign";

const Index = ({ allPosts, preview }) => {
  const PageMeta = 
        {
        title: "Blog | Dar Aluloom International | Get Education Insights",
        description:"Explore the Dar Aluloom International blog for valuable insights, tips, and updates on education, test preparation, and study abroad opportunities."
    }

    const breadcrumbs = [
      { label: "Home", href: "/" },
      { label: "Our Blogs", href: "/blog" },
      ];
  return (
    <>
    <PageHead PageMeta={PageMeta} />
    <Layout preview={preview}>
      
       <InnerBannerDesign
               title="Our Blogs" 
               breadcrumbs={breadcrumbs} 
               image="/images/banner/canada.jpg"
           />
           <section className="section">
           <Container>
        <div className="mt-[20px]">
          {allPosts && <MoreStories posts={allPosts} />}
        </div>
      </Container>
      </section>
    </Layout>
    </>
  );
};

export const getStaticProps = async ({ preview = false }) => {
  const allPosts = await getAllPostsForHome(preview);

  return {
    props: { allPosts, preview },
    revalidate: 10,
  };
};

export default Index;

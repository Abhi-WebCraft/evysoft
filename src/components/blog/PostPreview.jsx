import Avatar from "./Avatar";
import Date from "./Date";
import CoverImage from "./CoverImage";
import Link from "next/link";
import Image from "next/image";

export default function PostPreview({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
  titleLength = 30,
  excerptLength = 80,
}) {
  // Function to truncate text
  const truncateText = (text, length) => {
    return text.length <= length ? text : `${text.substring(0, length)}...`;
  };

  return (
    <div className="blogs-div">
      <div className="mb-5">
        <CoverImage title={title} coverImage={coverImage} slug={slug} />
      </div>
      <h3 className="text-[20px] font-semibold mb-3 letter-space">
        <Link
          href={`/${slug}`}
          className="hover:text-[#28aa4a]"
          dangerouslySetInnerHTML={{
            __html: truncateText(title, titleLength),
          }}
        ></Link>
      </h3>
      <div className="text-[14px] text-[#28aa4a] font-bold mb-4">
        <Date dateString={date} />
      </div>
      <div
        className="mb-3 blog-paragraph"
        dangerouslySetInnerHTML={{
          __html: truncateText(excerpt, excerptLength),
        }}
      />
      <Link href={`/${slug}`} className="flex items-center gap-2 pt-2 border-t text-[#28aa4a] font-bold">
        <p>Read More</p>
        <span className="ml-2 text-xl">≫</span>
      </Link>
    </div>
  );
}

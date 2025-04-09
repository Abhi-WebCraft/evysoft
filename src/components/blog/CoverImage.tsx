import cn from "classnames";
import Image from "next/image";
import Link from "next/link";

interface Props {
  title: string;
  coverImage: {
    node: {
      sourceUrl: string;
    };
  };
  slug?: string;
}

export default function CoverImage({ title, coverImage, slug }: Props) {
  const amarCoverImage=coverImage?coverImage.node.sourceUrl:'/images/yo-driving-academy-best-driving-school-in-waterloopng.png'
  const image = (
    <Image
      width={2000}
      height={1000}
      alt={title}
      src={amarCoverImage}
      className={cn("shadow-small", {
        "hover:shadow-medium transition-shadow duration-200 max-h-[300px] lg:h-[250px] md:h-auto h-auto w-full object-cover": slug,
      })}
    />
  );
  return (
    <div className="sm:mx-0 ">
      {slug ? (
        <Link href={slug} aria-label={title}>
          {image}
        </Link>
      ) : (
        image
      )}
    </div>
  );
}

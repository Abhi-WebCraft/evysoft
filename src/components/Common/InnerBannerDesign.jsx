import Image from "next/image";
import Container from "../Layout/Container";
import Link from "next/link";

export default function InnerBannerDesign({ title, breadcrumbs, image }) {
  return (
    <section className="">
      <div className="relative">
        <div className="absolute inset-0 z-10 bg-black bg-opacity-60"></div>
        <Image
          src={image}
          alt="about-banner"
          width="1920"
          height="700"
          className="object-cover w-full h-full innerbannerdesign-image"
        />
        <Container>
          <div className="relative z-20 flex flex-col items-center justify-center text-center innerbanner-content">
            <h1 className="text-white">{title}</h1>
            <div className="flex items-center justify-center gap-3 mt-2 text-white">
              {breadcrumbs.map((breadcrumb, index) => (
                <div key={index} className="flex items-center gap-1">
                  <p>
                    <Link href={breadcrumb.href}>{breadcrumb.label}</Link>
                  </p>
                  {index < breadcrumbs.length - 1 && (
                    <Image
                      src="/images/icons/record.svg"
                      alt="Breadcrumb separator"
                      width={10}
                      height={10}
                      className="w-[10px] h-[10px]"
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}

"use client";
import Image from "next/image";
import Link from "next/link";
import BannerForm from "@/components/Form/BannerForm";
export default function BannerInnerPage({
    Heading1,
    Heading2,
    Heading3
}) {
  return (
    <>
    <section className="relative md:bg-cover bg-no-repeat bg-left-bottom xl:bg-bottom md:bg-[url('/images/banner/banner-img.jpg')]">
            <div className="container">
                <div className="pt-[100px] md:py-[200px] xl:py-0 xl:h-screen flex items-center">
                    <div className="text-center md:text-left">
                        <div className="max-w-[600px] md:max-w-[900px] text-center md:text-left">
                            <h1 className="big-title">{Heading1}</h1>
                            <div className="big-title text-green mb-5">{Heading2}</div>
                            <div className="font-semibold mb-5">{Heading3}</div>
                            <div className=" md:hidden"><Image src="/images/banner/mb-banner-img.jpg" alt="" width={430} height={430} className="w-full" /></div>
                        </div>
                        <div className="max-w-[600px] md:max-w-[800px]">
                            <BannerForm/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  );
};
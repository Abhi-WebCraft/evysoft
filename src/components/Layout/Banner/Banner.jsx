"use client";
import Image from "next/image";

export default function HeroBanner() {
  return (
    <section className="relative md:bg-cover bg-no-repeat bg-left-bottom xl:bg-bottom md:bg-[url('/images/banner/banner-img.jpg')]">
        <div className="container">
            <div className="pt-[100px] md:py-[200px] xl:py-0 xl:h-screen flex items-center">
                <div className="max-w-[600px] md:max-w-[800px] text-center md:text-left">
                    <h1 className="text-orange text-lg md:text-2xl font-semibold">Tree removal service in Melbourne</h1>   
                    <div className="big-title">Tree removal service made affordable and convenient.</div>
                    <div className="text-green font-semibold my-5">Affordable Pricing • Schedule Your Tree Service Quickly • Quality Service</div>
                    <div className=" md:hidden"><Image src="/images/banner/mb-banner-img.jpg" alt="" width={430} height={430} className="w-full" /></div>
                </div>
            </div>
        </div>
    </section>
  );
};
import React from 'react';
import Link from 'next/link';
import Container from '../Layout/Container';

const InnerPageBanner = ({ backgroundImage, heading, breadcrumbs }) => {
  return (
    <div
    className="relative flex items-end justify-start h-[300px] md:h-[500px] lg:h-[600px] w-full bg-cover bg-center"
    style={{ backgroundImage: `url(${backgroundImage})` }}
  >
    <div className="absolute inset-0 bg-black bg-opacity-50"></div>
    <Container>
        <div className="relative z-10 p-6 md:p-12 text-white w-full  mx-auto">
        <h1 className="text-3xl md:text-5xl font-bold">{heading}</h1>

        
        <nav aria-label="breadcrumb" className="mt-4">
            <ol className="flex items-center space-x-2 text-sm md:text-base">
            {breadcrumbs.map((breadcrumb, index) => (
                <li key={index} className="flex items-center">
                {index > 0 && <span className="mx-2 text-gray-300">&gt;</span>}
                <Link href={breadcrumb.href}>
                    {breadcrumb.label}
                </Link>
                </li>
            ))}
            </ol>
        </nav>
        </div>
    </Container>
  </div>
  );
};

export default InnerPageBanner;

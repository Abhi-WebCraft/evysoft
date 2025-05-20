'use client'; // Needed if using Next.js app router

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/pagination';
import Container from '../Layout/Container';

const testimonials = [
  
  {
    id: 1,
    name: 'James Walker',
    image: '/images/rew/3.jpg',
    text: 'EvySoft provided solid development support. There were a few delays, but overall the quality of work met our expectations.',
    rating: 3.5,
  },
  {
    id: 2,
    name: 'Aisha Patel',
    image: '/images/rew/4.jpg',
    text: 'Excellent experience! The app they built for us is fast, intuitive, and looks great. The team was also very responsive.',
    rating: 4.5,
  },
  {
    id: 3,
    name: 'Omar Hassan',
    image: '/images/rew/5.jpg',
    text: 'Their team impressed us with their professionalism and deep understanding of our industry. We’ve seen real improvements in our workflow.',
    rating: 5,
  },
  {
    id: 4,
    name: 'Liam Thompson',
    image: '/images/rew/6.jpg',
    text: 'Honestly, the project had a rocky start, but EvySoft turned things around quickly. The final product exceeded our expectations.',
    rating: 4,
  },
  {
    id: 5,
    name: 'Emily Carter',
    image: '/images/rew/7.jpg',
    text: 'We expected a bit more in terms of innovation, but the software works well and is stable. Support team was helpful during launch.',
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-100">
      <div className="space-y-12">
        <h2 className="text-3xl font-extrabold text-center text-gray-900">What Our Clients Say</h2>
        <Container>
        {/* Swiper (Autoplay and Pagination enabled) */}
        <Swiper
          modules={[Autoplay, Pagination]} 
          autoplay={{ delay: 3000, disableOnInteraction: false }} // 3 seconds delay
          pagination={{ clickable: true }} // Enable clickable pagination dots
          loop={true} // Looping the slider
          spaceBetween={30} // Spacing between slides
          slidesPerView={1} // One slide at a time (default)
          breakpoints={{
            640: { slidesPerView: 1 }, // 1 slide per view for small screens
            768: { slidesPerView: 2 }, // 2 slides per view for medium screens
            1024: { slidesPerView: 3 }, // 3 slides per view for large screens
          }}
        >
          {testimonials.map(({ id, name, image, text, rating }) => (
            <SwiperSlide key={id}>
              {/* Testimonial Card */}
              <div className="bg-white p-6 rounded-lg shadow-lg h-full flex flex-col">
               
                <p className="text-gray-700 italic flex-grow">"{text}"</p>
                <div className="mt-4 flex">
                  {/* Rating Stars */}
                  {[...Array(5)].map((_, index) => (
                    <svg
                      key={index}
                      className={`w-5 h-5 ${index < rating ? 'text-yellow-500' : 'text-gray-300'}`}
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 15l-3.09 1.63a1 1 0 01-1.45-1.05l.59-3.44-2.5-2.44a1 1 0 01.55-1.71l3.45-.5L7.91 3.5a1 1 0 011.79-.9l1.54 3.12 3.46.5a1 1 0 01.55 1.71l-2.5 2.44.59 3.44a1 1 0 01-1.45 1.05L10 15z"
                        clipRule="evenodd"
                      />
                    </svg>
                    
                  ))}
                </div>
                 <div className="flex items-center space-x-4 my-6">
                  <div className=" w-[60px] h-[60px]">
                    <Image
                      className="rounded-full  clear-start h-[60px] w-[6s0px]"
                      src={image || '/images/default-avatar.png'} // Fallback image
                      alt={name}
                      width={60}
                      height={60}
                    />
                  </div>
                  <div>
                    <p className="text-lg font-semibold text-gray-900">{name}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        </Container>
      </div>
    </div>
  );
};

export default Testimonials;

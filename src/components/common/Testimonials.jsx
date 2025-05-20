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
    name: 'John Doe',
    image: '/images/rew/3.jpg',
    text: 'EvySoft helped us transform our digital strategy. The team not only delivered high-quality software but also guided us through every step of the process. We saw a 40% increase in efficiency after implementing their solutions!',
    rating: 3.5,
  },
  {
    id: 2,
    name: 'Jane Smith',
     image: '/images/rew/4.jpg',
    text: 'Working with EvySoft was a game-changer for our mobile app development. Their attention to detail and innovative approach exceeded our expectations. Highly recommend their services!',
    rating: 3,
  },
  {
    id: 3,
    name: 'Michael Lee',
    image: '/images/rew/5.jpg',
    text: 'The team at EvySoft is incredible. From start to finish, they were highly communicative, professional, and delivered on time. The new system they developed for us has streamlined our operations.',
    rating: 4,
  },
  {
    id: 4,
    name: 'John Doe',
     image: '/images/rew/6.jpg',
    text: 'EvySoft helped us transform our digital strategy. The team not only delivered high-quality software but also guided us through every step of the process. We saw a 40% increase in efficiency after implementing their solutions!',
    rating: 5,
  },
  {
    id: 5,
    name: 'Jane Smith',
     image: '/images/rew/7.jpg',
    text: 'Working with EvySoft was a game-changer for our mobile app development. Their attention to detail and innovative approach exceeded our expectations. Highly recommend their services!',
    rating: 3,
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

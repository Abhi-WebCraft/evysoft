import Image from "next/image";
import Link from "next/link";
import Container from "../Layout/Container";
import Btn from "../Layout/Btns/Btn";


const Contactus = () => {
  return (
        <section className=" pb-[100px]">
        <Container>
            <div className="grid gap-5 lg:grid-cols-2 bg-[#eff1f9] rounded-xl shadow-lg p-6 border ">
                <div className=" ">
                    <Image src="/images/home/contact.png" alt="images" width={500} height={500} className="w-full object-cover"/>
                </div>
                <div className=" bg-white p-8 rounded-xl shadow-md">
                     <form className="space-y-4">
                            <div>
                            <label className="block text-sm font-medium text-gray-700">Name</label>
                            <input
                                type="text"
                                placeholder="Your Name"
                                className="mt-1 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            </div>

                            <div>
                            <label className="block text-sm font-medium text-gray-700">Email</label>
                            <input
                                type="email"
                                placeholder="you@example.com"
                                className="mt-1 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            </div>

                            <div>
                            <label className="block text-sm font-medium text-gray-700">Subject</label>
                            <input
                                type="text"
                                placeholder="Subject"
                                className="mt-1 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            </div>

                            <div>
                            <label className="block text-sm font-medium text-gray-700">Message</label>
                            <textarea
                                rows="4"
                                placeholder="Write your message..."
                                className="mt-1 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            ></textarea>
                            </div>

                           <Btn title="Submit" link="#"/>
                        </form>
                    </div>
                </div>
                
            </Container>
        </section>

  );
};

export default Contactus;

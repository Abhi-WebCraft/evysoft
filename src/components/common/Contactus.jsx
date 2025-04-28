import Container from "../Layout/Container";
import SectionTitle from "../Layout/SectionTitle";


const Contactus = () => {
    return (
        <section className="section bg-gray-50 form-bg">
            <Container>
                <div className="lg:w-[900px] mb-[30px]">
                    <SectionTitle subtitle="CONTACT WITH US!"  title="Have Any Questions?" content="Enthusiastically disintermediate one-to-one leadership via business e-commerce. Dramatically reintermediate compelling process improvements rather than empowered relationships."/>
                </div>
                <div className="grid lg:grid-cols-12">

                    <div className=" col-span-8">
                        <form className="space-y-6">
                            <div className="grid gap-6">
                                <input
                                    type="text"
                                    placeholder="Enter Your Name"
                                    className="w-full border border-gray-300 rounded-md p-4"
                                />
                                <input
                                    type="email"
                                    placeholder="Enter Your Email"
                                    className="w-full border border-gray-300 rounded-md p-4"
                                />
                            </div>
                            <div className="grid md:grid-cols-2 gap-6">
                                <select className="w-full border border-gray-300 rounded-md p-4">
                                    <option>Select Subject</option>
                                    <option>General Inquiry</option>
                                    <option>Support</option>
                                    <option>Feedback</option>
                                </select>
                                <input
                                    type="text"
                                    placeholder="Phone Number"
                                    className="w-full border border-gray-300 rounded-md p-4"
                                />
                            </div>
                            <textarea
                                rows="5"
                                placeholder="Write Your Message"
                                className="w-full border border-gray-300 rounded-md p-4"
                            />
                            <button
                                type="submit"
                                className="w-full bg-indigo-600 text-white py-4 rounded-md"
                            >
                                MAKE AN APPOINTMENT
                            </button>
                        </form>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default Contactus;

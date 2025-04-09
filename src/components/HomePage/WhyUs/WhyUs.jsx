import Container from "@/components/Layout/Container";
import SectionTitle from "@/components/Layout/SectionTitle";

export default function WhyUs (){
    return (
        <section>
           <Container>
            <div className="grid grid-cols-1 gap-5 lg:grid-cols-4">
                <div className="max-w-[1000px] mx-auto text-center ">
                    <SectionTitle
                        title="Why Choose Us?"
                    />
                </div>
            </div>
           </Container> 
        </section>
    )
}
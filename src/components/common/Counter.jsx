import { useEffect, useState } from "react";
import Image from "next/image";
import Container from "../Layout/Container";

export default function Counter() {
    const [yearsExperience, setYearsExperience] = useState(0);
    const [employees, setEmployees] = useState(0);
    const [projectsCompleted, setProjectsCompleted] = useState(0);
    const [clientsWorldwide, setClientsWorldwide] = useState(0);

    useEffect(() => {
        const incrementCounter = (setter, target) => {
            let count = 0;
            const interval = setInterval(() => {
                if (count < target) {
                    count += Math.ceil(target / 100); // Increment step based on target
                    setter(count > target ? target : count); // Prevent overshooting target
                } else {
                    clearInterval(interval);
                }
            }, 20); // Speed of increment
        };

        incrementCounter(setYearsExperience, 500); // Years of Experience
        incrementCounter(setEmployees, 300); // Employees
        incrementCounter(setProjectsCompleted, 100); // Projects Completed
        incrementCounter(setClientsWorldwide, 5); // Clients Worldwide
    }, []);

    return (
        <section className="pb-[100px]">
            <Container>
                <div className="lg:grid-cols-4 lg:grid lg:gap-4 md:grid md:grid-cols-4 md:gap-3 grid grid-cols-2 gap-5 py-[40px] bg-[#261FB3] rounded-xl">
                    <div>
                        <div className="relative flex flex-col items-center gap-3 counter">
                            <Image src="/images/icons/workflow.svg" alt="vector" width="50" height="50" className="w-[70px] h-[70px] stats-img"/>
                            <div className="flex flex-col items-center">
                                <span className="text-[40px] font-semibold text-white stats-head">{yearsExperience}+</span>
                                <span className="text-white text-[13px]">Projects Delivered</span>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="relative flex flex-col items-center gap-3 counter">
                            <Image src="/images/icons/software-as-a-service.svg" alt="vector" width="50" height="50" className="w-[70px] h-[70px] stats-img"/>
                            <div className="flex flex-col items-center">
                                <span className="text-[40px] font-semibold text-white stats-head">{employees}+</span>
                                <span className="text-white text-[13px]">Happy Clients Worldwide</span>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="relative flex flex-col items-center gap-3 counter">
                            <Image src="/images/icons/ai-search.svg" alt="vector" width="50" height="50" className="w-[70px] h-[70px] stats-img"/>
                            <div className="flex flex-col items-center">
                                <span className="text-[40px] font-semibold text-white stats-head">{projectsCompleted}+</span>
                                <span className="text-white text-[13px]">Industries Served</span>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="relative flex flex-col items-center gap-3 ">
                            <Image src="/images/icons/review.svg" alt="vector" width="50" height="50" className="w-[70px] h-[70px] stats-img"/>
                            <div className="flex flex-col items-center">
                                <span className="text-[40px] font-semibold text-white stats-head">{clientsWorldwide}+Years</span>
                                <span className="text-white text-[13px]">Of Digital Excellence</span>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}

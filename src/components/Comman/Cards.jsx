import { useState } from "react"; 
import styles from "@/components/HomePage/About/About.module.css";
import Container from "@/components/Layout/Container";
import SectionTitle from "@/components/Layout/SectionTitle";
import Image from "next/image";
import Btn from "../Layout/Btns/Btn";

export default function Cards() {
  const [Cards, setCards] = useState([]); 
  
  return (
    <>
      <section>
        <Container>
          {Cards && Cards.length > 0 && Cards.map((card, j) => (
            <div key={j} className="grid lg:grid-cols-2 grid-cols-1">
              <div className="border-b-2">
                <h3>{card.title}</h3>
                <p>{card.description}</p>
              </div>
            </div>
          ))}
        </Container>
      </section>
    </>
  );
}

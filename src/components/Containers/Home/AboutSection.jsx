import BigBtn from '@/components/Layout/BigBtn';
import BtnDark from '@/components/Layout/Btns/BtnDark';
import Container from '@/components/Layout/Container';
import Section from '@/components/Layout/Section';
import SectionTitle from '@/components/Layout/SectionTitle';
import Image from 'next/image';
import ModalVideo from "react-modal-video";
import styled from 'styled-components';
import React, { useState } from "react";
// Styled Components

const AboutWrapper = styled.div`
  display:grid;
  gap: 50px;
    @media (min-width:1025px){
        grid-template-columns: repeat(12, 1fr);
    }   
`;

const AboutLeft = styled.div`
    @media (min-width:1025px){
  grid-column: span 5; 
}
  color:#fff;
`;
const AboutRight = styled.div`
    @media (min-width:1025px){
  grid-column: span 7; 
}
`;

const AboutHeading = styled.div`
  color:#fff;
    display:flex;
    flex-direction: column;
    gap:30px;
`;
const AboutDetail = styled.div`
margin-right:-100px;
  padding: 50px 100px 50px 50px;
  background:#E2FDFB;
  box-shadow: 24px 24px 10px rgba(24, 25, 27, 0.01),
    15px 15px 9px rgba(24, 25, 27, 0.09), 9px 9px 7px rgba(24, 25, 27, 0.3),
    4px 4px 5px rgba(24, 25, 27, 0.51), 1px 1px 3px rgba(24, 25, 27, 0.59),
    0px 0px 0px rgba(24, 25, 27, 0.6);
    border-radius: 50px 0px 0px 50px;

  @media (max-width: 1599px) {
    padding: 64px 90px 64px 36px;
  }

  @media (max-width: 1399px) {
    margin-right:-50px;
    padding: 50px 50px 50px 36px;
    
  }

  @media (max-width: 1199px) {
    margin-right: 0px;
    border-radius: 60px;
    padding: 64px 48px 64px 48px;
  }

  @media (max-width: 992px) {
    border-radius: 38px;
    padding: 32px;
  }

  @media (max-width: 492px) {
    border-radius: 15px;
    padding: 18px;
  }
`;
const AboutDetailGrid = styled.div`
  display:grid;
  gap: 32px;
  align-items: center;
    @media (min-width:768px){
        grid-template-columns: repeat(12, 1fr);
    }   
`;
const AboutDetailLeft = styled.div`
  grid-column: span 7; 
`;
const AboutDetailRight = styled.div`
  grid-column: span 5; 
`;


const AboutDetailTitle = styled.h3`
margin-bottom:15px;
`;
const AboutDetailtext = styled.p`
`;

const AboutImage = styled.img`
    max-height: 250px;
    box-shadow: 42px 42px 24px rgba(0, 0, 0, 0.01), 24px 24px 20px rgba(0, 0, 0, 0.03), 11px 11px 15px rgba(0, 0, 0, 0.04), 3px 3px 8px rgba(0, 0, 0, 0.05), 0px 0px 0px rgba(0, 0, 0, 0.05);
    border-radius: 20px;
    object-fit: cover;
`;
const VideoImage = styled.div`
    overflow: hidden;
    position: relative;
    padding:5px;
    border-radius: 5px;
    &:before, &:after {
        content:"";
        position: absolute;
        background: #E2FDFB;
        width: 50%;
        height: 50%;
    }
    &:before {
        left: 0;
        top: 0;
    }
    &:after {
        right: 0;
        bottom: 0;
    }
`;
const WhyVideoImage = styled.img`
    height: 100%;
    object-fit: cover;
    border-radius: 5px;
    position: relative;
    z-index:1;
`;
const PlayIconImage = styled.img`
      height: auto;
      object-fit: contain;
`;


export default function AboutSection() {
    const currentYear = new Date().getFullYear();
    const [isOpen, setOpen] = useState(false);
  return (
    <Section className="bg">
        <Container>
        <AboutWrapper>
                <AboutLeft>
                    <AboutHeading>
                        <SectionTitle
                            title="Why Vedic Astrology"
                            titlespan=" & Vastu?"
                            content=""
                        />
                        <div>
                        <VideoImage className="relative cursor-pointer" onClick={() => setOpen(true)}>
                                <PlayIconImage src="/images/play-button.svg" alt="" width={100} height={100} className="play-icon absolute left-[50%] top-[50%] w-20 h-20 z-10 -mt-10 -ml-10" />
                                <WhyVideoImage src="/images/home/why-video-thumb.webp" alt="Why Vedic Astrology & Vastu? Kaartik Gor" width={1280} height={720} />
                              </VideoImage>
                              <ModalVideo
                                channel="youtube"
                                youtube={{ mute: 0, autoplay: 1, loop: 0 }}
                                isOpen={isOpen}
                                videoId="75aT__vQf3g"
                                onClose={() => setOpen(false)}
                              />
                        </div>
                        <BigBtn link="" title={`Download ${currentYear} Predictions`}/>
                    </AboutHeading>
                </AboutLeft>
                <AboutRight>
                    <AboutDetail>
                        <AboutDetailGrid>
                            <AboutDetailLeft>
                                <AboutDetailTitle>Vedic Astrology</AboutDetailTitle>
                                <AboutDetailtext>You can live life in two ways: not knowing your destination and wasting precious years searching for it. Or you can seek guidance that charts the path to help you meet your goals. Vedic Astrology guides you to live life with CLARITY, AWARENESS and PURPOSE, and when you prepare yourself, everything is possible.</AboutDetailtext>
                            </AboutDetailLeft>
                            <AboutDetailRight>
                                <AboutImage src="/images/home/vedic.png" alt="" width={424} height={545} />
                            </AboutDetailRight>
                        </AboutDetailGrid>
                        <AboutDetailGrid className='mt-10'>
                            <AboutDetailRight>
                                <AboutImage src="/images/home/vastu.png" alt="" width={424} height={545} />
                            </AboutDetailRight>
                            <AboutDetailLeft>
                                <AboutDetailTitle>Vastu Shastra</AboutDetailTitle>
                                <AboutDetailtext>It is not enough to have a beautiful home; you need to feel happy living there. Vastu Shastra helps you build or create a space with which you are in harmony. It defines and shapes the energies for homes, buildings, and commercial spaces to bring occupants prosperity and peace of mind.</AboutDetailtext>
                            </AboutDetailLeft>
                        </AboutDetailGrid>
                    </AboutDetail>
                </AboutRight>
        </AboutWrapper>

        </Container>
    </Section>
  );
}

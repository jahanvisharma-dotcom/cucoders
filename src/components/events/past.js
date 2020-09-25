import "slick-carousel/slick/slick.css";
import React, { useState } from "react";
import Slider from "react-slick";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import { SectionHeading, Subheading as SubheadingBase } from "components/misc/Headings.js";
import { Container, ContentWithPaddingXl } from "components/misc/Layouts.js";
import loveIllustrationImageSrc from "images/love-illustration.svg";
import { ReactComponent as StarIconBase } from "images/star-icon.svg";
import { ReactComponent as ArrowLeftIcon } from "images/arrow-left-3-icon.svg";
import { ReactComponent as ArrowRightIcon } from "images/arrow-right-3-icon.svg";

import Footer from "components/footers/footers.js";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Header from "components/headers/light.js";
const Row = tw.div`flex flex-col md:flex-row justify-between items-center`;
const Column = tw.div`w-full max-w-md mx-auto md:max-w-none md:mx-0`;
const ImageColumn = tw(Column)`md:w-5/12 xl:w-6/12 flex-shrink-0 relative`;
const TextColumn = styled(Column)(props => [
  tw`md:w-7/12 xl:w-6/12 mt-16 md:mt-0`,
  props.textOnLeft ? tw`md:pr-12 lg:pr-16 md:order-first` : tw`md:pl-12 lg:pl-16 md:order-last`
]);

const Image = styled.img(props => [
  props.imageRounded && tw`rounded`,
  props.imageBorder && tw`border`,
  props.imageShadow && tw`shadow`
]);

const Subheading = tw(SubheadingBase)`text-center md:text-left`;
const Heading = tw(
  SectionHeading
)`mt-4 font-black text-left text-3xl sm:text-4xl lg:text-5xl text-center md:text-left leading-tight`;
const Description = tw.p`mt-6 text-center md:text-left text-sm md:text-base lg:text-lg font-medium leading-relaxed text-secondary-100`;

const TestimonialSlider = styled(Slider)`
  ${tw`w-full mt-10 text-center md:text-left`}
  .slick-track {
    ${tw`flex`}
  }
  .slick-slide {
    ${tw`h-auto flex justify-center mb-1`}
  }
`;

const Testimonial = tw.div`outline-none h-full flex! flex-col`;
const StarsContainer = styled.div``;
const StarIcon = tw(StarIconBase)`inline-block w-5 h-5 text-orange-400 fill-current mr-1 last:mr-0`;
const TestimonialHeading = tw.div`mt-4 text-xl font-bold`;
const Quote = tw.blockquote`mt-4 mb-8 sm:mb-10 leading-relaxed font-medium text-gray-700`;

const CustomerInfoAndControlsContainer = tw.div`mt-auto flex justify-between items-center flex-col sm:flex-row`;

const CustomerInfo = tw.div`flex flex-col sm:flex-row items-center justify-center lg:justify-start`;
const CustomerProfilePicture = tw.img`rounded-full w-16 h-16 sm:w-20 sm:h-20`;
const CustomerTextInfo = tw.div`text-center md:text-left sm:ml-6 mt-2 sm:mt-0`;
const CustomerName = tw.h5`font-bold text-xl`;
const CustomerTitle = tw.p`font-medium text-secondary-100`;

const Controls = styled.div`
  ${tw`flex mt-8 sm:mt-0`}
  .divider {
    ${tw`my-3 border-r`}
  }
`;
const ControlButton = styled.button`
  ${tw`mx-3 p-4 rounded-full transition duration-300 bg-gray-200 hover:bg-gray-300 text-primary-500 hover:text-primary-700 focus:outline-none focus:shadow-outline`}
  svg {
    ${tw`w-4 h-4 stroke-3`}
  }
`;

export default ({
  imageSrc = loveIllustrationImageSrc,
  imageRounded = true,
  imageBorder = false,
  imageShadow = false,
  subheading = "Past Events",
  heading = "Our Members Love Our Events.",
  description = "The illusion is that most of my work is simply about past events: a point in history and nothing else.",
  textOnLeft = false,
  testimonials = [
    {
      stars: 4,
      profileImageSrc:
        "https://images.unsplash.com/photo-1599997949628-019bbbe3752a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3.25&w=512&h=512&q=80",
      heading: "Coding Contest; 20th Jan, 2020",
      quote:
        "An online Test for First Year Engineering Students on 20th Jan 2020 under the supervision of respected HOD Academic Unit 1 Er. Vikas Wasson. This coding contest was based on concepts of algorithms, data structures and problem solving. All the problems have the same points allotted to them and participants are ranked according to the most problem solved and time constraints.",
      customerName: "Ankit Raj",
      customerTitle: "Problem Setter"
    },
    {
      stars: 4,
      profileImageSrc:
        "https://images.unsplash.com/photo-1599997949628-019bbbe3752a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3.25&w=512&h=512&q=80",
      heading: "Coding Contest; 12th Feb, 2020",
      quote:
        "An online Test for First Year Engineering Students on 20th Jan 2020 under the supervision of respected HOD Academic Unit 1 Er. Vikas Wasson. This coding contest was based on concepts of algorithms, data structures and problem solving. All the problems have the same points allotted to them and participants are ranked according to the most problem solved and time constraints.",
      customerName: "Ankit Raj",
      customerTitle: "Problem Setter"
    },
    {
      stars: 4,
      profileImageSrc:
        "https://images.unsplash.com/photo-1599997949628-019bbbe3752a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3.25&w=512&h=512&q=80",
      heading: "Coding Contest; 24th Feb, 2020",
      quote:
        "An online Test for First Year Engineering Students on 20th Jan 2020 under the supervision of respected HOD Academic Unit 1 Er. Vikas Wasson. This coding contest was based on concepts of algorithms, data structures and problem solving. All the problems have the same points allotted to them and participants are ranked according to the most problem solved and time constraints.",
      customerName: "Ankit Raj",
      customerTitle: "Problem Setter"
    },
    {
      stars: 4,
      profileImageSrc:
        "https://images.unsplash.com/photo-1599999384704-1d7b947bee0e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3.25&w=512&h=512&q=80",
      heading: "Workshop; 28th Feb, 2020",
      quote:
        "A one day long workhsop for First Year Engineering Students on 28th Feb 2020 held at chandigarh university from CodeChef CU-Coders where students are trained with the basic concepts of python and machine learning from scratch.Building real life algorithms ,implementing deep learning and creating models to solve real world issues.",
      customerName: "Anustup Mukherjee",
      customerTitle: "Organiser"
    },
    {
      stars: 4,
      profileImageSrc:
        "https://images.unsplash.com/photo-1599999384704-1d7b947bee0e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3.25&w=512&h=512&q=80",
      heading: "Workshop; 02nd March, 2020",
      quote:
        "A workshop for First Year Engineering Students on 02nd March 2020. ABC's of R workshop By Anustup Mukherjee : A day long workshop starting from the basics of R , implemetation of R in statistical computing , data modelling and how we can use R in Machine learning and AI . Students from TCS brach are given hands on trainig on advanced R software.",
      customerName: "Anustup Mukherjee",
      customerTitle: "Organiser"
    },
    {
      stars: 4,
      profileImageSrc:
        "https://images.unsplash.com/photo-1599997949628-019bbbe3752a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3.25&w=512&h=512&q=80",
      heading: "Coding Contest; 04th March, 2020",
      quote:
        "An online Test for First Year Engineering Students on 20th Jan 2020 under the supervision of respected HOD Academic Unit 1 Er. Vikas Wasson. This coding contest was based on concepts of algorithms, data structures and problem solving. All the problems have the same points allotted to them and participants are ranked according to the most problem solved and time constraints.",
      customerName: "Ankit Raj",
      customerTitle: "Problem Setter"
    },
    {
      stars: 5,
      profileImageSrc:
        "https://images.unsplash.com/photo-1599997949628-019bbbe3752a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3.25&w=512&h=512&q=80",
      heading: "Hackathon; 02nd April, 2020",
      quote:
        "The hackathon was conducted to create solutions against the spread of the COVID-19. Any hardware or software solutions to stop the spread or predication and detection models against the disease. It was completely an Online Hackathon to make something world changing and to save millons of life!!",
      customerName: "Ankit Raj",
      customerTitle: "Organiser"
    },
    {
      stars: 5,
      profileImageSrc:
        "https://images.unsplash.com/photo-1599997949628-019bbbe3752a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3.25&w=512&h=512&q=80",
      heading: "Summer of Code; 22nd April, 2020",
      quote:
        "A 2 months coding contest start from 22nd April 2020 CSoC ( CU-Coders University Summer of Code) is a program organised by Developers of CU-Coders in collaboration with CodeChef focused on bringing more student developers into open source software development.",
      customerName: "Ankit Raj",
      customerTitle: "Organiser"
    },
    {
      stars: 4,
      profileImageSrc:
        "https://images.unsplash.com/photo-1599997949628-019bbbe3752a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3.25&w=512&h=512&q=80",
      heading: "Coding Contest; 30th April, 2020",
      quote:
        "An online Test for First Year Engineering Students on 20th Jan 2020 under the supervision of respected HOD Academic Unit 1 Er. Vikas Wasson. This coding contest was based on concepts of algorithms, data structures and problem solving. All the problems have the same points allotted to them and participants are ranked according to the most problem solved and time constraints.",
      customerName: "Ankit Raj",
      customerTitle: "Problem Setter"
    },
    {
      stars: 4,
      profileImageSrc:
        "https://images.unsplash.com/photo-1599997949628-019bbbe3752a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3.25&w=512&h=512&q=80",
      heading: "Coding Contest; 10th May, 2020",
      quote:
        "An online Test for First Year Engineering Students on 20th Jan 2020 under the supervision of respected HOD Academic Unit 1 Er. Vikas Wasson. This coding contest was based on concepts of algorithms, data structures and problem solving. All the problems have the same points allotted to them and participants are ranked according to the most problem solved and time constraints.",
      customerName: "Ankit Raj",
      customerTitle: "Problem Setter"
    },
    {
      stars: 4,
      profileImageSrc:
        "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3.25&w=512&h=512&q=80",
      heading: "Webinar; 27th Jun, 2020",
      quote:
        "A workshop on 27th June 2020 under the CSoC contest.How to start with Open Source By Kushal Kushwaha : An hour webinar where students are given a clear cut idea of how to start and where to start in open source in umbrella of Pi Shaped learning. Students intriduced to foss community, given ideas about GSOC's and MLH fellowship.",
      customerName: "CSoC Committee",
      customerTitle: "Organiser"
    }
  ]
}) => {
  const [sliderRef, setSliderRef] = useState(null);

  return (
    <AnimationRevealPage>
    <Header />
    <Container>
      <ContentWithPaddingXl>
        <Row>
          <ImageColumn>
            <Image src={imageSrc} imageBorder={imageBorder} imageShadow={imageShadow} imageRounded={imageRounded} />
          </ImageColumn>
          <TextColumn textOnLeft={textOnLeft}>
            <Subheading>{subheading}</Subheading>
            <Heading>{heading}</Heading>
            <Description>{description}</Description>
            <TestimonialSlider arrows={false} ref={setSliderRef}>
              {testimonials.map((testimonial, index) => (
                <Testimonial key={index}>
                  <StarsContainer>
                  <h3>Event Rating by Participants</h3>
                    {Array.from({ length: testimonial.stars }).map((_,indexIcon) => (
                      <StarIcon key={indexIcon} />
                    ))}
                  </StarsContainer>
                  <TestimonialHeading>{testimonial.heading}</TestimonialHeading>
                  <Quote>{testimonial.quote}</Quote>
                  <CustomerInfoAndControlsContainer>
                    <CustomerInfo>
                      <CustomerProfilePicture src={testimonial.profileImageSrc} alt={testimonial.customerName} />
                      <CustomerTextInfo>
                        <CustomerName>{testimonial.customerName}</CustomerName>
                        <CustomerTitle>{testimonial.customerTitle}</CustomerTitle>
                      </CustomerTextInfo>
                    </CustomerInfo>
                    <Controls>
                      <ControlButton onClick={sliderRef?.slickPrev}>
                        <ArrowLeftIcon />
                      </ControlButton>
                      <div className="divider" />
                      <ControlButton onClick={sliderRef?.slickNext}>
                        <ArrowRightIcon />
                      </ControlButton>
                    </Controls>
                  </CustomerInfoAndControlsContainer>
                </Testimonial>
              ))}
            </TestimonialSlider>
          </TextColumn>
        </Row>
      </ContentWithPaddingXl>
      <Footer />
    </Container>
    </AnimationRevealPage>
  );
};

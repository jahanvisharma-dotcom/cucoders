import React from "react";
import tw from "twin.macro";
import styled, { css } from "styled-components/macro"; //eslint-disable-line
import { Container, ContentWithPaddingXl } from "components/misc/Layouts.js";
import { SectionHeading } from "components/misc/Headings.js";
import { SectionDescription } from "components/misc/Typography.js";
import { ReactComponent as QuoteIconBase } from "images/quotes-l.svg"
import "slick-carousel/slick/slick.css";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";

const HeadingContainer = tw.div``;
const Heading = tw(SectionHeading)``;
const Description = tw(SectionDescription)`mx-auto text-center text-gray-300`;

const Testimonial = tw.div`px-6 py-12 sm:px-20 sm:py-16 focus:outline-none flex! flex-col justify-between h-full`
const QuoteContainer = tw.div`relative`
const QuoteIcon = tw(QuoteIconBase)`absolute opacity-15 top-0 left-0 transform -translate-y-2 -translate-x-1/2 sm:-translate-x-full w-10 fill-current text-primary-500`
const Quote = tw.blockquote`font-medium sm:font-normal relative text-sm sm:text-xl text-center sm:text-left`
export default ({
  subheading = "WE'RE HIRING A FULL-TIME ",
  heading = "About",
  description = " ",
  testimonials = [
    {
     quote:
        "Do you want to get placed in high paying companies like Facebook, Amazon, Apple, Netflix and Google❓ Do you also want to be among the top programmers who could write efficient and optimized code❓👨‍💻 If yes then, we should tell you that you just need to master your Data Structure and Algorithm Skills and you would be halfway there."
    }
  ],
  testimonials1 = [
  {
    quote:
    ""
  }],
  testimonials2 = [
  {
    quote:
    ""
  }]
}) => {

  return (
    <>
    <AnimationRevealPage>
      <Container>
      <ContentWithPaddingXl>
        <HeadingContainer>
          <Heading>{heading}</Heading>
          <Description>{description}</Description>
        </HeadingContainer>
          {testimonials.map((testimonial, index) => (
            <Testimonial key={index}>
              <QuoteContainer>
                <QuoteIcon />
                <Quote>
                  {testimonial.quote}
                </Quote>
              </QuoteContainer>
            </Testimonial>
          ))}
        <Heading>Prizes</Heading>
          {testimonials1.map((testimonial1, index) => (
            <Testimonial key={index}>
              <QuoteContainer>
                <QuoteIcon />
                <Quote>
                  {testimonial1.quote}
                  <ul>1. Certificates for top 3.</ul>
                </Quote>
              </QuoteContainer>
            </Testimonial>
          ))}
          <Heading>Rules</Heading>
          {testimonials1.map((testimonial1, index) => (
            <Testimonial key={index}>
              <QuoteContainer>
                <QuoteIcon />
                <Quote>
                  {testimonial1.quote}
                  <ul>1. You must have hackerrank id.</ul><br />
                  <ul>2. This is an individual participation contest.</ul><br />
                  <ul>3. Any case of code plagiarism will result in disqualification.</ul><br />
                  <ul>4. Must be a student at Chandigarh University.</ul><br />
                  <ul>5. There is a 2 second penalty on wrong answers and a 4 second penalty on compilation errors.</ul>
                  <br />
                  <ul>6. The students data will be monitered for google searches and for solution searches. The questions are created by the organizers and are original. Any search for code or google searches related to any question would be concidered cheating and result in disqualification.</ul><br />
                  <ul>7. All questions are tested and working.If you get any compilation errors or "Wrong Answer" error that means your logic is incorrect.</ul>
                </Quote>
              </QuoteContainer>
            </Testimonial>
          ))}
      </ContentWithPaddingXl>
      </Container>
    </AnimationRevealPage>
    </>
  );
};

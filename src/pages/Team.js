import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import Header from "components/headers/light.js";
import Footer from "components/footers/footers.js";

import styled from "styled-components";
import { Container, ContentWithPaddingXl } from "components/misc/Layouts.js";
import { SectionHeading, Subheading as SubheadingBase } from "components/misc/Headings";
import {SectionDescription} from "components/misc/Typography";
import { ReactComponent as TwitterIcon} from "images/twitter-icon.svg";
import { ReactComponent as InstagramIcon} from "images/instagram.svg";
import { ReactComponent as LinkedinIcon} from "images/linkedin-icon.svg";
import { ReactComponent as GithubIcon } from "images/github-icon.svg";
const HeadingContainer = tw.div``
const Heading = tw(SectionHeading)``
const Subheading = tw(SubheadingBase)`text-center mb-3`
const Description = tw(SectionDescription)`mx-auto text-center`

const Cards = tw.div`flex flex-wrap flex-row justify-center sm:max-w-2xl lg:max-w-5xl mx-auto`
const Card = tw.div`mt-24 w-full sm:w-1/2 lg:w-1/3 flex flex-col items-center`
const CardImage = styled.div`
  ${props => css`background-image: url("${props.imageSrc}");`}
  ${tw`w-64 h-64 bg-contain bg-center rounded`}
`
const CardContent = styled.div`
  ${tw`flex flex-col items-center mt-6`}
  .position {
    ${tw`uppercase font-bold tracking-widest text-xs text-primary-500`}
  }
  .name {
    ${tw`mt-1 text-xl font-medium text-gray-900`}
  9
`

const CardLinks = styled.div`
  ${tw`mt-6 flex`}
  .link {
    ${tw`mr-8 last:mr-0 text-gray-400 hocus:text-primary-500 transition duration-300`}
    .icon {
      ${tw`fill-current w-6 h-6`}
    }
  }
`

export default ({
  heading = "Meet These Fine Folks.",
  subheading = "Our Team",
  description = "None of us, including me, ever do great things. But we can all do small things, with great love, and together we can do something wonderful.",
  cards = [
    {
      imageSrc: "https://images.unsplash.com/photo-1599997949628-019bbbe3752a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=512&h=512&q=80",
      position: "Founder",
      name: "Ankit Raj",
      links: [
        {
          url: "https://www.instagram.com/ank1t_shr1vastava9/",
          icon: InstagramIcon,
        },
        {
          url: "https://www.linkedin.com/in/ank1traj/",
          icon: LinkedinIcon,
        },
        {
          url: "https://github.com/ank1traj",
          icon: GithubIcon,
        },
      ],
    },
    {
      imageSrc: "https://images.unsplash.com/photo-1599999384704-1d7b947bee0e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&fit=facearea&facepad=100.95&w=512&h=512&q=80",
      position: "President",
      name: "Anustup Mukherjee",
      links: [
        {
          url: "#",
          icon: InstagramIcon,
        },
        {
          url: "#",
          icon: LinkedinIcon,
        },
        {
          url: "#",
          icon: GithubIcon,
        },
      ],
    },
    {
      imageSrc: "https://images.unsplash.com/photo-1600097873961-12154219b396?ixlib=rb-1.2.1&auto=format&fit=crop&fit=facearea&facepad=100.95&w=512&h=512&q=80",
      position: "Marketing Head",
      name: "Itashi Pathria",
      links: [
        {
          url: "#",
          icon: InstagramIcon,
        },
        {
          url: "https://www.linkedin.com/in/itashi-pathria-9060761b2/",
          icon: LinkedinIcon,
        },
        {
          url: "https://github.com/Itashi1903",
          icon: GithubIcon,
        },
      ],
    },
    {
      imageSrc: "https://images.unsplash.com/photo-1599998555001-cadc3864710c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facepad=100.95&w=512&q=80",
      position: "Event Head",
      name: "Smriti Srivastava",
      links: [
        {
          url: "https://www.instagram.com/_tanya_insane_/",
          icon: InstagramIcon,
        },
        {
          url: "https://www.linkedin.com/in/smriti-srivastava-b3a25b168/",
          icon: LinkedinIcon,
        },
        {
          url: "https://github.com/smritisrivastava824",
          icon: GithubIcon,
        },
      ],
    },
    {
      imageSrc: "https://images.unsplash.com/photo-1600000560828-90d1d926e05a?ixlib=rb-1.2.1&auto=format&fit=crop&fit=facearea&facepad=3.45&w=512&h=512&q=80",
      position: "Front-End Developer",
      name: "Aditya Kumar",
      links: [
        {
          url: "#",
          icon: InstagramIcon,
        },
        {
          url: "https://www.linkedin.com/in/aditya-kumar-87886119b",
          icon: LinkedinIcon,
        },
        {
          url: "https://www.github.com/Adi3011",
          icon: GithubIcon,
        },
      ],
    },
    {
      imageSrc: "https://images.unsplash.com/photo-1600000343164-b0738438ac71?ixlib=rb-1.2.1&auto=format&fit=crop&fit=facearea&facepad=3.45&w=512&h=512&q=80",
      position: "Front-End Developer",
      name: "Parul Manhas",
      links: [
        {
          url: "#",
          icon: InstagramIcon,
        },
        {
          url: "#",
          icon: LinkedinIcon,
        },
        {
          url: "#",
          icon: GithubIcon,
        },
      ],
    },
    {
      imageSrc: "https://images.unsplash.com/photo-1599999378206-dba5b9d614cf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&fit=facearea&facepad=3.45&w=512&h=512&q=80",
      position: "Front-End Developer",
      name: "Ketan",
      links: [
        {
          url: "#",
          icon: InstagramIcon,
        },
        {
          url: "https://www.linkedin.com/in/ketan-sharma-508087193",
          icon: LinkedinIcon,
        },
        {
          url: "https://github.com/iamketan56",
          icon: GithubIcon,
        },
      ],
    },
    {
      imageSrc: "https://images.unsplash.com/photo-1599999962958-9380d76f9408?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&fit=facearea&facepad=3.45&w=512&h=512&q=80",
      position: "Front-End Developer",
      name: "Sachin Soni",
      links: [
        {
          url: "https://www.instagram.com/sin.uuuu/",
          icon: InstagramIcon,
        },
        {
          url: "https://www.linkedin.com/in/sachin-soni-49447b193",
          icon: LinkedinIcon,
        },
        {
          url: "https://github.com/sinu93065",
          icon: GithubIcon,
        },
      ],
    },
    {
      imageSrc: "https://images.unsplash.com/photo-1599999251979-7f2d12a9dbb5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&fit=facearea&facepad=3.45&w=512&h=512&q=80",
      position: "Front-End Developer",
      name: "Kartik Malik",
      links: [
        {
          url: "#",
          icon: InstagramIcon,
        },
        {
          url: "https://www.linkedin.com/in/kartik-malik-76263117a",
          icon: LinkedinIcon,
        },
        {
          url: "https://github.com/Kartikmalik271",
          icon: GithubIcon,
        },
      ],
    },
    {
      imageSrc: "https://images.unsplash.com/photo-1600106975020-4d5d9fa38e08?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&fit=facearea&facepad=3.45&w=512&h=512&q=80",
      position: "Front-End Developer",
      name: "Ayushi Chauhan",
      links: [
        {
          url: "https://www.instagram.com/ayuu_shiiii/",
          icon: InstagramIcon,
        },
        {
          url: "https://www.linkedin.com/in/ayushi-chauhan-87a45a1b0/",
          icon: LinkedinIcon,
        },
        {
          url: "https://github.com/Ayushi2811",
          icon: GithubIcon,
        },
      ],
    },
    {
      imageSrc: "https://images.unsplash.com/photo-1599999282595-9ff5e92d1f46?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&fit=facearea&facepad=3.45&w=512&h=512&q=80",
      position: "AI/ML Developer",
      name: "Harshdeep",
      links: [
        {
          url: "https://www.instagram.com/king_of_social_media/",
          icon: InstagramIcon,
        },
        {
          url: "https://www.linkedin.com/in/harshdeep-77/",
          icon: LinkedinIcon,
        },
        {
          url: "https://github.com/Harshderp",
          icon: GithubIcon,
        },
      ],
    },
    {
      imageSrc: "https://images.unsplash.com/photo-1600000607704-0be55573d954?ixlib=rb-1.2.1&auto=format&fit=crop&fit=facearea&facepad=3.45&w=512&h=512&q=80",
      position: "AI/ML & Back-End Developer",
      name: "Kartikey",
      links: [
        {
          url: "#",
          icon: InstagramIcon,
        },
        {
          url: "https://www.linkedin.com/in/kartikey-ahlawat-a63519172/",
          icon: LinkedinIcon,
        },
        {
          url: "https://github.com/kartikeyahl",
          icon: GithubIcon,
        },
      ],
    },
    {
      imageSrc: "https://images.unsplash.com/photo-1599999374688-e13573468639?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&fit=facearea&facepad=3.45&w=512&h=512&q=80",
      position: "Content Writer & Front-End Developer",
      name: "Satakshi Shrivastava",
      links: [
        {
          url: "#",
          icon: InstagramIcon,
        },
        {
          url: "https://www.linkedin.com/in/satakshi-shrivastava-51040b1aa",
          icon: LinkedinIcon,
        },
        {
          url: "https://github.com/satakshi25",
          icon: GithubIcon,
        },
      ],
    },
    {
      imageSrc: "https://images.unsplash.com/photo-1599999750007-7fb8cc658e91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&fit=facearea&facepad=3.45&w=512&h=512&q=80",
      position: "Graphic Designer & Content Writer",
      name: "Gunjan Paneri",
      links: [
        {
          url: "https://www.instagram.com/_.click_it_all._/",
          icon: InstagramIcon,
        },
        {
          url: "https://www.linkedin.com/in/gunjan-paneri-4281201a1/",
          icon: LinkedinIcon,
        },
        {
          url: "https://github.com/iamgunjan",
          icon: GithubIcon,
        },
      ],
    },
    {
      imageSrc: "https://images.unsplash.com/photo-1600097868711-946b33b7c9de?ixlib=rb-1.2.1&auto=format&fit=crop&fit=facearea&facepad=3.45&w=512&h=512&q=80",
      position: "Problem Setter",
      name: "Manish",
      links: [
        {
          url: "#",
          icon: InstagramIcon,
        },
        {
          url: "https://www.linkedin.com/in/manish1004/",
          icon: LinkedinIcon,
        },
        {
          url: "https://github.com/gods-mack",
          icon: GithubIcon,
        },
      ],
    },
    {
      imageSrc: "https://images.unsplash.com/photo-1599999390294-019ef5369a50?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&fit=facearea&facepad=3.45&w=512&h=512&q=80",
      position: "AI/ML Developer",
      name: "Pranai Yadav",
      links: [
        {
          url: "#",
          icon: InstagramIcon,
        },
        {
          url: "#",
          icon: LinkedinIcon,
        },
        {
          url: "#",
          icon: GithubIcon,
        },
      ],
    },
    {
      imageSrc: "https://images.unsplash.com/photo-1600097863410-453660a39f94?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&fit=facearea&facepad=3.45&w=512&h=512&q=80",
      position: "Back-End Developer",
      name: "Varun",
      links: [
        {
          url: "https://www.twitter.com/varunkmr19",
          icon: TwitterIcon,
        },
        {
          url: "https://www.linkedin.com/in/varunkmr19",
          icon: LinkedinIcon,
        },
        {
          url: "https://github.com/varunkmr19",
          icon: GithubIcon,
        },
      ],
    },
  ]
}) => {
  return (
  	<AnimationRevealPage>
  	<Header />
    <Container>
      <ContentWithPaddingXl>
        <HeadingContainer>
          {subheading && <Subheading>{subheading}</Subheading>}
          {heading && <Heading>{heading}</Heading> }
          {description && <Description>{description}</Description> }
        </HeadingContainer>
        <Cards>
          {cards.map((card, index) => (
            <Card key={index}>
              <CardImage imageSrc={card.imageSrc} />
              <CardContent>
                <span className="position">{card.position}</span>
                <span className="name">{card.name}</span>
                <CardLinks>
                  {card.links.map((link, linkIndex) => (
                    <a key={linkIndex} className="link" href={link.url}>
                      <link.icon className="icon" />
                    </a>
                  ))}
                </CardLinks>
              </CardContent>
            </Card>
          ))}
        </Cards>
      </ContentWithPaddingXl>
    </Container>
    <Footer />
    </AnimationRevealPage>
  );
};

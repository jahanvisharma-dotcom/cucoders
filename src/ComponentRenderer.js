import React from 'react';
import { useParams } from 'react-router-dom';
import AnimationRevealPage from "helpers/AnimationRevealPage.js"

import AboutUsPage from "pages/AboutUs.js";
import IllustrationAndVideoHero from "components/hero/TwoColumnWithVideo.js";
import Back from "pages/back.js";

import TwoColWithButtonFeatures from "components/features/TwoColWithButton.js";
import Features from "components/features/features.js";
import WithStatsAndImage2Features from "components/features/featuresWithStats.js";
import Upcoming from "components/features/upcoming.js";
import AboutJob from "components/features/aboutJob.js";

import Company from "components/job/company.js";
import JobSwitcher from "components/job/jobSwitcher.js";
import ComingJob from "components/job/comingsoon.js";

import Blog from "components/blogs/blog.js";

import testimonials from "components/testimonials/testimonials.js";

import FAQs from "components/faqs/faq.js";

import TwoColContactUsFullForm from "components/forms/contact.js";

import ComingSoon from "components/cta/comingsoon.js";

import Footer from "components/footers/footers.js";


import Past from "components/events/past.js";
import Present from "components/events/present.js";

import Apply from "components/job/apply.js";


export const components = {

  innerPages: {
    AboutUsPage: {
      component: AboutUsPage,
      url: `/components/innerPages/AboutUsPage`,
    },
    Back: {
      component: Back,
      url: `/components/innerPages/back`,
    },
  },

  blocks: {
    Hero: {
      type: "Hero Section",
      elements: {
        IllustrationAndVideo: {
          name: "With Image Illustration and Video",
          component: IllustrationAndVideoHero,
          url: "/components/blocks/Hero/IllustrationAndVideo",
        },
      },
    },
    Features: {
      type: "Features Section",
      elements: {
         TwoColWithButton: {
          name: "Two Column With Image and Action Button",
          component: TwoColWithButtonFeatures,
          url: "/components/blocks/Features/TwoColWithButton",
        },
        Features: {
          name: "Three Column Simple",
          component: Features,
          url: "/components/blocks/Features/features",
        },
        WithStatsAndImage2: {
          name: "Stats With Image 2",
          component: WithStatsAndImage2Features,
          url: "/components/blocks/Features/WithStatsAndImage2",
        },
        Upcoming: {
          name: "Upcoming",
          component: Upcoming,
          url: "/components/blocks/Features/upcoming.js",
        },
        AboutJob:{
          name: "Job",
          component: AboutJob,
          url: "components/blocks/Features/AboutJob",
        },
      }
    },
    job: {
      type: "Job",
      elements: {
        Team: {
          name: "company",
          component: Company,
          url: "/components/blocks/Job/company.js",
        },
        JobSwitcher: {
          name: "Job Switching",
          component: JobSwitcher,
          url: "components/blocks/Job/JobSwitcher.js",
        },
        ComingJob: {
          name: "Coming-Job",
          component: ComingJob,
          url: "components/blocks/Job/comingsoon.js",
        },
        Apply: {
          name: "Apply",
          component: Apply,
          url: "components/blocks/Job/apply.js",
        }
      }
    },
    Event: {
      type: "Event",
      elements: {
        Past: {
          name: "past",
          component: Past,
          url: "components/blocks/Event/past.js",
        }
      },
      Present: {
          name: "Simple Three Column With Image",
          component: Present,
          url: "/components/blocks/Blog/presentEvent.js",
        },
      }
    },

    Blog: {
      type: "Blog Section",
      elements: {
        Blog: {
          name: "Grid With Featured Post",
          component: Blog,
          url: "/components/blocks/Blog/blog",
        },
    },

    Testimonial: {
      type: "Testimonial Section",
      elements: {
        testimonials: {
          name: "Two Column With Image And Profile Picture Review",
          component: testimonials,
          url: "/components/blocks/Testimonial/testimonialsw",
        },
      }
    },

    FAQS: {
      type: "FAQs Section",
      elements: {
        SingleCol: {
          name: "Single Column",
          component: FAQs,
          url: "/components/blocks/FAQs/faq",
        },
      }
    },

    Form: {
      type: "Forms Section",
      elements: {
        TwoColContactUsFull: {
          name: "Two Column Contact Us - Full Form",
          component: TwoColContactUsFullForm,
          url: "/components/blocks/Form/TwoColContactUsFull",
        },
      }
    },

    CTA: {
      type: "CTA Section",
      elements: {
        ComingSoon: {
          name: "Coming Soon",
          component: ComingSoon,
          url: "/components/blocks/CTA/comingsoon",
        },
      }
    },

    Footer: {
      type: "Footers Section",
      elements: {
        Footer: {
          name: "Footer",
          component: Footer,
          url: "/components/blocks/Footers/footers",
        },
      }
    }
  }
}

export default () => {
  const { type, subtype, name } = useParams()

  try {
    let Component = null;
    if(type === "blocks" && subtype) {
      Component= components[type][subtype]["elements"][name].component
      return <AnimationRevealPage disabled>
          <Component/>
        </AnimationRevealPage>
    }
    else
      Component= components[type][name].component

    if(Component)
      return <Component/>

    throw new Error("Component Not Found")
  }
  catch (e) {
    console.log(e)
    return <div>Error: Component Not Found</div>
  }
}

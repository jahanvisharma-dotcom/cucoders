import React from 'react';
import { useParams } from 'react-router-dom';
import AnimationRevealPage from "helpers/AnimationRevealPage.js"

import AboutUsPage from "pages/AboutUs.js";

import TermsOfServicePage from "pages/TermsOfService.js";
import PrivacyPolicyPage from "pages/PrivacyPolicy.js";
import IllustrationAndVideoHero from "components/hero/TwoColumnWithVideo.js";

import TwoColWithButtonFeatures from "components/features/TwoColWithButton.js";
import Features from "components/features/features.js";
import WithStatsAndImage2Features from "components/features/featuresWithStats.js";
import Upcoming from "components/features/upcoming.js";
import AboutJob from "components/features/aboutJob.js";

import Company from "components/job/company.js";
import JobSwitcher from "components/job/jobSwitcher.js";
import JobSwitcher2 from "components/job/jobSwitcher-2.js";
import JobSwitcher3 from "components/job/jobSwitcher-3.js";
import ComingJob from "components/job/comingsoon.js";

import Blog from "components/blogs/blog.js";

import testimonials from "components/testimonials/testimonials.js";
import Partner from "components/cta/partner.js";
import FAQs from "components/faqs/faq.js";

import TwoColContactUsFullForm from "components/forms/contact.js";

import ComingSoon from "components/cta/comingsoon.js";

import Footer from "components/footers/footers.js";


import Past from "components/events/past.js";
import Present from "components/events/present.js";

import Applyback from "components/job/openings/backend/apply.js";
import Applyeditorial from "components/job/openings/editorialist/apply.js";
import Applyfront from "components/job/openings/frontend/apply.js";
import Applyfull from "components/job/openings/fullstack/apply.js";
import Applygraphic from "components/job/openings/graphic/apply.js";
import Applymotion from "components/job/openings/motion/apply.js";
import Applysetter from "components/job/openings/setter/apply.js";
import Applytester from "components/job/openings/tester/apply.js";
import ApplyUi from "components/job/openings/uiux/apply.js";


import SecondFeb from "components/events/contest/2ndfeb.js";

export const components = {

  innerPages: {
    AboutUsPage: {
      component: AboutUsPage,
      url: `/components/innerPages/AboutUsPage`,
    },
    PrivacyPolicyPage: {
      component: PrivacyPolicyPage,
      url: `/components/innerPages/PrivacyPolicyPage`,
    },
    TermsOfServicePage: {
      component: TermsOfServicePage,
      url: `/components/innerPages/TermsOfServicePage`,
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
        JobSwitcher2: {
          name: "Job Switching",
          component: JobSwitcher2,
          url: "components/blocks/Job/JobSwitcher2.js",
        },
        JobSwitcher3: {
          name: "Job Switching",
          component: JobSwitcher3,
          url: "components/blocks/Job/JobSwitcher3.js",
        },
        ComingJob: {
          name: "Coming-Job",
          component: ComingJob,
          url: "components/blocks/Job/comingsoon.js",
        },
        Applyback: {
          name: "Applyback",
          component: Applyback,
          url: "components/blocks/Job/openings/backend/apply.js",
        },
        Applyeditorial: {
          name: "Applyeditorial",
          component: Applyeditorial,
          url: "components/blocks/Job/openings/editorialist/apply.js",
        },
        Applyfront: {
          name: "Applyfront",
          component: Applyfront,
          url: "components/blocks/Job/openings/frontend/apply.js",
        },
        Applyfull: {
          name: "Applyfull",
          component: Applyfull,
          url: "components/blocks/Job/openings/fullstack/apply.js",
        },
        Applygraphic: {
          name: "Applygraphic",
          component: Applygraphic,
          url: "components/blocks/Job/openings/graphic/apply.js",
        },
        Applymotion: {
          name: "Applymotion",
          component: Applymotion,
          url: "components/blocks/Job/openings/motion/apply.js",
        },
        Applysetter: {
          name: "Applysetter",
          component: Applysetter,
          url: "components/blocks/Job/openings/setter/apply.js",
        },
        Applytester: {
          name: "Applytester",
          component: Applytester,
          url: "components/blocks/Job/openings/tester/apply.js",
        },
        ApplyUi: {
          name: "ApplyUi",
          component: ApplyUi,
          url: "components/blocks/Job/apply/applyUi.js",
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
        SecondFeb: {
          name: "SecondFeb",
          component: SecondFeb,
          url: "components/blocks/Event/contest/2ndFeb.js",
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
        Partner: {
          name: "Partner",
          component: Partner,
          url: "/components/blocks/CTA/partner",
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

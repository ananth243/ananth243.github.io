import Melange from "../assets/img/Melange.png";
import CabJoint from "../assets/img/CabJoint.png";
import CodeShare from "../assets/img/CodeShare.png";
import Devsoc from "../assets/img/devsoc.png";
import CSA from "../assets/img/csa.jpg";
import IRCS from "../assets/img/ircs.png";

export const projects = [
  {
    name: "Melange",
    photo: Melange,
    description: [
      "Graduating Alumni could send heartfelt nostalgic messages to each other which would be compiled into the yearbook. ",
      "Comprises of about 4000 lines of code with over 900 users at the time. ",
      "User images (for the yearbook) were stored on the server itself as storing it elsewhere would increase network bandwidth. ",
    ],
    url: "https://www.instagram.com/p/CgEBvArvTPL/?utm_source=ig_web_copy_link",
  },
  {
    name: "CSA Times",
    photo: CSA,
    description: [
      "App consists of multiple features including food-ordering, PR drives, events, notice management, exam schedules and timetable (Just to name a few). ",
      "Impacted around 2000 users and has about 8000 lines of code. ",
      "Wrote Jest tests and interfaced CI to ensure Test Driven Development/Deployment.",
    ],
    url: "https://play.google.com/store/apps/details?id=club.devsoc.csaapp&hl=en_IN&gl=US&pli=1",
  },
  {
    name: "Cab Joint",
    photo: CabJoint,
    description: [
      "Aimed to solve the issues with cab prices in places like Goa where cabs were pricey. ",
      "App would show users if people from the same university are arriving on the same day so they can cabpool together.",
    ],
    url: "https://github.com/ananth243/Cab-Joint",
  },
  {
    name: "Code Share",
    photo: CodeShare,
    description: [
      "A URL shortner but for code snippets. ",
      "Runs a cron job everyday to delete one time URLs i.e. URLs that were created without sign in. ",
      "Hence to save shortened links, the user has to be signed in.",
    ],
    url: "https://github.com/ananth243/Code-Share",
  },
];

export const work = [
  {
    company: "Developer's Society BITS Goa",
    photo: Devsoc,
    role: "Senior Software Developer",
    url: "https://devsoc.club",
    description: [
      "Worked as a senior developer in this group of talented people.",
      "Worked mostly on backend development using Nodejs and Typescript with Mongodb and Postgresql as occasional databases.",
      "I worked on the backend for CSA times, an app that has over 2000 registered users, Melange and Short Me, a URL Shortner for the university.",
    ],
    startDate: new Date(2021, 0),
    endDate: new Date(2022, 9),
  },
  {
    company: "Indian Red Cross Society",
    photo: IRCS,
    role: "Software Developer",
    url: "https://redcrosskarnataka.org/",
    description: [
      "Worked as a summer intern devloping a backend application to facilitate the organisation's needs.",
      "Used Django in the process",
    ],
    startDate: new Date(2022, 5),
    endDate: new Date(2022, 6),
  },
  {
    company: "Amazon",
    role: "SDE Intern",
    url: "https://paymentservices.amazon.com/",
    description: [
      "Identified a drop in requests in the team's system and was the primary developer that worked on implementing an architectural change to mitigate this drop in requests.",
      "Implemented Dashboards that captured and displayed service latency metrics across all services within the team.",
      "Took the responsibility of being primary on-call for the team for a total of 4 times where I was put in charge of resolving issues that the team received from various stakeholders.",
      "Collaborated and worked with different teams split across the world mainly in Dubai and Jordan",
      "Demonstrated abilities consistent with Amazon's Leadership Principles such as Bias for Action and Ownership for which I received accolades within the larger organisation I worked in. Also wrote close to 10000 lines of code and contributed to the team's overall growth.",
    ],
    startDate: new Date(2023, 6),
    endDate: new Date(2023, 11),
  },
].sort(function orderByLatest(a, b) {
  return b.endDate - a.endDate;
});

import { reactive } from "vue";

export const store = reactive({
  features: [
    {
      even: false,
      img: "artist-box-image-01.png",
      title: "Online Coures ",
      text: "Online art coaching now offers you a very powerful way to redesign your artist mind. ",
    },
    {
      even: true,
      img: "artist-box-image-02.png",
      title: "One to One",
      text: "Getting the necessary clarity about the current state to help you improve ability",
    },
    {
      even: false,
      img: "artist-box-image-03.png",
      title: "Anywhere ",
      text: "One Access to valuable and portable Program which allow you to setup and live anywhere you want.",
    },
    {
      even: true,
      img: "artist-box-image-04.png",
      title: "On time ",
      text: `Punctuality is our top priority because 
          it's an essential criteria to assess a program quality.`,
    },
  ],
  testimonials: [
    {
      avatar: "artist-testimonial-avatar-01.jpg",
      highlightedText:
        "High level of efficiency and scientific teaching methods ",
      normal:
        "1 am free to learn at my own pace, follow my own schedule and choose the subject want to learn fromthe syllabus. Great study portal for people like me. ",
      fullName: "Mina Hollace",
      occupation: "Freelancer",
      // active: true,
    },
    {
      avatar: "artist-testimonial-avatar-02.jpg",
      highlightedText:
        " Professional team of specialists and passionate mentors at reach",
      normal:
        "I need to get a certification for English proficiency and  MaxCoach is my best choice. Their tutors are smart and professional when dealing with students. ",
      fullName: "Maddy Kondor",
      occupation: "IT Specialist",
      // active: false,
      // next: true,
    },
    {
      avatar: "artist-testimonial-avatar-04.jpg",
      highlightedText:
        " The MaxCoach team works really hard to ensure high quality ",
      normal:
        "I am happy with their arrangement of lessons ansubjects. They reflect a scientific investigation into effective methods to be adopted for learners of all levels. ",
      fullName: "Flore Themes",
      occupation: "Multimedia Admin",
      // active: false,
      // out: true,
    },
    {
      avatar: "artist-testimonial-avatar-03.jpg",
      highlightedText:
        " It's a choice of quality for people with special needs ",
      normal:
        " I'm a very strict person so require everything to be organized and neat. Then, Il be able to make thingsfight and shine. MaxCoach guys just got me.",
      fullName: "Luvic Dubbley",
      occupation: "Private Tutor",
      // active: false,
      // prev: true,
    },
  ],
  isMenuOpen: false,
});

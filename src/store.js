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
});

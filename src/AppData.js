import screen1 from "./assets/pic/slides/Screenshot_1.png";
import screen2 from "./assets/pic/slides/Screenshot_2.png";
import screen3 from "./assets/pic/slides/Screenshot_3.png";
import dwarf1 from "./assets/pic/Pict_1.png";
import trailer from "./assets/pic/slides/Odal game trailer_1a.mp4";

export default {
  main: {
    works: {
      desc:
        "",
      image: {
        src: dwarf1,
        title: "Dwarf"
      }
    },

    media: {
      title: "MEDIA AND SCREENSHOTS",
      list: [
        {
          video: {
            src: trailer,
            title: ""
          }
        },
        {
          image: {
            src: screen1,
            alt: "Screen"
          }
        },
        {
          image: {
            src: screen2,
            alt: "Screen"
          }
        },
        {
          image: {
            src: screen3,
            alt: "Screen"
          }
        }
      ]
    }
  }
};

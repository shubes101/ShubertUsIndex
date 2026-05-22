import {
  Linkedin,
  PersonVcard,
  Building,
  Youtube,
} from "react-bootstrap-icons";

const data: Data = {
  title: "Patrick Shubert",
  theme: "light",
  animation: {
    nameRandomizer: false,
  },
  name: "Patrick Shubert",
  description: "",
  links: [
    {
      name: "Pat's LinkedIn",
      url: "https://www.linkedin.com/in/patrickshubert",
      icon: Linkedin,
    },
    {
      name: "Contact Details",
      url: "https://linksta.cc/vcard/451732818",
      icon: PersonVcard,
    },
    {
      name: "Ocrolus",
      url: "https://www.ocrolus.com",
      icon: Building,
    },
    {
      name: "Product Pulse: SMB Underwriting",
      url: "https://www.youtube.com/watch?v=qpqDOhk1ow0&t=24s",
      icon: Youtube,
    },
  ],
  sortByLength: false,
};

export default data;

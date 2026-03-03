import image1 from "./assets/images/pexels-pixabay-534216.jpg"
import image2 from "./assets/images/1032028070862920821.jpg"
import image3 from "./assets/images/image.png"
import image4 from "./assets/images/myResearchPaper.png"
import image5 from "./assets/images/TruckELD.png"
const logotext = "KARTIKEY";
const meta = {
    title: "Kartikey Sondhi",
    description: "I’m Kartikey Sondhi, an AI/ML Engineer _ Researcher, currently working in Bangalore",
};

const introdata = {
    title: "I’m Kartikey Sondhi",
    animated: {
        first: "I am an AI/ML Engineer",
        second: "I am a Data Scientist",
        third: "I am a Researcher",
    },
    description: "Results-driven AI Engineer with a strong track record of designing, shipping, and scaling production systems. Experienced in building reliable ML-powered backends, improving system performance, and turning stalled projects into high-impact deliverables through rigorous engineering and data-driven iteration.",
    your_img_url: "",
};

const dataabout = {
    title: "A bit about myself",
    aboutme: "Results-driven AI Engineer with a strong track record of designing, shipping, and scaling production systems. Experienced in building reliable ML-powered backends, improving system performance, and turning stalled projects into high-impact deliverables through rigorous engineering and data-driven iteration. Experienced building chatbots, LLM evaluation systems and building superior RAG based architectures."
};
const worktimeline = [{
        jobtitle: "Data Scientist 2",
        where: "Deloitte",
        date: "Jul 25 - Current",
    },{
        jobtitle: "Data Scientist Intern",
        where: "Deloitte",
        date: "Jan 25 - Jul 25",
    },
    {
        jobtitle: "Data Scientist Intern",
        where: "Deloitte",
        date: "May 24 - July 24",
    },
    {
        jobtitle: "Summer Research Intern",
        where: "LUSIP",
        date: "Jun 23 - July 23",
    },
];

const skills = [{
        name: "Python",
        value: 90,
    },
    {
        name: "Deep Learning",
        value: 85,
    },
    {
        name: "SQL",
        value: 70,
    },
    {
        name: "PyTorch",
        value: 60,
    }
];

const services = [
  {
    title: "RAG Systems — Design, Scaling, and Evaluation",
    description:
      "I design and ship production-grade Retrieval-Augmented Generation systems, making deliberate trade-offs across retrieval, chunking, grounding, and evaluation to achieve high accuracy, low latency, and long-term maintainability."
  },
  {
    title: "Applied Research & Algorithmic Development",
    description:
      "I operate comfortably at the intersection of research and engineering—formulating novel approaches, synthesizing prior work, and translating ideas into systems that hold up under real-world constraints."
  },
  {
    title: "LLM Adaptation & Optimization",
    description:
      "I adapt large language models for specific problem domains through instruction tuning, prompt design, and targeted fine-tuning, with a focus on reliability, cost efficiency, and measurable performance gains."
  }
];


const dataportfolio = [{
    img: image5,
    description: "Built a functional and in use app for a US based trucking company which heuristically approaches truck routing problem and ELD planning as a printable format.",
    link : "https://truck-route-eld.vercel.app"
},{
        img: image1,
        description: "Participated in the Jane Street Stock Market Prediction Challenge. I trained a CNN-LSTM model from scratch to predict stock prices based on historical data.",
        link: "https://github.com/KabhiCodeKabhiFork/CNN_LSTM_Ensemble_Stock_Prediction",
    },
    {
        img: image3,
        description: "Self Driving car simulation using Vanilla JS. The car uses a simple neural network to navigate through a track. The model intiates using random weights and learns using huamn feedback.",
        link: "https://self-driving-1.onrender.com/",
    },
    {
        img: image4,
        description: "This research paper presents a novel approach to provide drivers with the fastest route in congested road networks. ",
        link: "https://pdfs.semanticscholar.org/1f56/313f3f5f090c94ecba7101ddf6f6dc21c125.pdf",
    },
    
];

const contactConfig = {
    YOUR_EMAIL: "kartikeysondhi@gmail.com",
    // YOUR_FONE: "+91 **********",
    description: `I’m drawn to teams that operate with high velocity, strong technical rigor, and a culture that actively pushes the boundaries of what’s state-of-the-art. I value environments where inclusion is paired with intellectual intensity, and where ambitious long-term vision is backed by disciplined execution. I’m particularly motivated by companies building for meaningful scale — products that serve large markets and solve problems that truly matter.
    At this stage in my career, I’m intentional about where I invest my time and energy. I thrive in focused, high-output work cycles when there’s clarity of direction, strong engineering leadership, and shared ownership across the team. Having worked both independently and in structured environments, I bring a high degree of accountability, systems thinking, and execution discipline. I do my best work where expectations are high, planning is deliberate, and outcomes are measurable. `,
    // creat an emailjs.com account 
    // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
    YOUR_SERVICE_ID: process.env.REACT_APP_EMAILJS_SERVICE_ID,
    YOUR_TEMPLATE_ID: process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
    YOUR_USER_ID: process.env.REACT_APP_EMAILJS_USER_ID,
};

const socialprofils = {
    github: "https://github.com/KabhiCodeKabhiFork",
    linkedin: "https://www.linkedin.com/in/kartikeysondhi/",
    // twitter: "https://twitter.com",
};
export {
    meta,
    dataabout,
    dataportfolio,
    worktimeline,
    skills,
    services,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
};
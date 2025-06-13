import image1 from "./assets/images/pexels-pixabay-534216.jpg"
import image2 from "./assets/images/1032028070862920821.jpg"
import image3 from "./assets/images/image.png"
const logotext = "KARTIKEY";
const meta = {
    title: "Kartikey Sondhi",
    description: "I’m Kartikey Sondhi, an AI/ML Engineer _ Researcher, currently working in Bangalore",
};

const introdata = {
    title: "I’m Kartikey Sondhi",
    animated: {
        first: "I am an AI/ML Engineer",
        second: "I am a Researcher",
        // third: "I am a Basketball Player",
    },
    description: "I'm an AI/ML Engineer and Researcher with a passion for developing innovative solutions. I graduated with a Dual B.Tech M.Tech degree in Computer Science, and have a strong background in Deep Learning, Python and Academic Research.",
    your_img_url: "",
};

const dataabout = {
    title: "A bit about myself",
    aboutme: "I am an AI/ML Engineer and Researcher with a passion for developing innovative solutions. I graduated with a Dual B.Tech M.Tech degree in Computer Science, and have a strong background in Deep Learning,Python and Academic Research. I am currently exploring oppurtunities surrounding Exoskeletal Assistive Locomotion, be it research or practical design and development."
};
const worktimeline = [{
        jobtitle: "Data Scientist Intern",
        where: "Deloitte",
        date: "Jan 25 - Current",
    },
    {
        jobtitle: "Data Scientist Intern",
        where: "Deloitte",
        date: "May 24 - July 24",
    },
    {
        jobtitle: "Research Intern",
        where: "LUSIP",
        date: "Jun 23 - July 23",
    },
];

const skills = [{
        name: "Python",
        value: 80,
    },
    {
        name: "Deep Learning",
        value: 80,
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

const services = [{
        title: "RAG Development and Evaluation",
        description: "I am skilled in developing and evaluating Retrieval-Augmented Generation (RAG) systems",
    },
    {
        title: "Research and Development",
        description: "Having a strong background in academic research, I can contribute to innovative projects and solutions.",
    },
    {
        title: "LLM Fine Tuning",
        description: "I have experience in fine-tuning Large Language Models (LLMs) for specific tasks and applications.",
    },
];

const dataportfolio = [{
        img: image1,
        description: "An attempt at the Jane Street Stock Market Prediction Challenge. I trained a CNN-LSTM model from scratch to predict stock prices based on historical data.",
        link: "https://github.com/KabhiCodeKabhiFork/CNN_LSTM_Ensemble_Stock_Prediction",
    },
    {
        img: image3,
        description: "Self Driving car simulation using Vanilla JS. The car uses a simple neural network to navigate through a track. The model intiates using random weights and learns using huamn feedback.",
        link: "https://self-driving-1.onrender.com/",
    },
    // {
    //     img: "https://picsum.photos/400/?grayscale",
    //     description: "The wisdom of life consists in the elimination of non-essentials.",
    //     link: "#",
    // },
    
];

const contactConfig = {
    YOUR_EMAIL: "kartikeysondhi@gmail.com",
    // YOUR_FONE: "+91 **********",
    description: "Open to discussing new projects, creative ideas or opportunities to be part of your visions.",
    // creat an emailjs.com account 
    // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
    YOUR_SERVICE_ID: process.env.REACT_APP_EMAILJS_SERVICE_ID,
    YOUR_TEMPLATE_ID: process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
    YOUR_USER_ID: process.env.REACT_APP_EMAILJS_USER_ID,
};

const socialprofils = {
    github: "https://github.com/KabhiCodeKabhiFork",
    linkedin: "https://www.linkedin.com/in/kartikeysondhi/",
    twitter: "https://twitter.com",
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
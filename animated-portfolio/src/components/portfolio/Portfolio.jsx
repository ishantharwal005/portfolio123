import { useRef } from "react";
import "./portfolio.scss"
import {motion, useScroll, useSpring, useTransform} from "framer-motion"



const items = [
    {
        id: 1,
        title: "TranquilMinds: Online Therapy Platform",
        img: "/tranquil.png",
        desc: `Front-end Mastery: Developed an engaging and visually appealing React.js frontend, utilizing hooks and advanced CSS techniques. This resulted in a 95% positive user satisfaction rate.
        Backend Infrastructure: Engineered a robust Python Django REST framework backend, ensuring secure user authentication and efficient data management for over 5,000 users.
        Real-Time Interactions: Implemented WebSocket technology for seamless real-time chat and integrated the Jitsi SDK for high-quality video calls, enhancing user engagement and satisfaction by 40%.`,
        url: "https://github.com/ishantharwal005/TranquilMinds"
    },

    {
        id: 2,
        title: "USA Housing Price Analysis",
        img: "./usahpa2.png",
        desc: "Data-Driven Insights: Led a comprehensive analysis of US housing prices on AWS EMR, leveraging PySpark to process a substantial 2 GB dataset. Scalable Data Infrastructure: Centralized data storage on AWS S3 with EMR, enabling seamless scalability to handle up to 1 TB of daily data. Advanced Data Processing: Developed PySpark RDD scripts for robust feature engineering, in-depth data analysis, meticulous preprocessing, and insightful visualization. Actionable Analytics: Utilized Spark SQL to extract valuable insights from over 1000 data points within extensive datasets, driving informed decision-making.",
        url: "https://github.com/ishantharwal005/CPSC-531---Advanced-Database-Project.git"
    },

    {
        id: 3,
        title: "Facial Expression Recognition",
        img: "/fer2.png",
        desc: "Cutting-Edge Emotion Detection: Developed a sophisticated facial emotion recognition system utilizing a Convolutional Neural Network algorithm. Through transfer learning with the MobileNetV2 model, achieved an impressive 95.05% accuracy rate in classifying basic emotions such as happiness, sadness, anger, fear, disgust, and surprise. Real-Time Image Processing: Processed live camera images to accurately classify emotions using advanced image recognition algorithms, enabling real-time analysis and applications. Data Enhancement for Optimal Performance: Enhanced data preprocessing by implementing data normalization techniques, resulting in a significant 27% boost in model accuracy.",
        url: "https://github.com/ishantharwal005/Facial-Expression-Recognition"
    },

    // {
    //     id: 4,
    //     title: "JavaScript Game",
    //     img: "https://images.pexels.com/photos/27721821/pexels-photo-27721821/free-photo-of-person-in-hat-in-fire-performance-at-night.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load",
    //     desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    // },
];

const Single = ({item}) => {

    const ref = useRef()

    const {scrollYProgress} = useScroll({
        target: ref,
        // offset: ["start start", "end start"]
    });

    const y = useTransform(scrollYProgress, [0,1], [-300, 300]);

    const handleButtonClick = () => {
        if (item.url) {
            window.open(item.url, "_blank"); // Open in a new tab
        } else {
            alert("Source code not available for this project.");
        }
    };

    return (
        <section>
            <div className="container">
                <div className="wrapper">
                    <div className="imageContainer"  ref={ref}>
                        <img src={item.img} alt="" />
                    </div>
                    <motion.div className="textContainer" style={{y}}>
                        <h2>{item.title}</h2>
                        <p>{item.desc}</p>
                        <button onClick={handleButtonClick}>Source Code</button>
                    </motion.div>
                </div>
            </div>
        </section>
    )
};

const Portfolio = () => {

    const ref = useRef()

    const {scrollYProgress} = useScroll({
        target: ref, 
        offset:["end end", "start start"],
    });

    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
    });

    return (
    <div className="portfolio" ref = {ref}>
        <div className="progress">
            <h1>Featured Works</h1>
            <motion.div style={{scaleX}} className="progressBar"></motion.div>
        </div>
        {items.map((item) => (
            <Single item = {item} key={item.id} />
        ))}
    </div>
    );
};

export default Portfolio;
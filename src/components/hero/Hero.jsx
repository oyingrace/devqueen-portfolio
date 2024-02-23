import "./hero.scss";
import {motion} from "framer-motion";


const textVariants = {
    initial: {
        x: -500,
         opacity: 0,
    },
    animate:{
        x:0,
        opacity: 1,
        transition: {
            duration: 1,
            staggerChildren: 0.1,
        },
    },
    scrollButton:{
        opacity:0,
        y:10,
        transition:{
            duration:2,
            repeat: Infinity
        }
    },
};

const sliderVariants = {
    initial: {
        x: 0,
      
    },
    animate:{
        x:"-220%",
        transition: {
            duration: 20,
            repeatType: "mirror",
       repeat: Infinity,
        },
    },
};
const Hero = () => {
  return (
    <div className="hero">
        <div className="wrapper">
        <motion.div className="textContainer"
         variants={textVariants}
         initial="initial"
         animate="animate">
            <motion.h2 variants={textVariants}>GRACE ODAH</motion.h2>
            <motion.h1 variants={textVariants}>Web developer<br/><span>Blockchain developer</span></motion.h1>
            <motion.div variants={textVariants}className="buttons">

                
                <motion.button  variants={textVariants}>
                   <a href="#Portfolio">  My Recent Projects </a>
                    </motion.button>
             
                <motion.button  variants={textVariants}>
                <a href="https://docs.google.com/document/d/1qoLfKHUUPfbHjiZkQRfV5dyDWZF3mTf2nAzWslQU8Q8/edit?usp=sharing">
                    Download CV 
                    </a>
                    </motion.button>
                    

            </motion.div>
            <motion.img variants={textVariants} animate="scrollButton" src="/scroll.png" />
        </motion.div>
    </div>
    <motion.div className="slidingTextContainer"
     variants={sliderVariants} initial="initial" animate="animate" >
      Code Design Create
    </motion.div>
    <div className="imageContainer">
           {/*<img src=""/> */}
        </div>
    </div>
  )
}

export default Hero;
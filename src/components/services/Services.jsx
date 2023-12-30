import { useRef } from "react";
import "./services.scss";
import {motion, useInView} from "framer-motion";

const variants = {
    initial:{
        x:-500,
        y: 100,
        opacity:0,
    },
    animate:{
        x:0,
        opacity:1,
        y:0,
        transition:{
            duration:1,
            staggerChildren:0.1,
        }
    },
};

const Services = () => {

    const ref = useRef()

    const isInView = useInView(ref, {margin:"-100px"})
  return (
    <motion.div className="services" id="services"
    variants={variants}
    initial="initial"
  //  animate="animate"
  //whileInView="animate"
  ref = {ref}
  animate={"animate"}
    >
        <motion.div className="textContainer"  variants={variants}>
        <p>
            I help your brand grow and<br/>move foward
        </p>
          <hr></hr>
        </motion.div>

        <motion.div className="titleContainer"  variants={variants}>

            <div className="title">
                <img src="/people.webp" alt=""/>
                <h1>
                    <motion.b whileHover={{color:"#f13024"}} >Give</motion.b> Value
                    </h1>
            </div>

            <div className="title">
                <h1>
                    <motion.b whileHover={{color:"#f13024"}}>To Your</motion.b> Project.
                    </h1>
                <button>
                    <a href="#services">WHAT I OFFER</a>
                    </button>
            </div>

        </motion.div>
        
        <motion.div className="listContainer"  variants={variants}>
            <div className="box">
                <h2>Web Development</h2>
                <p><br/> Optimized website performance <br/><br/>  Workflow Automation  <br/><br/> Database Maintanance</p>
               {/* <button>Contact</button> */}
            </div>
      
            <div className="box">
                <h2>Web Design</h2>
                <p><br/>UI/UX Design <br/><br/> Prototyping & Wireframing <br/><br/> 3D Animation </p>
                   {/* <button>Contact</button> */}
            </div>
       

            <div className="box">
                <h2>Dapp Development</h2>
                <p><br/>Dex development <br/><br/> NFT Marketplace Development <br/><br/> Smart Contract Deploy .</p>
                    {/* <button>Contact</button> */}
            </div>
            </motion.div>

        
    </motion.div>
  )
}

export default Services;
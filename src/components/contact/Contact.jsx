import "./contact.scss";
import {motion} from "framer-motion";
import { useRef , useState} from 'react';
import React from 'react';


const variants = {
    initial:{
        y:500,
        opacity:0
    },
    animate:{
        y:0,
        opacity:1,
        transition:{
            duration:0.5,
            staggerChildren:0.1,
        }
    }
}

const Contact = () => {


  return (
    <motion.div className="contact"
     variants={variants}
     initial="initial"
     whileInView="animate"
     >
        <motion.div className="textContainer" variants={variants}>
            <motion.h1 variants={variants}>Let's work together</motion.h1>

            <motion.div className="item" variants={variants}>
                <h2>Mail</h2>
                <span>oyingrace307@gmail.com</span>
            </motion.div>
             
            <motion.div className="item" variants={variants}>
                <h2>Address</h2>
                <span>Lagos, Nigeria</span>
            </motion.div>
             
            <motion.div className="item" variants={variants}>
                <h2>Phone</h2>
                <span>+234 811 218 6527</span>
            </motion.div>
        </motion.div>

        <div className="formContainer">


            <motion.form target="_blank"  action="https://formspree.io/f/mleqeelz"
  method="POST">

                <input type="text" required placeholder="Name" name="name" />
                <input type="email" required placeholder="Email" name="email" 
                />
                <textarea rows={8} placeholder="Message" name="message" />
                <button type="submit">Send</button>
              
            </motion.form>

        </div>
    </motion.div>
  )
}

export default Contact;
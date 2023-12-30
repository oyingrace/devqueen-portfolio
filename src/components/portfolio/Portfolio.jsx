import "./portfolio.scss";
import {motion, useScroll, useSpring, useTransform} from "framer-motion";
import { useRef } from "react";

const items = [
  {
    id:1,
    title: "Web3 Academy",
    img:"next.png",
    desc:"Konoha Web3 Academy website is built with Next.js, TailwindCss and Framer-motion ",
    Link: "https://konoha-web.vercel.app/",
  },

  {
    id:2,
    title: "Humanitarian Donation Website",
    img:"unfpa.png",
    desc:" UNPFA Webpage is built with React.js and SASS",
    Link: "https://unpfa.vercel.app/",
  },

  {
    id:3,
    title: "Konoha Webpage",
    img:"konoha.png",
    desc:"Konoha Webpage is built with Vanilla Javascript",
    Link: "https://oyingrace.github.io/konoha-web3-academy/",
  },
];

const Single = ({item}) => {
  const ref = useRef();

  const {scrollYProgress} = useScroll({
    target:ref,
 //   offset:["end end", "start start"]
  });

  const y = useTransform(scrollYProgress, [0,1], [1000, -1000])

  return (
    <section >
     <div className="container">
      <div className="wrapper">
        <div className="imageContainer"  ref={ref}>
        <img src={item.img} alt="" />
        </div>
      <motion.div className="textContainer"  style={{y}} >
        <h2>{item.title}</h2>
        <p>{item.desc}</p>

        <a href={item.Link} target="_blank">
        <button>
          See Demo
          </button>
          </a>

      </motion.div>
     </div>
     </div>
    </section>
  )
}

const Portfolio = () => {
  const ref = useRef()

  const {scrollYProgress} = useScroll({target:ref, offset:["end end", "start start"]});

  const scaleX = useSpring(scrollYProgress, {
    stiffness:100,
    damping: 30,
  })
  return (
    <div className="portfolio" ref={ref}>
      <div className="progress" >
        <h1>My Recent Projects</h1>
        <motion.div style={{scaleX}} className="progressBar">

        </motion.div>
      </div>
      {items.map(item=>(
        <Single item={item} key={item.id}/>
      ))}
    </div>
  )
}

export default Portfolio;
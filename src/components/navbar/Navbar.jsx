import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import {motion} from "framer-motion";

const Navbar = () => {
  return (
    <div className="navbar">

        {/*Sidebar */}
       <Sidebar/>

        <div className="wrapper">
          
            <motion.span
            initial={{opacity:0,
            scale:0.5}}
            animate={{opacity:1,
                scale:1}}
                transition={{duration:0.5,}}
            >DevQueen</motion.span>

            <div className="social">
                <a href="https://twitter.com/devqueenn"  target="_blank" ><img src="/twitter.png" alt="twitter" /></a>
                <a href="https://t.me/devqueenn"><img src="/telegram.png" alt="telegram"  target="_blank" /></a>
                <a href="https://www.linkedin.com/in/odah-grace-2b6039222/"  target="_blank" ><img src="/linkedin.png" alt="linkedln" /></a>
                <a href="https://discord.com/channels/queenn.eth"><img src="/discord.png" alt="discord"  target="_blank" /></a>
            </div>
        </div>
    </div>
  )
}

export default Navbar;
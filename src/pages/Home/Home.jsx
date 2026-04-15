import "./style.css";

import { motion } from "framer-motion"
import { animations } from '../../utils/animations.jsx';

export default function Home() {
    
	return (
		<>
            <motion.div className="home flex akrobat uppercase text-white items-center justify-center w-full h-full bg-gray-500" variants={animations.fadeIn} initial="hidden" animate="visible" exit="exit">
                <h1>hellow world</h1>
            </motion.div>
		</>
	)
}
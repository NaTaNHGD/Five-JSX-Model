import "./style.css";

import { motion } from "framer-motion"
import { animations } from '../../utils/animations.jsx';

export default function Home() {
    
	return (
		<>
            <motion.div className="home w-full h-full bg-gray-100" variants={animations.fadeIn} initial="hidden" animate="visible" exit="exit">
                <h1>Ola Mundo</h1>
            </motion.div>
		</>
	)
}
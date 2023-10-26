
import Header from './Header'
import Home from './Home'
import { motion } from 'framer-motion'

function HeroPage() {
  const variants = {
    initial: {
      y: "100%",
      opacity: 0,
    },
    slideUp: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
  };
  return (
      <motion.div variants={variants} initial="initial" animate="slideUp" className=' wrapper min-h-screen h-full max-w-screen w-full  '>
      <Header />
      <Home/>
    </motion.div>
  )
}

export default HeroPage
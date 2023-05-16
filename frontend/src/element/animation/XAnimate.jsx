import React, { useEffect, useRef } from 'react'
import { motion, useInView, useAnimation } from 'framer-motion'

const DesktopXVariants = {
  hidden: { opacity: 0, x: 75 },
  visible: { opacity: 1, x: 0 }
}

const XVariants = {
  hidden: { opacity: 0, scaleX: 0 },
  visible: { opacity: 1, scaleX: 1 }
};

const XAnimate = (props) => {

  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const mainControls = useAnimation()

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible")
    }
  }, [isInView, mainControls])

   const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  // Conditionally apply the animation only on mobile
  const variants = isMobile ? XVariants : DesktopXVariants;

  return (
    <motion.div
      style={{
        position: 'relative',
        transformOrigin: 'right center',
        overflow: 'hidden'
      }}
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={mainControls}
      transition={{ duration: 0.75, delay: 0.25 }}
    >
      {props.children}
    </motion.div>
  )
}

export default XAnimate

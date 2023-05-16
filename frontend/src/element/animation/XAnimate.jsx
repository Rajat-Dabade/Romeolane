import React, { useEffect, useRef } from 'react'
import { motion, useInView, useAnimation } from 'framer-motion'

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

  return (
    <motion.div
      style={{
        position: 'relative',
        transformOrigin: 'right center',
        overflow: 'hidden'
      }}
      ref={ref}
      variants={XVariants}
      initial="hidden"
      animate={mainControls}
      transition={{ duration: 0.75, delay: 0.25 }}
    >
      {props.children}
    </motion.div>
  )
}

export default XAnimate

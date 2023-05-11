import React, { useEffect, useRef } from 'react'
import { motion, useInView, useAnimation } from 'framer-motion'

const YVariants = {
  hidden: { opacity: 0, y: 75 },
  visible: { opacity: 1, y: 0 }
}

const YAnimate = (props) => {

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
      style={{ position: 'relative' }}
      ref={ref}
      variants={YVariants}
      initial="hidden"
      animate={mainControls}
      transition={{ duration: 0.75, delay: 0.25 }}
    >
      {props.children}
    </motion.div>
  )
}

export default YAnimate

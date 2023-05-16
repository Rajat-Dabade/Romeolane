import React, { useEffect, useRef } from 'react'
import { motion, useInView, useAnimation } from 'framer-motion'

const XVariants = {
  hidden: { opacity: 0, x: 75 },
  visible: { opacity: 1, x: 0 }
}

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
      style={{ position: 'relative', width: 'calc(100% - 60px)', marginRight: '80px' }}
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

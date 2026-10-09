import { motion } from 'motion/react'
import React from 'react'
import './basic-entrance.css'

const BasicEntrance = () => {
    return (
        <>
            <motion.div
                className='animation-card'
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: 'easeOut' }}
            >
                <h2>BasicEntrance</h2>
                <p>Learning Motion for react</p>
            </motion.div>
        </>
    )
}

export default BasicEntrance
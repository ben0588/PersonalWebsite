import { motion } from 'framer-motion';

const FramerMotion = ({ children }) => {
    return (
        <motion.div
            variants={{
                hidden: {
                    y: 20,
                    opacity: 0,
                },
                show: {
                    opacity: 1,
                    y: 0,
                },
            }}
            initial='hidden'
            whileInView='show'
            transition={{ duration: 0.4, delay: 0.25 }}
        >
            {children}
        </motion.div>
    );
};
export default FramerMotion;

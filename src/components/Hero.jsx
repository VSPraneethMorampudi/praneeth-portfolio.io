import { motion } from "framer-motion";
import arrowIcon from "../assets/down-arrow.svg";
import { styles } from "../styles";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        {/* <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div> */}

        
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className='blue-text-gradient'>Praneeth</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I develop user interfaces <br className='sm:block hidden' />
            and web applications
          </p>
          <h2 className={`text-white`}>
            Let's work together to bring <span className='blue-text-gradient'>Ideas to Life</span>
          </h2>
        </div>
      </div>

      {/* <ComputersCanvas /> */}
      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          {/* Use your down arrow icon here */}
          <img src={arrowIcon} alt="Down Arrow" className="w-6 h-6" />
        </a>
      </div>
      {/* <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div> */}
    </section>
  );
};

export default Hero;

import styles from '../style'
import { discount, robot } from '../assets'
import GetStarted from './GetStarted'
import tagImg from '../assets/http_tags.jpeg'
import devImg from '../assets/dev_ecosystem.jpg'

const Hero = () => {
	return (
		<>
			<section
				id='home'
				className={`flex md:flex-row flex-col ${styles.paddingY}`}
			>
				<div className={`flex ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
					{/* <div className='flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2'>
					<img src={discount} alt='discount' className='w-[32px] h-[32px]' />
					<p className={`${styles.paragraph} ml-2`}>
						<span className='text-white'>20%</span> Discount For{' '}
						<span className='text-white'>1 Month</span> Account
					</p>
				</div> */}

					<div className='flex flex-row justify-between items-center w-[120%]'>
						<h1 className='flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] pr-10'>
							Hi! I am <br className='sm:block hidden' />{' '}
							<span className='text-gradient '>Devesh Agarwal</span>{' '}
						</h1>
						{/* <div className='ss:flex hidden md:mr-4 mr-0 '>
						<GetStarted />
					</div> */}
					</div>

					{/* <h1 className='font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full'>
					Payment Method.
				</h1> */}
					<p className={`${styles.paragraph} max-w-[550px] mt-5`}>
						A full-stack web developer who can blend creativity with technical prowess
						to build engaging digital experiences. Proficient in Java backend
						development, I strive for innovation and excellence in every project.
						Explore my portfolio and witness the fusion of design finesse and robust
						functionality.
					</p>
				</div>

				<div
					className={`flex-1 flex justify-center items-between md:my-0 my-10 relative `}
				>
					<img
						src={tagImg}
						alt='billing'
						className=' w-[90%] h-[100%] relative z-[50] opacity-90 rounded-[10px] '
					/>

					{/* gradient start */}
					<div className='absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient' />
					<div className='absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40' />
					<div className='absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient' />
					<div className='absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient' />
					<div className='absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient' />
					{/* gradient end */}
				</div>
			</section>
			<a
				href='https://devesh326.github.io/portfolio/folder/devesh_agarwal_resume.pdf'
				target='_blank'
			>
				<div className={` ${styles.flexCenter} mb-20 `}>
					<GetStarted />
				</div>
			</a>
		</>
	)
}

export default Hero

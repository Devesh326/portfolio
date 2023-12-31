import { features } from '../constants'
import styles, { layout } from '../style'
import Button from './Button'

const FeatureCard = ({ icon, title, content, index, time }) => (
	<li className='relative mb-6 sm:mb-0 max-w-2xl z-[100]'>
		<div className='flex items-center'>
			<div className='z-10 flex items-center justify-center w-6 h-6  rounded-full ring-0  bg-blue-900 sm:ring-8 ring-gray-900 shrink-0'>
				<svg
					className='w-2.5 h-2.5 text-blue-300'
					aria-hidden='true'
					xmlns='http://www.w3.org/2000/svg'
					fill='currentColor'
					viewBox='0 0 20 20'
				>
					<path d='M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z' />
				</svg>
			</div>
			<div className='hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700'></div>
		</div>
		<div className={`${styles.paragraph} mt-3 sm:pe-8 mr-10`}>
			<h3 className='text-xl font-medium text-white'>{title}</h3>
			<time className=' block mb-2 text-sm font-medium leading-none text-gray-400 my-2'>
				{time}
			</time>
			<ul className='pl-5'>
				{content.map((item) => (
					<li className=' list-disc text-base font-normal text-gray-500  mb-2 max-w-[600px] leading-[26.4px] '>
						{item}
					</li>
				))}
			</ul>
			{/* <p className='text-base font-normal text-gray-500 dark:text-gray-400'>
				{content}
			</p> */}
		</div>
	</li>
)

const Business = () => (
	// <div id='features' className={layout.section}>
	<div id='experience' className='overflow-hidden'>
		<div className={layout.sectionInfo}>
			<h2 className={styles.heading2}>Work Experience</h2>
		</div>
		{/* 
		<div className={`${layout.sectionImg} flex-col`}>
			{features.map((feature, index) => (
				<FeatureCard key={feature.id} {...feature} index={index} />
			))}
		</div> */}

		{/* gradient start */}
		{/* gradient end */}

		<ol
			className={`items-start sm:flex ${styles.paddingY} leading-[32.4px] z-[100]`}
		>
			{features.map((feature, index) => (
				<FeatureCard key={feature.id} {...feature} index={index} />
			))}
		</ol>
	</div>
)

export default Business

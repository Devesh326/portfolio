import { quotes } from '../assets'
import styles from '../style'

const FeedbackCard = ({ content, title, img, tech, link }) => (
	<div className='flex justify-between flex-col px-10 py-12 rounded-[20px]  max-w-[400px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card'>
		{/* add the image thats required */}
		<a href={link} target='_blank'>
			<img
				src={img === '' ? quotes : img}
				alt='double_quotes'
				// className='w-[42.6px] h-[27.6px] object-contain'
				className='w-full h-full object-contain rounded-xl '
			/>
		</a>

		<p className=' font-medium font-poppins text-[22px] leading-[32.4px] text-white mt-10'>
			{title}
		</p>
		<p
			className={`font-poppins font-normal text-[18px] leading-[32.4px]  my-10 ${styles.paragraph}`}
		>
			{content}
		</p>
		<div class='pt-4 pb-2'>
			{tech.map((stack) => (
				<span class='font-poppins inline-block bg-blue-gradient rounded-full px-4 py-1 text-sm font-semibold text-gray-700 mr-3 mb-3'>
					{stack}
				</span>
			))}
		</div>
		{/* <div className='flex flex-row'>
				<img src={img} alt={name} className='w-[48px] h-[48px] rounded-full ' />
				<div className='flex flex-col ml-4'>
					<h4 className='font-poppins font-semibold text-[20px] leading-[32px] text-white'>
						{name}
					</h4>
					<p className='font-poppins font-normal text-[16px] leading-[24px] text-dimWhite'>
						{title}
					</p>
				</div>
			</div> */}
	</div>
)

export default FeedbackCard

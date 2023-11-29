import { feedback } from '../constants'
import styles from '../style'
import FeedbackCard from './FeedbackCard'

const Testimonials = () => (
	<section
		id='project'
		className={`${styles.paddingY} ${styles.flexCenter} flex-col relative m-auto`}
	>
		<div className='absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40' />

		<div className='w-full sm:mb-16 mb-16 relative z-[1]'>
			<h2 className={styles.heading2}>
				{/* What People are <br className='sm:block hidden' /> saying about us */}
				My recent Projects
			</h2>
			<div className='w-full md:mt-0 mt-6'>
				<p className={`${styles.paragraph} max-w-[450px]`}>
					{/* Everything you need to accept card payments and grow your business anywhere
					on the planet. */}
					A few of the projects I have made recently, checkout my
					<a
						href='https://github.com/Devesh326'
						class='font-medium text-blue-600 underline dark:text-blue-500 hover:no-underline'
						data-popover-target='popover-image'
						target='_blank'
					>
						{` Github `}
					</a>
					Profile for more.
				</p>
			</div>
		</div>

		<div className=' flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]'>
			{feedback.map((card) => (
				<FeedbackCard key={card.id} {...card} />
			))}
		</div>
	</section>
)

export default Testimonials

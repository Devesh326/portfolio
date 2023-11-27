import styles from './style'
// import 'tw-elements-react/dist/css/tw-elements-react.min.css'

import {
	Billing,
	Business,
	CardDeal,
	Clients,
	CTA,
	Footer,
	Navbar,
	Stats,
	Testimonials,
	Hero,
} from './components'
import Techstack from './components/TechStack'

const App = () => (
	<div className='bg-primary w-full overflow-hidden'>
		<div className={`${styles.paddingX} ${styles.flexCenter}`}>
			<div className={`${styles.boxWidth}`}>
				<Navbar />
			</div>
		</div>

		<div className={`bg-primary ${styles.flexStart}`}>
			<div className={`${styles.boxWidth}`}>
				<Hero />
			</div>
		</div>

		<div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
			<div className={`${styles.boxWidth}`}>
				{/* <Stats /> */}
				<Business />
				{/* <Billing /> */}
				{/* <CardDeal /> */}
				<Techstack />
				<Testimonials />
				{/* <Clients /> */}
				<CTA />
				<Footer />
			</div>
		</div>
	</div>
)

export default App

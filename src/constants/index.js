import {
	people01,
	people02,
	people03,
	facebook,
	instagram,
	linkedin,
	twitter,
	airbnb,
	binance,
	coinbase,
	dropbox,
	send,
	shield,
	star,
} from '../assets'

import contest_arena from '../assets/contest_arena.png'
import trinity from '../assets/Trinity.png'

export const navLinks = [
	{
		id: 'home',
		title: 'Home',
	},
	{
		id: 'experience',
		title: 'Experience',
	},
	{
		id: 'stack',
		title: 'Tech Stack',
	},
	{
		id: 'project',
		title: 'Projects',
	},
	{
		id: 'contact',
		title: 'Contact',
	},
]

export const features = [
	{
		id: 'feature-1',
		icon: star,
		title: 'Software Development Engineering Intern',
		content: [
			`Developed a new reward and loyalty feature with Microservices architecture using Golang, Gin-Gonic, and Kafka in collaboration with the backend team`,
			`Eliminated the use of third-party services, resulting in a huge monetary benefit`,
			`Successfully ran the scalable system over 1 lakh live customers`,
			`Overcame the challenge of high latency by working with the team and using Redis, reducing latency by 45%`,
			`Developed REST apis that were used by all the departments in the company`,
		],
		time: 'June, 2023 - August, 2023',
	},
	{
		id: 'feature-2',
		icon: shield,
		title: 'Tech Head of DJS Robocon',
		content: [
			`Programmed robot's movement using Arduino in C++.`,
			'Implementing efficient algorithms for complex problem-solving.',
			`Led a team of 15 to develop and program a robot that finished in 9th place in the DD Robocon competition`,
			,
		],
		time: 'January, 2023 - August, 2023',
	},
]

export const feedback = [
	{
		id: 'feedback-1',
		content:
			'Created and published a website that aggregates coding contests from various coding platforms, helping candidates stay up-to-date on coding contests and participate in them',
		title: 'Contest Arena',
		img: contest_arena,
		tech: ['AWS', 'GCP', 'React.js', 'MongoDB', 'Redis', 'Selenium'],
		link: 'https://contests-arena.netlify.app/',
	},
	{
		id: 'feedback-2',
		content: "Developed 	a website for Trinity, College's annual fest.",
		title: 'Trinity',
		img: trinity,
		tech: ['React.js', 'Firebase', 'Node.js', 'SEO'],
		link: 'https://djstrinity.in/',
	},
	{
		id: 'feedback-3',
		content:
			'Quick Bus is a MERN stack web application that enable passengers to book bus seats and travel agencies to add new buses.',
		title: 'Quick Bus',
		img: '',
		tech: ['React.js', 'MongoDB', 'Nodemailer'],
		link: '',
	},
]

export const stats = [
	{
		id: 'stats-1',
		title: 'User Active',
		value: '3800+',
	},
	{
		id: 'stats-2',
		title: 'Trusted by Company',
		value: '230+',
	},
	{
		id: 'stats-3',
		title: 'Transaction',
		value: '$230M+',
	},
]

export const footerLinks = [
	{
		title: 'Useful Links',
		links: [
			{
				name: 'Content',
				link: 'https://www.hoobank.com/content/',
			},
			{
				name: 'How it Works',
				link: 'https://www.hoobank.com/how-it-works/',
			},
			{
				name: 'Create',
				link: 'https://www.hoobank.com/create/',
			},
			{
				name: 'Explore',
				link: 'https://www.hoobank.com/explore/',
			},
			{
				name: 'Terms & Services',
				link: 'https://www.hoobank.com/terms-and-services/',
			},
		],
	},
	{
		title: 'Community',
		links: [
			{
				name: 'Help Center',
				link: 'https://www.hoobank.com/help-center/',
			},
			{
				name: 'Partners',
				link: 'https://www.hoobank.com/partners/',
			},
			{
				name: 'Suggestions',
				link: 'https://www.hoobank.com/suggestions/',
			},
			{
				name: 'Blog',
				link: 'https://www.hoobank.com/blog/',
			},
			{
				name: 'Newsletters',
				link: 'https://www.hoobank.com/newsletters/',
			},
		],
	},
	{
		title: 'Partner',
		links: [
			{
				name: 'Our Partner',
				link: 'https://www.hoobank.com/our-partner/',
			},
			{
				name: 'Become a Partner',
				link: 'https://www.hoobank.com/become-a-partner/',
			},
		],
	},
]

export const socialMedia = [
	{
		id: 'social-media-1',
		icon: instagram,
		link: 'https://www.instagram.com/',
	},
	{
		id: 'social-media-2',
		icon: facebook,
		link: 'https://www.facebook.com/',
	},
	{
		id: 'social-media-3',
		icon: twitter,
		link: 'https://www.twitter.com/',
	},
	{
		id: 'social-media-4',
		icon: linkedin,
		link: 'https://www.linkedin.com/',
	},
]

export const clients = [
	{
		id: 'client-1',
		logo: airbnb,
	},
	{
		id: 'client-2',
		logo: binance,
	},
	{
		id: 'client-3',
		logo: coinbase,
	},
	{
		id: 'client-4',
		logo: dropbox,
	},
]

import React from 'react'
import { CgCPlusPlus } from 'react-icons/cg'
import styles from '../style'

import {
	DiJavascript1,
	DiReact,
	DiNodejs,
	DiMongodb,
	DiPython,
	DiHtml5,
	DiJava,
	DiCss3,
	DiGit,
	DiSqllite,
} from 'react-icons/di'
import {
	SiPytorch,
	SiTensorflow,
	SiAmazonaws,
	SiFlask,
	SiMysql,
	SiRaspberrypi,
	SiAndroid,
	SiArduino,
	SiNativescript,
	SiKeras,
	SiC,
	SiSvelte,
	SiTypescript,
} from 'react-icons/si'

function Techstack() {
	return (
		<div
			id='stack'
			fluid
			className={`about-section text-white sm:text-xs ${styles.paddingY} `}
		>
			<div className='absolute z-[3] -left-1/2  w-[50%] h-[50%] rounded-full white__gradient' />
			<div className='absolute z-[0] w-[50%] h-[130%] -left-3/4 bottom-100 rounded-full pink__gradient' />
			<h2 className={styles.heading2}>Languages</h2>
			<div
				className={`grid md:grid-cols-5 grid-cols-2 sm:grid-cols-3 gap-x-14 gap-y-5 text-right font-poppins text-dimWhite ${styles.marginY}`}
			>
				<div className='tech-icons'>
					<CgCPlusPlus className='m-auto ' />
				</div>
				<div className='tech-icons'>
					<DiJavascript1 className='m-auto' />
				</div>
				<div className='tech-icons'>
					<SiTypescript className='m-auto' />
				</div>
				<div className='tech-icons'>
					<DiPython className='m-auto' />
				</div>
				<div className='tech-icons'>
					<DiJava className='m-auto' />
				</div>
				<div className='tech-icons'>
					<DiHtml5 className='m-auto' />
				</div>
				<div className='tech-icons'>
					<DiCss3 className='m-auto' />
				</div>
				<div className='tech-icons'>
					<SiC className='m-auto' />
				</div>
			</div>

			<h2 className={styles.heading2}>
				Framework / {<br className='sm:block hidden none ' />}Technologies
			</h2>
			<div
				className={`grid md:grid-cols-5 grid-cols-2 sm:grid-cols-3 gap-x-11 gap-y-5 text-right font-poppins text-dimWhite ${styles.marginY}`}
			>
				<div className='tech-icons '>
					<SiTensorflow className='m-auto' />
				</div>
				<div className='tech-icons'>
					<DiReact className='m-auto' />
				</div>
				<div className='tech-icons'>
					<DiNodejs className='m-auto' />
				</div>
				<div className='tech-icons'>
					<SiPytorch className='m-auto' />
				</div>
				<div className='tech-icons'>
					<SiSvelte className='m-auto' />
				</div>
				<div className='tech-icons'>
					<SiAmazonaws className='m-auto' />
				</div>
				<div className='tech-icons'>
					<SiFlask className='m-auto' />
				</div>
				<div className='tech-icons'>
					<DiGit className='m-auto' />
				</div>
			</div>

			<h2 className={styles.heading2}>Databases</h2>
			<div
				className={`grid md:grid-cols-5 grid-cols-2 sm:grid-cols-3 gap-x-11 gap-y-5 text-right font-poppins text-dimWhite ${styles.marginY}`}
			>
				<div className='tech-icons '>
					<DiMongodb className='m-auto' />
				</div>
				<div className='tech-icons'>
					<DiSqllite className='m-auto' />
				</div>
				<div className='tech-icons'>
					<SiMysql className='m-auto' />
				</div>
			</div>
		</div>
	)
}

export default Techstack

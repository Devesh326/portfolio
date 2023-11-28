// import React from 'react'

// const Button = ({ styles }) => (
// 	<button
// 		type='button'
// 		className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles}`}
// 	>
// 		Get Started
// 	</button>
// )

// export default Button

import React, { useState } from 'react'
import style from '../style'

import {
	TERipple,
	TEModal,
	TEModalDialog,
	TEModalContent,
	TEModalHeader,
	TEModalBody,
	TEModalFooter,
} from 'tw-elements-react'

export default function Button({ styles }) {
	const [showModal, setShowModal] = useState(false)
	return (
		<div>
			{/* <!-- Button trigger modal --> */}
			<TERipple rippleColor='white'>
				<button
					type='button'
					className={`py-4 px-6 font-poppins font-medium   md:text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles}`}
					onClick={() => setShowModal(true)}
				>
					Get Started
				</button>
			</TERipple>

			{/* <!-- Modal --> */}
			<TEModal show={showModal} setShow={setShowModal}>
				<TEModalDialog centered className='lg:w-3/6 sm:w-4/6 w-5/6 m-auto '>
					<TEModalContent className='bg-black-gradient-2 font-poppins'>
						<TEModalHeader>
							<h5 className={style.heading2}>Contact Me</h5>
							<div className='absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient' />
							<div className='absolute z-[0] w-[50%] h-[50%] -right-24 bottom-20 blue__gradient' />

							<button
								type='button'
								className={` ${style.paragraph} box-content rounded-none border-none hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none`}
								onClick={() => setShowModal(false)}
								aria-label='Close'
							>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									fill='none'
									viewBox='0 0 24 24'
									strokeWidth='1.5'
									stroke='currentColor'
									className='h-6 w-6'
								>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										d='M6 18L18 6M6 6l12 12'
									/>
								</svg>
							</button>
						</TEModalHeader>
						<form class={`p-4 md:p-5`}>
							<div className={`${style.paragraph} grid gap-4 mb-4 grid-cols-2 `}>
								<div class='col-span-2'>
									<label for='name' class='block mb-2 text-white'>
										Name
									</label>
									<input
										type='text'
										name='name'
										id='name'
										class='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500'
										placeholder='Type your name'
										required=''
									/>
								</div>
								<div class='col-span-2'>
									<label for='email' class='block mb-2 text-white'>
										Email
									</label>
									<input
										type='email'
										name='email'
										id='email'
										class='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500'
										placeholder='Type your email'
										required=''
									/>
								</div>
								<div class='col-span-2'>
									<label for='subject' class='block mb-2 text-white'>
										Subject
									</label>
									<input
										type='text'
										name='subject'
										id='subject'
										class='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500'
										placeholder='Type subject'
										required=''
									/>
								</div>

								<div class='col-span-2'>
									<label for='description' className={`block mb-2 text-white `}>
										Message
									</label>
									<textarea
										id='description'
										rows='4'
										class='block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
										placeholder='Type message to send'
									></textarea>
								</div>
							</div>
							<button
								type='submit'
								className={`text-[14px] md:text-[18px] py-2 px-6 font-poppins font-medium text-primary bg-blue-gradient rounded-[10px] outline-none ${styles}`}
							>
								Submit
							</button>
						</form>
					</TEModalContent>
				</TEModalDialog>
			</TEModal>
		</div>
	)
}

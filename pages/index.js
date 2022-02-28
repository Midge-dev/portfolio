import Head from 'next/head';
import Image from 'next/image';
import Pill from '../Components/Pill';
import Form from '../Components/Form';
import HoverLink from '../Components/HoverLink';
import { useRef, useState } from 'react';
import Header from '../Components/Header';
import ReactModal from 'react-modal';
import { Document, Page, pdfjs } from 'react-pdf';
import { SocialIcon } from 'react-social-icons';
import dynamic from 'next/dynamic';

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/legacy/build/pdf.worker.min.js`;
const FileViewer = dynamic(() => import('react-file-viewer'), {
	ssr: false
});

export function Index() {
	return <FileViewer fileType="pdf" filePath="/SeanMidgley-Dev.pdf" />;
}

const mySkills = [
	'HTML',
	'CSS',
	'JavaScript',
	'React',
	'React Native',
	'Redux',
	'NextJS',
	'jQuery',
	'Bootstrap',
	'Tailwind CSS',
	'Git'
];

const scrollTo = (ref) => {
	window.scrollTo({ top: ref.current.offsetTop - 30, behavior: 'smooth' });
};

export default function Home() {
	const contactSectionRef = useRef(null);
	const aboutSectionRef = useRef(null);
	const projectSectionRef = useRef(null);
	const executeScroll = (id) => {
		if (id === aboutSectionRef.current.id) {
			scrollTo(aboutSectionRef);
		}

		if (id === contactSectionRef.current.id) {
			scrollTo(contactSectionRef);
		}

		if (id === projectSectionRef.current.id) {
			console.log(id, projectSectionRef);
			scrollTo(projectSectionRef);
		}
	};
	const toggleModal = () => {
		handleModal(!isModalOpen);
	};

	const [ isModalOpen, handleModal ] = useState(false);
	// const [pageNumber, setPageNumber] = useState(1);

	return (
		<div className={`${isModalOpen ? 'overlay' : ''}`}>
			<Head>
				<title>Sean Midgley</title>
				<meta name="description" content="Generated by a man on a quest for glory" />
				<link rel="icon" href="" />
			</Head>

			<ReactModal
				isOpen={isModalOpen}
				closeTimeoutMS={200}
				contentLabel="Information"
				id="modal"
				shouldCloseOnOverlayClick={true}
				onRequestClose={toggleModal}
				shouldReturnFocusAfterClose={
					true
					/* Boolean indicating if the modal should restore focus to the element
					 that had focus prior to its display. */
				}
			>
				{/* <Index /> */}
				<Document  file="./SeanMidgley-Dev.pdf" options={{ maxImageSize: -1 }}>
					<Page pageNumber={1} height={1000} width={900}/>
				</Document>
				{/* <button className="absolute top-1 right-2 bg-black text-white w-6 h-6 font-bold rounded-lg mt-3" onClick={toggleModal}>
					X
				</button> */}
			</ReactModal>

			<Header
				openModal={toggleModal}
				refs={{ aboutSectionRef, contactSectionRef, projectSectionRef }}
				scrollTo={scrollTo}
			/>
			<main>
				<section id="top" className="bg-stone-200 h-screen w-full flex justify-center items-center ">
					<div className="text-center">
						<h1 className="font-sans text-7xl font-bold">Hi, I&apos;m Sean</h1>
						<p className="mt-8 font-bold">I&apos;m a Full-Stack Developer</p>
						<HoverLink id="contact" onClick={executeScroll}>
							Get in touch!
						</HoverLink>
						<div className='mx-auto h-[12rem] w-52 flex justify-between items-end'>
						<SocialIcon url="https://linkedin.com/in/seancmidgley" bgColor="black" />
						<SocialIcon url="https://github.com/Midge-dev" bgColor="black" />
						<SocialIcon url="https://twitter.com/midge_dev" bgColor="black" />
						</div>
						<div className="arrow" onClick={() => executeScroll('aboutme')} />
					</div>
				</section>
				<section className="bg-stone-200 h-screen w-full pt-20" id="aboutme" ref={aboutSectionRef}>
					<div className="w-full text-center mb-16">
						<h2 className="font-bold uppercase text-3xl">About Me</h2>
						<p className="max-w-prose mx-auto mt-4">
							Talented and creative Full Stack Developer with a broad technical skill set. Excellent
							communicator, easily interacting with diverse groups of people in the implementation of new
							web applications. Known for being technically astute in delivering fully functional software
							applications and websites. Educated and highly knowledgeable in network development,
							software engineering, and front end frameworks. Strong written, verbal, and interpersonal
							communication skills. Skilled in working as part of a collaborative team or independently as
							a disciplined self-starter.
						</p>
					</div>
					<div className="grid grid-cols-2 mx-auto w-full container">
						<div className="pr-6">
							<h3 className="font-bold text-xl">Get to know me!</h3>
							<p className="mt-6">
								Hey! It&apos;s Sean Midgley and I&apos;m a Full Stack Web Developer located in Las
								Vegas. I build really cool websites like this one! I&apos;ve done remote freelance
								projects for community members, consulted for startups, and collaborated with talented
								people to create digital products for both business and consumer use. I love to code!
								Most recently I graduated from the Full Stack Web and Mobile Development Bootcamp
								offered by Nucamp where I was able to expand my working knowledge of different
								technologies and programming languages.
							</p>
							<p className="mt-4">
								I&apos;m also a bit of a digital product junky. Over the years, I&apos;ve used hundreds
								of web and mobile apps in different industries and verticals. Feel free to contact me or
								download my resume!
							</p>
							<div className='mt-8'>
								<HoverLink className="mt-4 mx-auto" id="contact" onClick={executeScroll}>
									Contact
								</HoverLink>
								<HoverLink className="ml-6" onClick={toggleModal}>
									Download Resume
								</HoverLink>
							</div>
							{/* <button className="bg-black text-white py-2 px-8 mt-4 rounded-xl font-bold">Contact</button> */}
						</div>
						<div>
							<h3 className="font-bold text-xl">Skills</h3>
							<ul className="mt-6 mb-6">
								{mySkills.map((skill) => {
									return <Pill key={skill}>{skill}</Pill>;
								})}
							</ul>
						</div>
					</div>
				</section>
				<section className="bg-white text-black w-full h-screen pt-20" ref={projectSectionRef} id="projects">
					<h2 className="text-3xl font-bold text-center">PROJECTS</h2>
				</section>
				<section className="bg-stone-800 text-white h-screen w-full pt-10" id="contact" ref={contactSectionRef}>
					<div className="w-full text-center mb-16 pt-20">
						<h2 className="font-bold uppercase text-3xl ">Contact</h2>
						<p className="max-w-prose mx-auto mt-4">
							Shoot me a message! I&apos;d be delighted to hear from you. You can also find additional contact information on my resume. I'll respond to you as quickly as possible. Thanks!
						</p>
					</div>
					<Form />
				</section>
			</main>

			<footer className="h-[12rem] bg-black text-white flex justify-center">
				<div className='flex w-[50%] justify-between h-full'>
					<div className='mt-6 mb-6'>
						<h1 className='uppercase font-bold text-xl'>Sean Midgley</h1>
						<p>Developed and deployed by me</p>
					</div>
					<div>
						<div className='mt-6 mb-6'>
						<h1 className='uppercase font-bold text-xl w-52 text-center'>Social</h1>
						</div>
						<div className='flex justify-between'>
						<SocialIcon url="https://linkedin.com/in/seancmidgley" bgColor="white" style={{ height: 35, width: 35 }} />
						<SocialIcon url="https://github.com/Midge-dev" bgColor="white" style={{ height: 35, width: 35 }} />
						<SocialIcon url="https://twitter.com/midge_dev" bgColor="white" style={{ height: 35, width: 35 }} />
						</div>
					</div>
				</div>
				<div>
				<hr className='bg-white' />
				</div>
			</footer>
		</div>
	);
}

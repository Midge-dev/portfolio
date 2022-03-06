import Head from 'next/head';
import Pill from '../Components/Pill';
import Project from '../Components/Project';
import Form from '../Components/Form';
import HoverLink from '../Components/HoverLink';
import { executeScroll } from '../utils/scroll';
import { projects, socialLinks, mySkills } from '../utils/data';
import { SocialIcon } from 'react-social-icons';

const Home = () => {
	return (
		<div className="">
			<Head>
				<title>Sean Midgley</title>
				<meta name="title" content="Sean Midgley" />
				<meta name="description" content="Full-Stack Web Developer on a quest for glory" />

				{/* <!-- Open Graph / Facebook --> */}
				<meta property="og:type" content="website" />
				<meta property="og:url" content="https://www.seanmidgley.dev/" />
				<meta property="og:title" content="Sean Midgley" />
				<meta property="og:description" content="Full-Stack Web Developer on a quest for glory" />
				<meta property="og:image" content="../public/FB_IMG_1620331899007.jpg" />

				{/* <!-- Twitter --> */}
				<meta property="twitter:card" content="summary_large_image" />
				<meta property="twitter:url" content="https://www.seanmidgley.dev/" />
				<meta property="twitter:title" content="Sean Midgley" />
				<meta property="twitter:description" content="Full-Stack Web Developer on a quest for glory" />
				<meta property="twitter:image" content="../public/FB_IMG_1620331899007.jpg" />
				<link rel="icon" href="" />
			</Head>

			<main>
				<section id="top" className="bg-stone-200 h-screen w-full flex justify-center items-center ">
					<div className="text-center">
						<h1 className="font-sans text-7xl font-bold">Hi, I&apos;m Sean</h1>
						<p className="mt-8 font-bold">I&apos;m a Full-Stack Developer</p>
						<HoverLink onClick={executeScroll} id="contact">
							Get in touch!
						</HoverLink>
						<div className="mx-auto h-[12rem] w-52 flex justify-between items-end drop-shadow-md">
							{socialLinks.map((url) => {
								return (
									<SocialIcon
										key={url}
										url={url}
										bgColor="black"
										target="_blank"
										rel="noopener noreferrer"
									/>
								);
							})}
						</div>
						<div className="relative mt-48">
							<div className="arrow" onClick={(e) => executeScroll(e, 'aboutme')} />
						</div>
					</div>
				</section>
				<section className="bg-stone-200 h-full w-full pt-20" id="aboutme">
					<div className="w-full text-center mb-16 p-4">
						<h2 className="font-bold uppercase text-4xl">About Me</h2>
						<hr className="text-black w-[2%] mx-auto mt-4 mb-4" />
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
					<div className="grid md:grid-cols-2 mx-auto h-full w-full container py-12">
						<div className="md:pr-6 p-4">
							<h3 className="font-bold text-xl ">Get to know me!</h3>
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
							<div className="mt-8 flex gap-2 justify-between">
								<HoverLink className="" onClick={executeScroll} id="contact">
									Contact
								</HoverLink>
								<HoverLink download type="link" url={'/SeanMidgley-Dev.pdf'}>
									Download Resume
								</HoverLink>
							</div>
						</div>
						<div className="p-4">
							<h3 className="font-bold text-xl">Technical Skills</h3>
							<ul className="mt-6 mb-6">
								{mySkills.map((skill) => {
									return <Pill key={skill}>{skill}</Pill>;
								})}
							</ul>
						</div>
					</div>
				</section>
				<section className="bg-white text-black w-full md:h-auto mt-20 mb-20" id="projects">
					<div>
						<h2 className="text-4xl font-bold text-center">PROJECTS</h2>
						<hr className="bg-black w-[2%] mx-auto mt-4 mb-4" />
					</div>
					<div className="container mx-auto">
						<div className="flex flex-col gap-4 ">
							{projects.map((project) => {
								return (
									<Project
										url={project.url}
										caseStudyRoute={project.caseStudyRoute}
										key={project.url}
										fallbackImageSrc={project.fallBackImageSrc}
										title={project.title}
										description={project.description}
									/>
								);
							})}
						</div>
					</div>
				</section>
				<section className="bg-stone-800 text-white h-full w-full pb-48 px-4" id="contact">
					<div className="w-full text-center mb-16 pt-20">
						<h2 className="font-bold uppercase text-4xl ">Contact</h2>
						<hr className="w-[2%] mx-auto mt-4 mb-4 rounded" />
						<p className="max-w-prose mx-auto mt-4">
							Shoot me a message! I&apos;d be delighted to hear from you. You can also find additional
							contact information on my resume. I&apos;ll respond to you as quickly as possible. Thanks!
						</p>
					</div>
					<Form />
				</section>
			</main>
		</div>
	);
};

Home.displayName = 'Home';

export default Home;

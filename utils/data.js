export const mySkills = [
	'HTML',
	'CSS',
	'JavaScript',
	'JSX',
	'React',
	'React Native',
	'Redux',
	'NextJS',
	'jQuery',
	'NodeJS',
	'Bootstrap',
	'Tailwind CSS',
	'Netlify',
	'Git',
	'Bash',
	'Android',
	'IOS',
	'Linux',
	'Windows'
];

export const socialLinks = [
	'https://linkedin.com/in/seancmidgley',
	'https://github.com/Midge-dev',
	'https://twitter.com/midge_dev'
];

export const myProjects = {
	project1: {
		url: 'https://www.jackofallfades.co/',
		fallBackImageSrc: 'https://www.jackofallfades.co/beardedclear.1e2f24cb.png',
		projectHero: '/img/JOAF.png',
		title: 'Jack of All Fades',
		description:
			'This project was developed for a local business in the Las Vegas area in order to facilitate the booking and scheduling of styling services online. It integrates Square which allows users to choose available services and appointment times, reschedule appointments, cancel appointments, and also receive text message reminders.',
		overview:
			'The idea here was to implement an already existing Square account into an informative and stylish mobile-first web environment. This was accomplished with a combination of HTML, CSS, Bootstrap, and JavaScript. The project houses the embedded Square booking flow inside of a modal that is accessible from every page via the "Book Now" button. This way clients would easily be able to book an appointment. Once an appointment is made, the business is notified and automatically gets a Google Calender entry from Square. This simplified the way the business handled scheduling by allowing Square to do the heavy lifting and allowing clients to book, reschedule and cancel their own appointments.',
		toolsUsed: [ 'HTML', 'CSS', 'JavaScript', 'Bootstrap', 'Git', 'jQuery', 'Netlify' ],
		caseStudyRoute: '/projects/1'
	},
	project2: {
		url: 'https://www.edwardwells.net/',
		fallBackImageSrc: 'https://www.edwardwells.net/wells8.jpg',
		projectHero: '/img/Wells.png',
		title: 'In memory of Edward Wells',
		description:
			'This project was developed in memory of a dear friend. It allows loved ones and friends to dynamically leave comments, view photos, and support his family. A small project but one that was very personal for me.',
		overview: 'This project was a special one and was influenced by the family. It is a simple NextJS app that implements Supabase, an open source Firebase alternative, to serve as a backend database and storage solution. The purpose for this was to add the ability to post stories and memories and have them displayed as part of the page. NextJS, React, and Tailwind CSS were used to build the project and Netlify was used to deploy it.',
		toolsUsed: [ 'HTML', 'CSS', 'JavaScript', 'JSX', 'NextJS', 'React', 'Tailwind CSS', 'Git', 'Netlify', 'Supabase' ],
		caseStudyRoute: '/projects/2'
	}
};

export const projects = [ myProjects.project1, myProjects.project2 ];

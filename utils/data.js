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
		overview: 'The idea here was to implement an already existing Square account into an informative and decadent mobile-first web environment. This was accomplished with a combination of HTML, CSS, Bootstrap, and JavaScript. The project houses the embedded Square interface inside of a modal that is accessible from every page via the "Book Now" button. ',
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
		overview: 'Lorem blah blah',
		toolsUsed: [ 'HTML', 'CSS', 'JavaScript', 'JSX', 'NextJS', 'React', 'Tailwind CSS', 'Git', 'Netlify' ],
		caseStudyRoute: '/projects/2'
	}
};

export const projects = [ myProjects.project1, myProjects.project2 ];

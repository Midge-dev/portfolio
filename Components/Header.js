import Image from 'next/image';
import myImage from '../public/FB_IMG_1620331899007.jpg';
import HoverLink from './HoverLink';
import { executeScroll } from '../utils/scroll';

export default function Header({ refs }) {
	return (
		<header className="text-stone-200 flex flex-wrap md:flex-nowrap bg-stone-800 p-4 sticky top-0 justify-between items-center z-10">
			<div className="w-full">
				<a className="text-xl font-bold flex items-center md:pl-8 items-center justify-center">
					<Image src={myImage} width={56} height={56} className=" rounded-full" alt="Sean" />
					<span className="ml-4">Sean Midgley</span>
				</a>
			</div>
			<nav className="w-full">
				<ul className="flex md:flex-row flex-col gap-4 items-center ">
					<li>
						<HoverLink bgColor="bg-transparant" id="aboutme" onClick={executeScroll}>
							About Me
						</HoverLink>
					</li>
					<li>
						<HoverLink bgColor="bg-transparant" id="contact" onClick={executeScroll}>
							Contact
						</HoverLink>
					</li>
					<li>
						<HoverLink bgColor="bg-transparant" id="projects" onClick={executeScroll}>
							Projects
						</HoverLink>
					</li>
				</ul>
			</nav>
		</header>
	);
}

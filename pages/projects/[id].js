import React from 'react';
import { useRouter } from 'next/router';
import { projects, socialLinks, mySkills, joafSkills } from '/utils/data';
import HoverLink from '../../Components/HoverLink';
import Image from 'next/image';
import Pill from '../../Components/Pill';

// export async function getStaticProps(context) {
//     console.log(context);
//     return {
//       props: { message: "some post" },
//     };
//   }

// export async function getStaticPaths() {
//     const posts = ["1", "2", "a"];
//     const paths = posts.map((post) => ({
//       params: { slug: post },
//     }));

//     return { paths, fallback: false };
//   }

export default function Project1(props) {
	const router = useRouter();
	const { id } = router.query;
	return (
		<div className="h-auto bg-stone-100">
			<div className="w-full min-h-[400px] top py-20">
				<div className="container mx-auto">
					<h1 className="text-center font-bold text-4xl">{projects[0].title}</h1>
					<p className="font-bold py-8 text-center">{projects[0].description}</p>
					<div className="flex justify-center">
						<HoverLink>Check it out!</HoverLink>
					</div>
				</div>
			</div>
      <div className='flex justify-center drop-shadow-xl py-8'>
        <Image className='rounded-xl' src='/img/JOAF.png' width='960' height='540' alt='Jack of All Fades'/>
      </div>
      <div className='container mx-auto py-8'>
        <h1 className="text-center font-bold text-4xl">Project Overview</h1>
        <p className='py-8'>
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        </p>
        <h1 className="text-center font-bold text-4xl py-8">Tools Used</h1>
        <div className='flex flex-wrap justify-center'>
        {joafSkills.map((skill) => {
          return <Pill key={skill}>{skill}</Pill>
        })}
        </div>
      </div>
		</div>
	);
}

import React from 'react';
import { useRouter } from 'next/router';
import { myProjects } from '/utils/data';
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
  
  // Grab our project information for that page, depending on the `id` from router
  const project = myProjects[`project${id}`] // on page projects/1 `id` will be 1
  if(!project) {
    return null;
  }
  // Destructure the values we need 
  const { url='', title = '', description ='', overview = '', toolsUsed = [], projectHero = ''} = project; 
	return (
		<div className="h-auto bg-stone-100">
			<div className="w-full min-h-[400px] top py-20">
				<div className="container mx-auto px-4">
					<h1 className="text-center font-bold text-4xl">{title}</h1>
					<p className="font-bold py-8 text-center">{description}</p>
					<div className="flex justify-center">
						<HoverLink url={url} type={''}>Check it out!</HoverLink>
					</div>
				</div>
			</div>
			<div className="flex justify-center drop-shadow-xl py-8">
				<Image className="rounded-xl" src={projectHero} width="960" height="540" alt="Jack of All Fades" />
			</div>
			<div className="container mx-auto py-8">
				<h2 className="text-center font-bold text-4xl">Project Overview</h2>
				<p className="py-8">
					{overview}
				</p>
				<h2 className="text-center font-bold text-4xl py-8">Tools Used</h2>
				<div className="flex flex-wrap justify-center">
					{toolsUsed.map((skill) => {
						return <Pill key={skill}>{skill}</Pill>;
					})}
				</div>
			</div>
		</div>
	);
}

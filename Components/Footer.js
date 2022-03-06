import React from 'react'
import { SocialIcon } from 'react-social-icons';



export default function Footer() {
    
    const socialLinks = [
        'https://linkedin.com/in/seancmidgley',
        'https://github.com/Midge-dev',
        'https://twitter.com/midge_dev'
    ];

  return (
    <footer className="flex-col h-[auto] bg-black text-white flex justify-center p-4">
				<div className="container mx-auto">
					<div className="flex md:flex-row md:justify-between md:w-full flex-col sm:w-[50%] items-center h-full">
						<div className=" mb-6">
							<h2 className="uppercase font-bold text-xl">Sean Midgley</h2>
							<p>Developed and deployed by me</p>
							<br />
							<p>sean.midgley.dev@gmail.com</p>
						</div>
						<div>
							<div className="mt-6 mb-6">
								<h2 className="uppercase font-bold text-xl w-52 text-center">Social</h2>
							</div>
							<div className="flex justify-between">
								{socialLinks.map((url) => {
									return (
										<SocialIcon
											key={url}
											url={url}
											bgColor="white"
											style={{ height: 35, width: 35 }}
											target="_blank"
											rel="noopener noreferrer"
										/>
									);
								})}
							</div>
						</div>
					</div>
				</div>
			</footer>
  )
}

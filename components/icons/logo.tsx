import { SVGProps } from "react";

const Logo = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			xmlnsXlink="http://www.w3.org/1999/xlink"
			version="1.1"
			viewBox="12 145 350 1"
			{...props}>
			<defs>
				<clipPath id="clip_0">
					<path
						transform="matrix(.24,0,0,.24,0,0)"
						d="M0 0H1562.5V1562.5H0Z"
						fillRule="evenodd"
					/>
				</clipPath>
				<clipPath id="clip_1">
					<path
						transform="matrix(.24,0,0,.24,0,0)"
						d="M0 0H1562.5V1562.5H0Z"
						fillRule="evenodd"
					/>
				</clipPath>
				<clipPath id="clip_2">
					<path
						transform="matrix(.24,0,0,.24,0,0)"
						d="M0 0H1562.5V1562.5H0Z"
						fillRule="evenodd"
					/>
				</clipPath>
			</defs>
			<g clipPath="url(#clip_0)">
				<path
					transform="matrix(.74,0,0,.75,0,0)"
					d="M0 0H500V500H0Z"
					fill="none"
				/>
			</g>
			<g clipPath="url(#clip_1)">
				<path
					transform="matrix(.75,0,0,.75,0,0)"
					d="M0 0H500V500H0Z"
					fill="none"
				/>
			</g>
			<g clipPath="url(#clip_2)">
				<text
					xmlSpace="preserve"
					transform="matrix(.75 0 0 .75 0 159.75)"
					fontSize="53.46"
					fontFamily="PPNeueMachina">
					<tspan
						y="0"
						x="21.453125 74.886478 107.11876 0">
						WEB
					</tspan>
				</text>
				<text
					fill="#ff3131"
					xmlSpace="preserve"
					transform="matrix(.75 0 0 .75 0 159.75)"
					fontSize="53.46"
					fontFamily="PPNeueMachina">
					<tspan
						y="0"
						x="159.5625">
						&#x003c;
					</tspan>
				</text>
				<text
					xmlSpace="preserve"
					transform="matrix(.75 0 0 .75 0 159.75)"
					fontSize="53.46"
					fontFamily="PPNeueMachina">
					<tspan
						y="0"
						x="196.29688 232.6985 274.23164">
						TAG
					</tspan>
				</text>
				<text
					fill="#ff3131"
					xmlSpace="preserve"
					transform="matrix(.75 0 0 .75 0 159.75)"
					fontSize="53.46"
					fontFamily="PPNeueMachina">
					<tspan
						y="0"
						x="321.76564">
						&#x003e;
					</tspan>
				</text>
				<text
					xmlSpace="preserve"
					transform="matrix(.78 0 0 .75 0 159.75)"
					fontSize="53.46"
					fontFamily="PPNeueMachina">
					<tspan
						y="0"
						x="355.5 390.46693 420.77064 0">
						DEV
					</tspan>
				</text>
			</g>
		</svg>
	);
};

export default Logo;

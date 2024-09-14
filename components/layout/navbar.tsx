import Link from "next/link";
import Logo from "../icons/logo";

export const Navbar = () => {
	return (
		<nav className="bg-gradient-to-b from-slate-200  p-6 w-full ">
			<div className="flex items-center mx-auto ">
				<Link
					href="/"
					className="flex-1 p-1 ">
					<Logo className=" w-48 h-12 md:w-64 " />
				</Link>
				<div className="uppercase hover:*:underline  *:mx-2 text-lg font-bold  ">
					<Link href="#">progetti</Link>
					<Link href="#">contatti</Link>
				</div>
			</div>
		</nav>
	);
};

import { Framework } from "./(home)/_components/framework";
import { Hero } from "./(home)/_components/hero";
import { Story } from "./(home)/_components/story";
import { WhoIam } from "./(home)/_components/who-i-am";

export default function Home() {
	return (
		<>
			<Hero />
			<main className="w-full min-h-screen">
				<WhoIam />
				<Story />
				<Framework />
			</main>
		</>
	);
}

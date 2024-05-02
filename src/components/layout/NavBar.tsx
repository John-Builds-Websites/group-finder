import { Button } from "../ui/button";
import Container from "./Container";
import NextLink from "next/link";

export default function NavBar() {
	return (
		<div className="sticky z-50 t-0 inset-x-0 h-16 bg-indigo-500 text-white">
			<header className="relative ">
				<Container>


					<div className="flex items-center justify-between h-16 w-full">

						<NextLink href={"/"} className="cursor-pointer px-0 ">
							<span className="font-black text-3xl">
								Group Finder
							</span>
						</NextLink>

					</div>

				</Container>
			</header>
		</div>
	);
}

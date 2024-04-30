import { Button } from "../ui/button";
import Container from "./Container";
import NextLink from "next/link";

export default function NavBar() {
	return (
		<div className="bg-white sticky z-50 t-0 inset-x-0 h-16 ">
			<header className="relative bg-white border-b border-gray-100">
				<Container>
					<div className="">

						<div className="flex items-center justify-between h-16">
							
								{/* TODO Mobile Nav */}
								<NextLink href={"/"} className="cursor-pointer px-0">
									Group Finder
								</NextLink>
						
						</div>
					</div>
				</Container>
			</header>
		</div>
	);
}

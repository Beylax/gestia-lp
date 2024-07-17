import Image from "next/image";
import Link from "next/link";
import Container from "./container";

export default function Header() {
	return (
		<header className="absolute top-0 left-0 right-0 z-50">
			<Container className="py-4">
				<nav className="flex items-center gap-20">
					<Link href="/" className="relative flex items-center gap-2">
						<Image src={"/images/logo.png"} width={48} height={48} alt="GESTIA" />
						<span className="uppercase text-white text-2xl font-semibold">
							{"GESTIA"}
						</span>
					</Link>

					<div className="grow flex items-center justify-between text-white">
						<ul className="flex items-center gap-5">
							<li>
								<Link href={"#TODO:"}>{"Pricing"}</Link>
							</li>
							<li>
								<Link href={"#TODO:"}>{"Features"}</Link>
							</li>
							<li>
								<Link href={"#TODO:"}>{"FAQ"}</Link>
							</li>
						</ul>
						<div className="flex items-center gap-5">
							<button className="btn-primary">
								Contact Us
							</button>
						</div>
					</div>
				</nav>
			</Container>
		</header>
	)
}
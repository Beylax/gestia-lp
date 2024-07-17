import Link from "next/link";
import Image from "next/image";
import Container from "./container";
import Icon from "./icon";

export default function Footer() {
	return (
		<footer className="bg-dark">
			<Container className="py-4 border-t">
				<nav className="flex items-center justify-between text-white">
					<Link href="/" className="relative flex items-center gap-2">
						<Image src={"/images/logo.png"} width={48} height={48} alt="GESTIA" />
						<span className="uppercase text-white text-2xl font-bold">
							{"GESTIA"}
						</span>
					</Link>

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

					<ul className="flex items-center gap-5">
						<li>
							<Link href={"#TODO:"}>
								<Icon icon="instagram" fill="white" />
							</Link>
						</li>
						<li>
							<Link href={"#TODO:"}>
								<Icon icon="instagram" fill="white" />
							</Link>
						</li>
						<li>
							<Link href={"#TODO:"}>
								<Icon icon="instagram" fill="white" />
							</Link>
						</li>
					</ul>
				</nav>
			</Container>
		</footer>
	)
}
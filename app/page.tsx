import Container from "@/components/container";
import Image from "next/image";

export default function Home() {
	return (
		<main className="relative">
			{/* HERO */}
			<section className="relative min-h-screen bg-dark w-full overflow-hidden flex items-center isolate">
				<Image className="absolute bottom-[200px] left-[0px] rotate-[-9deg] z-[-1] opacity-10" src={"/images/logo.svg"} width={1000} height={1000} alt="GESTIA" />
				<Container>
					<div className="w-1/2 text-white">
						<h1 className="text-5xl font-bold">
							{"Monitor your business on real-time dashboard"}
						</h1>
						<p className="my-10 text-slate-400">
							{"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum nisi aliquet volutpat pellentesque volutpat est. Sapien in etiam vitae nibh nunc mattis imperdiet sed nullam."}
						</p>
						<button className="btn-primary">
							{"Try for free"}
						</button>
					</div>
				</Container>
				<div className="absolute right-0 top-[50%] translate-y-[-50%] w-[40%] aspect-[4/3] bg-white rounded-xl shadow-xl z-20">
				</div>
				<div className="absolute left-0 right-0 bottom-0 border-b-[290px] border-l-[100vw] border-x-transparent border-t-transparent border-b-white z-10">
				</div>
			</section>

			{/* FEATURES */}
			<section className="py-20">
				<Container>
					<h2 className="text-5xl font-bold text-center mb-10">
						Main Features
					</h2>
					<p className="text-center font-light">
						{"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum nisi aliquet volutpat pellentesque volutpat est. Sapien in etiam vitae nibh nunc mattis imperdiet sed nullam. Vitae et, tortor pulvinar risus pulvinar sit amet. Id vel in nam malesuada."}
					</p>
				</Container>
			</section>

			<section className="relative bg-dark w-full overflow-hidden flex items-center isolate pt-80 pb-20">
				<Container>
					<div className="text-white">
						<h2 className="text-5xl font-bold text-center">
							{"Pricing Plans"}
						</h2>
						<p className="my-10 text-slate-400 text-center">
							{"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum nisi aliquet volutpat pellentesque volutpat est."}
						</p>

						<div className="grid grid-cols-3 gap-20 items-stretch">
							{/* TODO: Refactor in card component */}
							<div className="p-10 rounded-xl bg-white text-center text-black">
								<header>
									<h2 className="text-2xl font-bold">
										{"Starter"}
									</h2>
									<h5 className="text-light">{"up to 3 users"}</h5>
								</header>
								<hr className="my-5"></hr>
								<main>
									<h2 className="font-semibold">
										<span className="text-xl">{"€"}</span>
										<span className="text-6xl">{"1000"}</span>
									</h2>
									<h6>{"una tantum"}</h6>
									<button className="btn-primary mt-10">
										{"Ordina"}
									</button>
								</main>
							</div>
							<div className="relative p-10 rounded-xl bg-white text-center text-black outline outline-4 outline-primary outline-offset-4">
								<header>
									<h2 className="text-2xl font-bold">
										{"Starter"}
									</h2>
									<h5 className="text-light">{"up to 3 users"}</h5>
								</header>
								<hr className="my-5"></hr>
								<main>
									<h2 className="font-semibold">
										<span className="text-xl">{"€"}</span>
										<span className="text-6xl">{"1000"}</span>
									</h2>
									<h6>{"una tantum"}</h6>
									<button className="btn-primary mt-10">
										{"Ordina"}
									</button>
								</main>
							</div>
							<div className="p-10 rounded-xl bg-white text-center text-black">
								<header>
									<h2 className="text-2xl font-bold">
										{"Starter"}
									</h2>
									<h5 className="text-light">{"up to 3 users"}</h5>
								</header>
								<hr className="my-5"></hr>
								<main>
									<h2 className="font-semibold">
										<span className="text-xl">{"€"}</span>
										<span className="text-6xl">{"1000"}</span>
									</h2>
									<h6>{"una tantum"}</h6>
									<button className="btn-primary mt-10">
										{"Ordina"}
									</button>
								</main>
							</div>
						</div>
					</div>
				</Container>
				<div className="absolute left-0 right-0 top-0 border-b-[290px] border-l-[100vw] border-x-transparent border-t-transparent border-b-white rotate-180 z-10">
				</div>
			</section>
		</main>
	);
}

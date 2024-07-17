import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Gestia LP",
	description: "Gestia offre soluzioni personalizzate per il set up di HubSpot: gestione dipendenti, creazione siti web e attività di post vendita. Acquista i nostri servizi singolarmente o in pacchetto per ottimizzare il tuo business. Affidati a Gestia per una gestione aziendale semplificata e professionale.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="it">
			<body className={montserrat.className}>
				<Header />
				{children}
				<Footer />
			</body>
		</html>
	);
}

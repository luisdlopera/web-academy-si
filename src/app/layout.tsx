import type { Metadata } from 'next';
import './globals.css';
import { Providers } from './providers';


import { Urbanist } from 'next/font/google';

const urbanistFont = Urbanist({ 
	subsets: ['latin'],
	variable: '--font-urbanist',
	weight: ['400', '500', '600', '700', '800', '900'], 
});

export const metadata: Metadata = {
	title: 'Academy SI',
	description: 'Aplicacion educativa para el colegio',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='es'>
			<body className={urbanistFont.className}>
				<Providers>
					{children}	
				</Providers>
			</body>
		</html>
	);
}

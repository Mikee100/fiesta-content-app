import './globals.css';
import type { Metadata } from 'next';
export const metadata: Metadata = { title:'Fiesta House Content Studio', description:'AI content automation for Fiesta House Maternity', icons:{icon:'/favicon-20260809.ico'} };
export default function RootLayout({children}:{children:React.ReactNode}) { return <html lang="en"><body>{children}</body></html>; }

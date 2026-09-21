// layout.js
import './globals.css';

export const metadata = {
title: 'Luce Performance Lab | E-Commerce Engineering',
description: 'High-performance e-commerce agency, conversion optimization, and data engineering.',
};

export default function RootLayout({ children }) {
return (
<html lang="en">
<body className="bg-neutral-950 text-neutral-100 antialiased">
{children}
</body>
</html>
);
}

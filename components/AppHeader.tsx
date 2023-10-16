'use client';

import { ConnectButton } from '@rainbow-me/rainbowkit';
import Link from 'next/link';

export default function AppHeader() {
    return (

            <header className="header flex w-full flex-wrap items-center justify-between px-4 py-2 md:px-12">
                <nav className="text-lg font-bold">
                    <Link href="/">{process.env.NEXT_PUBLIC_APP_NAME ?? 'App'}</Link>
                </nav>

                <ConnectButton accountStatus={{ smallScreen: 'avatar', largeScreen: 'full' }} />
            </header>
    );
}

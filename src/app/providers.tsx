'use client';

import { useRouter } from 'next/navigation';
// Sources
import { NextUIProvider } from '@nextui-org/system';

interface Props {
    children: React.ReactNode;
};

function Providers({ children }: Props) {
    const router = useRouter();

    return (
        <NextUIProvider navigate={router.push}>
            {children}
        </NextUIProvider>
    )
};

export { Providers };
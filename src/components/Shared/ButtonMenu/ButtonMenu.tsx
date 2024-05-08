'use client';

import { Button, Link } from '@nextui-org/react';
import { ChevronRight, Home } from 'lucide-react';
import { useEffect, useState } from 'react';

type ButtonMenuProps = {
    ButtonLink?: string;
    startContent: React.ReactNode;
    endContent: React.ReactNode;
    content: string;
    isActive?: boolean;
    iconColor?: string;
    iconSize?: string;
}

const ButtonMenu = ({ButtonLink, startContent, endContent, content, isActive }: ButtonMenuProps) => {

    const [newClass, setNewClass] = useState<string>('');

    useEffect(() => {
        if (isActive === true) {
            setNewClass(`bg-primary w-full text-white text-base`)
        }
        if (isActive === false) {
            setNewClass(`bg-secondary border text-base`)
        }
    }, [isActive])
    
    return (
        <>
            <Button
                href={ButtonLink}
                as={Link}
                className={`${newClass} w-56 justify-between font-semibold `}
                startContent={startContent}
                endContent={endContent}
            >
                {content}
            </Button>
        </>
    )
};

export { ButtonMenu };

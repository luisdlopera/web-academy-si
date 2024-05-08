'use client';

import { Link } from '@nextui-org/react';
import { BadgeCheck, CalendarClock, ChevronRight, Home, ListChecks, Notebook } from 'lucide-react';
import { ButtonMenu } from '@/components/Shared/ButtonMenu'
import { useEffect, useState } from 'react';
import { usePathname  } from 'next/navigation';

const AdminMenu = () => {

    const currentRoute = usePathname();

    const [isStudentsActive, setIsStudentsActive] = useState(false);
    const [isCoursesActive, setIsCoursesActive] = useState(false);
    const [isScheduleActive, setIsScheduleActive] = useState(false);
    const [isRatingsActive, setIsRatingsActive] = useState(false);
    const [isAssistanceActive, setIsAssistanceActive] = useState(false);

    const colorWhite = '#ffffff';
    const colorBlue = '#002972';

    useEffect(() => {
        switch (currentRoute) {
            case '/admin':
                setIsStudentsActive(true);
                setIsCoursesActive(false);
                setIsScheduleActive(false);
                setIsRatingsActive(false);
                setIsAssistanceActive(false);
                break;
            case '/admin/courses':
                setIsStudentsActive(false);
                setIsCoursesActive(true);
                setIsScheduleActive(false);
                setIsRatingsActive(false);
                setIsAssistanceActive(false);
                break;
            case '/admin/schedule':
                setIsStudentsActive(false);
                setIsCoursesActive(false);
                setIsScheduleActive(true);
                setIsRatingsActive(false);
                setIsAssistanceActive(false);
                break;
            case '/admin/ratings':
                setIsStudentsActive(false);
                setIsCoursesActive(false);
                setIsScheduleActive(false);
                setIsRatingsActive(true);
                setIsAssistanceActive(false);
                break;
            case '/admin/assistance':
                setIsStudentsActive(false);
                setIsCoursesActive(false);
                setIsScheduleActive(false);
                setIsRatingsActive(false);
                setIsAssistanceActive(true);
                break;
            default:
                setIsStudentsActive(false);
                setIsCoursesActive(false);
                setIsScheduleActive(false);
                setIsRatingsActive(false);
                setIsAssistanceActive(false);
        }
    }, [currentRoute]);

    return (
        <header className='fixed w-1/4 bg-white h-screen flex flex-col gap-4 items-center justify-start p-10'>
            <Link href='/admin'>
                <h1 className='w-full font-black text-3xl mb-14'>ACADEMY SI</h1>
            </Link>
            <ButtonMenu
                ButtonLink='/admin'
                startContent={<Home color={isStudentsActive ? colorWhite : colorBlue} />}
                endContent={<ChevronRight color={isStudentsActive ? colorWhite : colorBlue} size='15' />}
                content={'Inicio'}
                isActive={isStudentsActive}
            />
            <ButtonMenu
                ButtonLink='/admin/users'
                startContent={<Notebook color={isCoursesActive ? colorWhite : colorBlue} />}
                endContent={<ChevronRight color={isCoursesActive ? colorWhite : colorBlue} size='15' />}
                content={'Usuarios'}
                isActive={isCoursesActive}
            />
            <ButtonMenu
                ButtonLink='/admin/subjets'
                startContent={<CalendarClock color={isScheduleActive ? colorWhite : colorBlue} />}
                endContent={<ChevronRight color={isScheduleActive ? colorWhite : colorBlue} size='15' />}
                content={'Asignaturas'}
                isActive={isScheduleActive}
            />
            <ButtonMenu
                ButtonLink='/admin/groups'
                startContent={<BadgeCheck color={isRatingsActive ? colorWhite : colorBlue} />}
                endContent={<ChevronRight color={isRatingsActive ? colorWhite : colorBlue} size='15' />}
                content={'Grupos'}
                isActive={isRatingsActive}
            />
            <ButtonMenu
                ButtonLink='/admin/schedule'
                startContent={<ListChecks color={isAssistanceActive ? colorWhite : colorBlue} />}
                endContent={<ChevronRight color={isAssistanceActive ? colorWhite : colorBlue} size='15' />}
                content={'Horario'}
                isActive={isAssistanceActive}
            />
            <ButtonMenu
                ButtonLink='/admin/periods'
                startContent={<ListChecks color={isAssistanceActive ? colorWhite : colorBlue} />}
                endContent={<ChevronRight color={isAssistanceActive ? colorWhite : colorBlue} size='15' />}
                content={'Periodos'}
                isActive={isAssistanceActive}
            />
        </header>
    )
}

export { AdminMenu }

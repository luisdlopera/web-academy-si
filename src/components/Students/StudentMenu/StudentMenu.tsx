'use client';

import { Link } from '@nextui-org/link';
import { BadgeCheck, CalendarClock, ChevronRight, Home, ListChecks, Notebook } from 'lucide-react';
import { ButtonMenu } from '@/components/Shared/ButtonMenu';
import { useEffect, useState } from 'react';
import { usePathname  } from 'next/navigation';

const StudentMenu = () => {

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
            case '/students':
                setIsStudentsActive(true);
                setIsCoursesActive(false);
                setIsScheduleActive(false);
                setIsRatingsActive(false);
                setIsAssistanceActive(false);
                break;
            case '/students/courses':
                setIsStudentsActive(false);
                setIsCoursesActive(true);
                setIsScheduleActive(false);
                setIsRatingsActive(false);
                setIsAssistanceActive(false);
                break;
            case '/students/schedule':
                setIsStudentsActive(false);
                setIsCoursesActive(false);
                setIsScheduleActive(true);
                setIsRatingsActive(false);
                setIsAssistanceActive(false);
                break;
            case '/students/ratings':
                setIsStudentsActive(false);
                setIsCoursesActive(false);
                setIsScheduleActive(false);
                setIsRatingsActive(true);
                setIsAssistanceActive(false);
                break;
            case '/students/assistance':
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
            <Link href='/students'>
                <h1 className='w-full font-black text-3xl mb-14'>ACADEMY SI</h1>
            </Link>
            <ButtonMenu
                ButtonLink='/students'
                startContent={<Home color={isStudentsActive ? colorWhite : colorBlue} />}
                endContent={<ChevronRight color={isStudentsActive ? colorWhite : colorBlue} size='15' />}
                content={'Inicio'}
                isActive={isStudentsActive}
            />
            <ButtonMenu
                ButtonLink='/students/courses'
                startContent={<Notebook color={isCoursesActive ? colorWhite : colorBlue} />}
                endContent={<ChevronRight color={isCoursesActive ? colorWhite : colorBlue} size='15' />}
                content={'Asignaturas'}
                isActive={isCoursesActive}
            />
            <ButtonMenu
                ButtonLink='/students/schedule'
                startContent={<CalendarClock color={isScheduleActive ? colorWhite : colorBlue} />}
                endContent={<ChevronRight color={isScheduleActive ? colorWhite : colorBlue} size='15' />}
                content={'Horario'}
                isActive={isScheduleActive}
            />
            <ButtonMenu
                ButtonLink='/students/ratings'
                startContent={<BadgeCheck color={isRatingsActive ? colorWhite : colorBlue} />}
                endContent={<ChevronRight color={isRatingsActive ? colorWhite : colorBlue} size='15' />}
                content={'Calificaciones'}
                isActive={isRatingsActive}
            />
            <ButtonMenu
                ButtonLink='/students/assistance'
                startContent={<ListChecks color={isAssistanceActive ? colorWhite : colorBlue} />}
                endContent={<ChevronRight color={isAssistanceActive ? colorWhite : colorBlue} size='15' />}
                content={'Asistencia'}
                isActive={isAssistanceActive}
            />
        </header>
    )
}

export { StudentMenu }

import { StudentHeader, StudentMenu } from "@/components/Students";

export const metadata = {
    title: 'Profesores',
};
export default function adminLayout({
    children
}: {
    children: React.ReactNode;
}) {
    return (
        <div className='w-full h-full flex justify-between gap-5'>
            <a href='/admin' className='fixed top-0 w-full h-2 bg-blue z-10'></a>
            <div className='w-1/4'>
                <StudentMenu />
            </div>
            <StudentHeader>
                <div className='w-full'>
                    {children}
                </div>
            </StudentHeader>
        </div>
    );
}
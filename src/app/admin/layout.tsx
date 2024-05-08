import { AdminHeader, AdminMenu } from '@/components/Admin';

export const metadata = {
    title: 'Administración',
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
                <AdminMenu />
            </div>
            <AdminHeader>
                <div className='w-full'>
                    {children}
                </div>
            </AdminHeader>
        </div>
    );
}
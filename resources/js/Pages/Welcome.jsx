import { Link, Head } from '@inertiajs/react';
import ApplicationLogo from '@/Components/ApplicationLogo';

export default function Welcome({ auth, laravelVersion, phpVersion }) {
    const handleImageError = () => {
        document.getElementById('screenshot-container')?.classList.add('!hidden');
        document.getElementById('docs-card')?.classList.add('!row-span-1');
        document.getElementById('docs-card-content')?.classList.add('!flex-row');
        document.getElementById('background')?.classList.add('!hidden');
    };

    return (
        <>
            <Head title="Welcome" />
            <div className="flex flex-col min-h-screen bg-gray-50 text-black/50 dark:bg-black dark:text-white/50">
                <div className="flex flex-col flex-grow items-center selection:bg-[#FF2D20] selection:text-white">
                    <div className="relative w-full max-w-2xl px-6 lg:max-w-7xl flex-grow">
                        <header className="flex items-center justify-between gap-2 py-10">
                            <div className="flex justify-start text-black text-4xl font-bold">
                                <Link href="/">
                                    <ApplicationLogo className="w-20 h-20 fill-current text-gray-500" />
                                </Link>
                            </div>
                            <nav className="flex space-x-4">
                                {auth.user ? (
                                    <Link
                                        href={route('dashboard')}
                                        className="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                                    >
                                        Dashboard
                                    </Link>
                                ) : (
                                    <>
                                        <Link
                                            href={route('login')}
                                            className="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                                        >
                                            Log in
                                        </Link>
                                        <Link
                                            href={route('register')}
                                            className="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                                        >
                                            Register
                                        </Link>
                                    </>
                                )}
                            </nav>
                        </header>

                        <main className="flex-grow mt-6">
                            <div className="flex flex-col items-center justify-center">
                                <h1 className="text-4xl font-bold text-center mb-4">Welcome to ToDo App</h1>
                                <p className="text-lg text-center max-w-lg">
                                Manage your tasks efficiently with ToDo App. Whether you're organizing personal errands or planning long-term projects, our intuitive interface helps you stay on top of your tasks effortlessly.
                                </p>
                            </div>
                        </main>
                    </div>

                    <footer className="bg-gray-100 text-black dark:bg-gray-800 dark:text-white/70 py-4 mt-auto w-full">
                        <div className="container mx-auto text-center">
                            <p>&copy; 2024 ToDo App. All rights reserved.</p>
                        </div>
                    </footer>
                </div>
            </div>
        </>
    );
}
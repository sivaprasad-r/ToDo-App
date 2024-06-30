import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";

export default function Dashboard({ auth }) {
    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Dashboard" />
            <div className="py-12 max-w-3xl mx-auto sm:px-6 lg:px-8">
                <form>
                    <div className="flex gap-3 items-center justify-center mb-6">
                        <input
                            type="text"
                            placeholder="Enter todo here"
                            className="py-2 px-3 focus:outline-none focus:ring-0 bg-white/50 overflow-hidden shadow-sm sm:rounded-lg border border-gray-300 w-full sm:w-128"
                        />
                        <button className="py-2 px-4 bg-white/90 overflow-hidden shadow-sm rounded-md border border-gray-300">
                            Save
                        </button>
                    </div>
                </form>
                <div className="flex gap-3 px-3 py-2 bg-white/90 rounded-md border border-gray-300">
                    <input 
                        type="checkbox" 
                        id="completed" 
                        className="appearance-none w-4 h-4 border-2 border-grey-300 rounded-sm bg-white mt-1" />
                    <div className="flex justify-between items-center w-full sm:w-128">
                        <h3>Get Milk</h3>
                        <div>Edit</div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}

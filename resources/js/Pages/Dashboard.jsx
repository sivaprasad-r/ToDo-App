import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, useForm, router, usePage } from "@inertiajs/react";
import { LuPencil } from "react-icons/lu";


export default function Dashboard({ auth }) {

    const { errors } = usePage().props;

   const { data, setData, reset } = useForm({
       name: "",
   });

    const storeTodo = (e) => {
        e.preventDefault();
        router.post("/todo", data, {
            onSuccess: () => {
                reset();
            }
        });
    };

    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Dashboard" />
            <div className="py-12 max-w-3xl mx-auto sm:px-6 lg:px-8">
                <form onSubmit={storeTodo}>
                    <div className="flex gap-3 items-center justify-center">
                        <input
                            type="text"
                            placeholder="Enter todo here"
                            className="py-2 px-3 focus:outline-none focus:ring-0 bg-white/50 overflow-hidden shadow-sm sm:rounded-lg border border-gray-300 w-full sm:w-128"
                            onChange={(e)=>setData('name', e.target.value)}
                            value={data.name}
                        />
                        <button className="py-2 px-4 bg-white/90 overflow-hidden shadow-sm rounded-md border border-gray-300">
                            Save
                        </button>
                    </div>
                    {errors.name && <p className="text-red-700 text-sm">{errors.name}</p>}
                </form>
                <div className="flex gap-3 px-3 py-2 bg-white/90 rounded-md border border-gray-300 mt-6">
                    <input 
                        type="checkbox" 
                        id="completed" 
                        className="appearance-none w-4 h-4 border-2 border-grey-300 rounded-sm bg-white mt-1" />
                    <div className="flex justify-between items-center w-full sm:w-128">
                        <h3>Get Milk</h3>
                        <div><LuPencil /></div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}

import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, useForm, usePage, router } from "@inertiajs/react";
import { LuPencil } from "react-icons/lu";
import { FaTrash } from "react-icons/fa";
import { useState } from "react";

export default function Dashboard({ auth, todos }) {
    const { errors } = usePage().props;
    const [editMode, setEditMode] = useState(null);
    const [editData, setEditData] = useState({ name: "", is_completed: false });

    const { data, setData, reset } = useForm({
        name: "",
    });

    const storeTodo = (e) => {
        e.preventDefault();
        router.post("/todo", data, {
            onSuccess: () => {
                reset();
            },
        });
    };

    const updateTodo = (id, updatedData) => {
        router.put(`/todo/${id}`, updatedData);
    };

    const deleteTodo = (id) => {
        router.delete(`/todo/${id}`);
    };

    const handleCheckboxChange = (todo) => {
        const updatedData = {
            ...todo,
            is_completed: !todo.is_completed,
        };
        updateTodo(todo.id, updatedData);
    };

    const startEditing = (todo) => {
        setEditMode(todo.id);
        setEditData({ name: todo.name, is_completed: todo.is_completed });
    };

    const handleEditChange = (e) => {
        setEditData({ ...editData, [e.target.name]: e.target.value });
    };

    const submitEdit = (e) => {
        e.preventDefault();
        updateTodo(editMode, editData);
        setEditMode(null);
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
                            onChange={(e) => setData("name", e.target.value)}
                            value={data.name}
                        />
                        <button className="flex items-center justify-center py-2 px-4 bg-white/90 overflow-hidden shadow-sm rounded-md border border-gray-300">
                            Save
                        </button>
                    </div>
                    {errors.name && <p className="text-red-700 text-sm">{errors.name}</p>}
                </form>

                {todos.map((todo) => (
                    <div
                        key={todo.id}
                        className={`flex gap-3 px-3 py-2 bg-white/90 rounded-md border border-gray-300 mt-6 ${todo.is_completed ? 'line-through' : ''}`}
                    >
                        <input
                            type="checkbox"
                            id={`completed-${todo.id}`}
                            className="appearance-none w-4 h-4 border-2 border-grey-300 rounded-sm bg-white mt-1"
                            checked={todo.is_completed}
                            onChange={() => handleCheckboxChange(todo)}
                        />
                        <div className="flex justify-between items-center w-full sm:w-128">
                            {editMode === todo.id ? (
                                <form onSubmit={submitEdit} className="flex w-full items-center">
                                    <input
                                        type="text"
                                        name="name"
                                        value={editData.name}
                                        onChange={handleEditChange}
                                        className="py-2 px-3 focus:outline-none focus:ring-0 bg-white/50 overflow-hidden shadow-sm sm:rounded-lg border border-gray-300 w-full sm:w-128"
                                    />
                                    <button
                                        type="submit"
                                        className="flex items-center justify-center py-2 px-4 bg-white/90 overflow-hidden shadow-sm rounded-md border border-gray-300 ml-2"
                                    >
                                        Update
                                    </button>
                                </form>
                            ) : (
                                <>
                                    <h3 className={todo.is_completed ? 'line-through' : ''}>{todo.name}</h3>
                                    <div className="flex items-center gap-3">
                                        <button onClick={() => startEditing(todo)} className="text-blue-600">
                                            <LuPencil />
                                        </button>
                                        <button onClick={() => deleteTodo(todo.id)} className="text-red-600 ml-2">
                                            <FaTrash />
                                        </button>
                                    </div>
                                </>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </AuthenticatedLayout>
    );
}

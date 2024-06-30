<?php

namespace App\Http\Controllers;

use App\Models\Todo;
use Illuminate\Http\Request;
use Inertia\Inertia;

class TodoController extends Controller
{   
    public function index()
    {
        $todos = Todo::all();
        return Inertia::render('Dashboard', ['todos' => $todos]);
    }

    public function store(Request $request)
    {
        $data = $request->validate([
            'name' => 'required',
            'is_completed' => 'boolean'
        ], [
            'name.required' => "Text field is empty."
        ]);

        Todo::create($data);
        return redirect()->back();
    }

    public function update(Request $request, Todo $todo)
    {
        $data = $request->validate([
            'name' => 'required',
            'is_completed' => 'boolean'
        ]);

        $todo->update($data);
        return redirect()->back();
    }

    public function destroy(Todo $todo)
    {
        $todo->delete();
        return redirect()->back();
    }
}

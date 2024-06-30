<?php

namespace App\Http\Controllers;

use App\Models\Todo;
use Illuminate\Http\Request;
use Inertia\Inertia;

class TodoController extends Controller
{
    public function store(Request $request){
        $data = $request->validate([
            'name' => 'required',
            'is_completed' => 'boolean'
        ],
        [
            'name.required' => "Text field is empty."
        ]
    );

        Todo::create($data);
    }
}

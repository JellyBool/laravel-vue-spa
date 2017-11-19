<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ProfileController extends Controller
{
    public function update()
    {
        request()->user()->update(request()->only('name','email'));

        return response()->json(['status' => true]);
    }
}

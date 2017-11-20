<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class PasswordController extends Controller
{
    public function update()
    {
        request()->user()->update(['password' => bcrypt(request('password'))]);

        return response()->json(['status' => true]);
    }
}

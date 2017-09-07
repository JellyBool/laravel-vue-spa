<?php

use Illuminate\Http\Request;

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

// api/posts

Route::get('/posts','PostsController@index');
Route::get('/posts/{post}','PostsController@show');

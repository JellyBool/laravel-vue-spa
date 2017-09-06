<?php

Route::any('{all}', function () {
    return view('layouts.master');
})->where(['all' => '.*']);

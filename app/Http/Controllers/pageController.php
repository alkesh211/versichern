<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\page;

use App\Http\Requests;

class pageController extends Controller
{
    public function create(Request $request)
    {
        $this->validate($request, [
            'name'  => 'required',
            'topic' => 'required',
        ]);

        $slider = new page();
        $slider->name = $request->input('name');
        $slider->topic = $request->input('topic');
        $slider->save();
        return response()->success(compact('page'));
    }
    public function index()
    {
	    echo 'hi';exit;
        //$slider = DB::table('sliders')->get();
        $slider = slider::all();
        return response()->success(compact('block'));
    }
}
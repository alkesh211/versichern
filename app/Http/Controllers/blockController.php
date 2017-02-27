<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\block;

use App\Http\Requests;

class blockController extends Controller
{
    public function create(Request $request)
    {
        $this->validate($request, [
            'name'  => 'required',
            'topic' => 'required',
        ]);

        $slider = new block();
        $slider->name = $request->input('name');
        $slider->topic = $request->input('topic');
        $slider->save();
        return response()->success(compact('block'));
    }
    public function index()
    {
	    $slider = block::all();
        return response()->success(compact('block'));
    }
}

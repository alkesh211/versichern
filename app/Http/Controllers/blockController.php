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

        echo 'hi';exit;
        $slider = new Slider();
        $slider->name = $request->input('name');
        $slider->topic = $origi_file_name;
        $slider->save();
        return response()->success(compact('slider'));
    }
    public function index()
    {
	echo 'hi';exit;
        //$slider = DB::table('sliders')->get();
        $slider = slider::all();
        return response()->success(compact('slider'));
    }
}

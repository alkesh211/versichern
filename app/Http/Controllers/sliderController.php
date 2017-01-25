<?php

namespace App\Http\Controllers;

use App\slider;
use Illuminate\Http\Request;

use App\Http\Requests;

class SliderController extends Controller
{
    public function create(Request $request)
    {
        /*$this->validate($request, [
            'name'  => 'required',
            'topic' => 'required',
        ]);*/
        /*echo $request->hasFile('topic');
        echo $request->file('topic');
        echo '<pre>';
        exit;*/
        print_r($request->all());
        print_r(get_class_methods($request));
        exit;
        echo $request->file("topic");
        if ($request->hasFile('topic')) {
            echo $request->file('topic');
        }
        exit;
        $slider = new Slider();
        $slider->name = $request->input('name');
        $slider->topic = $request->input('topic');
        $slider->save();

        return response()->success(compact('slider'));
    }
    public function index()
    {

        //$slider = DB::table('sliders')->get();
        $slider = slider::all();

        return response()->success(compact('slider'));
    }
}

<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Cviebrock\EloquentSluggable\SluggableInterface;
use Cviebrock\EloquentSluggable\SluggableTrait;
use Illuminate\Support\Facades\Input;
use Illuminate\Database\Eloquent\Model;
use Intervention\Image\ImageServiceProvider;
use Intervention\Image\ImageManager;
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
        $page = page::all();
        return response()->success(compact('page'));
    }
}

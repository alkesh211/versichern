<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;

class CreatePostController extends Controller
{
    public function create(Request $request)
    {
        $this->validate($request, [
        'name'  => 'required',
        'topic' => 'required',
        ]);
    
        $post = new Post;
        $post->name = $request->input('name');
        $post->topic = $request->input('topic');
        $post->save();
    
        return response()->success(compact('post'));
    }
}

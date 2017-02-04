<?php

namespace App\Http\Controllers;

use App\slider;
use Image;
use Illuminate\Http\Request;
use Cviebrock\EloquentSluggable\SluggableInterface;
use Cviebrock\EloquentSluggable\SluggableTrait;
use Illuminate\Support\Facades\Input;
use Illuminate\Database\Eloquent\Model;
use Intervention\Image\ImageServiceProvider;
use Intervention\Image\ImageManager;

use App\Http\Requests;

class SliderController extends Controller
{
    public function create(Request $request)
    {
        $this->validate($request, [
            'name'  => 'required',
            'topic' => 'required',
        ]);
        /*$extension = $img->getClientMimeType();
        print_r($extension);*/


        $img = $request->input('topic');

        /*echo "<img src='".$img."'>";
        die();*/

        /*$img = base64_decode($img);
        $im = imagecreatefromjpeg($img);*/
        /*$image = new Image();
        $img = Image::make(file_get_contents($img));*/

        // print_r($im);
        // die();
        /*$contents = base64_encode($img);
        print_r($contents);*/

        //$contents='BINARY IMAGE DATA';
        /*echo "<img src='data:image/jpg;charset=utf8;base64,".$contents."'/>";*/

        /*die();*/
        /*echo $img;
        $img = base64_decode($img);
        echo $img;
        */
        $origi_file_name = date('ymdhis').'.jpg';
        /*$result = imagecreatefromstring($img);*/
        $fileName = '/opt/lampp/htdocs/versichern/versichern/public/img/slider/'.$origi_file_name; // path to png image
        /*imagejpeg($result, $origi_file_name);*/
        file_put_contents($fileName, $img);
        
        /*if ($request->hasFile('topic')) {
            echo $request->file('topic');
        }*/
        die('added');
        /*echo $img;
        die();*/
        /*$im = imagecreatefromstring($img);
        $origi_file_name = '';
        if ($im !== false) {

            //print_r($request->all());
            $origi_file_name = date('ymdhis').'.png';
            $fileName = '/opt/lampp/htdocs/versichern/versichern/public/img/slider/'.$origi_file_name; // path to png image
        }*/
        //echo $fileName;
        /*echo 
        $img_data = file_get_contents($request->input('topic'));
        print_r($img_data);*/
        
        /*$file = Request::file('topic');*/

        /*$file_path = $file->getPathName();
        echo "filepath : ".$filepath;
        $original_name = $file->getClientOriginalName();
        echo "<pre>";
        print_r($file);*/
        /*$image = Input::file('topic');

        $data = $image->getClientOriginalExtension();
        echo 'image name : '.$data;
        $contents = $file->openFile()->fread($file->getSize());

        print_r($contents);*/
        /*print_r($content);*/
        /*$img_data = file_get_contents($img_path);
        echo "image path : ".$big_image = Image::make(Input::file('topic')->getRealPath());*/

        /*if (Input::file('file')->isValid()) {
            echo "comes here :: validated";
            $destinationPath = 'assets/img'; // upload path
            $extension = Input::file('file')->getClientOriginalExtension();
        }*/
        
        /*echo $request->input('name');
        echo $request->input('topic');
        
        print_r(get_class_methods($request));
        exit;*/
        //echo $request->file("topic");
        if ($request->hasFile('topic')) {
            //echo $request->file('topic');
        }
        /*exit;*/
        $slider = new Slider();
        $slider->name = $request->input('name');
        $slider->topic = $origi_file_name;
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

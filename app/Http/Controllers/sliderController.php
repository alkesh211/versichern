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

        $filename = $request->input('topic');        
        /*code to check image type*/
        $resu = explode(';base64,',$filename);
        $type = explode('/',$resu[0]);
        $image_type = $type[1];
        
        
        if($image_type == 'gif')
        {
            $origi_file_name = date('ymdhis').'.gif';
            $img = imagecreatefromgif($filename);
            $fileName = '/opt/lampp/htdocs/versichern/versichern/public/img/slider/'.$origi_file_name;
            imagegif($img, $fileName);
        }else if($image_type == 'jpeg' ||$image_type == 'jpg')
        {
            $origi_file_name = date('ymdhis').'.jpg';
            $img = imagecreatefromjpeg($filename);
            $fileName = '/opt/lampp/htdocs/versichern/versichern/public/img/slider/'.$origi_file_name;
            imagejpeg($img, $fileName);

        }else if($image_type == 'png')
        {
            $origi_file_name = date('ymdhis').'.png';
            $img = imagecreatefrompng($filename);
            $fileName = '/opt/lampp/htdocs/versichern/versichern/public/img/slider/'.$origi_file_name;
            imagepng($img, $fileName);
        }else{
            return response()->error($validator->errors());
        }
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

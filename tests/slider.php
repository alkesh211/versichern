<?php

use Illuminate\Foundation\Testing\WithoutMiddleware;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Illuminate\Foundation\Testing\DatabaseTransactions;

class Slider extends TestCase
{
    public function testExample()
    {
		$slider = factory(App\slider::class)->make();

		$this->slider('/api/sliders', [
			'name' => $slider->name,
			'topic' => $slider->topic,
		])
		->seeApiSuccess()
		->seeJsonObject('slider')
		->seeJson([
			'name' => $slider->name,
			'topic' => $slider->topic,
		]);

		$this->seeInDatabase('sliders', [
			'name' => $slider->name,
			'topic' => $slider->topic,
		]);
    }
}

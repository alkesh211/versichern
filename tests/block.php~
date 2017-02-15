<?php

use Illuminate\Foundation\Testing\WithoutMiddleware;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Illuminate\Foundation\Testing\DatabaseTransactions;

class block extends TestCase
{
    /**
     * A basic test example.
     *
     * @return void
     */
    public function testExample()
    {
        $slider = factory(App\block::class)->make();

	$this->slider('/api/block', [
		'name' => $slider->name,
		'topic' => $slider->topic,
	])
	->seeApiSuccess()
	->seeJsonObject('block')
	->seeJson([
		'name' => $slider->name,
		'topic' => $slider->topic,
	]);

	$this->seeInDatabase('block', [
		'name' => $slider->name,
		'topic' => $slider->topic,
	]);
    }
}

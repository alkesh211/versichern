<?php

use Illuminate\Foundation\Testing\WithoutMiddleware;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Illuminate\Foundation\Testing\DatabaseTransactions;

class page extends TestCase
{
    /**
     * A basic test example.
     *
     * @return void
     */
    public function testExample()
    {
        $slider = factory(App\page::class)->make();

        $this->slider('/api/page', [
            'name' => $slider->name,
            'topic' => $slider->topic,
        ])
            ->seeApiSuccess()
            ->seeJsonObject('page')
            ->seeJson([
                'name' => $slider->name,
                'topic' => $slider->topic,
            ]);

        $this->seeInDatabase('page', [
            'name' => $slider->name,
            'topic' => $slider->topic,
        ]);
    }
}

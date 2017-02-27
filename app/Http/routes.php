<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/

Route::group(['middleware' => ['web']], function () {
    Route::get('/', 'AngularController@serveFront');
    Route::get('/admin', 'AngularController@serveApp');
    Route::get('/unsupported-browser', 'AngularController@unsupported');
    Route::get('user/verify/{verificationCode}', ['uses' => 'Auth\AuthController@verifyUserEmail']);
    Route::get('auth/{provider}', ['uses' => 'Auth\AuthController@redirectToProvider']);
    Route::get('auth/{provider}/callback', ['uses' => 'Auth\AuthController@handleProviderCallback']);
    Route::get('/api/authenticate/user', 'Auth\AuthController@getAuthenticatedUser');
});

$api->group(['middleware' => ['api']], function ($api) {
    $api->controller('auth', 'Auth\AuthController');

    // Password Reset Routes...
    $api->post('auth/password/email', 'Auth\PasswordResetController@sendResetLinkEmail');
    $api->get('auth/password/verify', 'Auth\PasswordResetController@verify');
    $api->post('auth/password/reset', 'Auth\PasswordResetController@reset');
    $api->post('posts', 'CreatePostController@create');
});

$api->group(['prefix' => 'testpost', 'middleware' => ['api']], function ($api) {
    $api->post('/', 'sliderController@create');
});

$api->group(['prefix' => 'slider', 'middleware' => ['api']], function ($api) {
    $api->post('/create', 'sliderController@create');
    $api->get('/list', 'sliderController@index');
    $api->get('/', 'sliderController@index');
});

$api->group(['prefix' => 'block', 'middleware' => ['api']], function ($api) {
    $api->post('/create', 'blockController@create');
    $api->get('/list', 'blockController@index');
    $api->get('/', 'blockController@index');
});

$api->group(['prefix' => 'page', 'middleware' => ['api']], function ($api) {
    $api->post('/create', 'pageController@create');
    $api->get('/list', 'pageController@index');
    $api->get('/', 'pageController@index');
});

$api->group(['middleware' => ['api', 'api.auth']], function ($api) {
    $api->get('users/me', 'UserController@getMe');
    $api->put('users/me', 'UserController@putMe');
});

$api->group(['middleware' => ['api', 'api.auth', 'role:admin.super|admin.user']], function ($api) {
    $api->controller('users', 'UserController');
});

<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Laraveldaily\Quickadmin\Observers\UserActionsObserver;


use Illuminate\Database\Eloquent\SoftDeletes;

class Test111 extends Model {

    use SoftDeletes;

    /**
    * The attributes that should be mutated to dates.
    *
    * @var array
    */
    protected $dates = ['deleted_at'];

    protected $table    = 'test111';
    
    protected $fillable = [
          'test_name',
          'newscategories_id',
          'language_id'
    ];
    

    public static function boot()
    {
        parent::boot();

        Test111::observe(new UserActionsObserver);
    }
    
    public function newscategories()
    {
        return $this->hasOne('App\NewsCategories', 'id', 'newscategories_id');
    }


    public function language()
    {
        return $this->hasOne('App\Language', 'id', 'language_id');
    }


    
    
    
}
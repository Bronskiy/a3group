<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Laraveldaily\Quickadmin\Observers\UserActionsObserver;


use Illuminate\Database\Eloquent\SoftDeletes;

class Projects extends Model {

    use SoftDeletes;

    /**
    * The attributes that should be mutated to dates.
    *
    * @var array
    */
    protected $dates = ['deleted_at'];

    protected $table    = 'projects';
    
    protected $fillable = [
          'project_title',
          'project_slug',
          'project_description'
    ];
    

    public static function boot()
    {
        parent::boot();

        Projects::observe(new UserActionsObserver);
    }
    
    
    
    
}
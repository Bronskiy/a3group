<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Laraveldaily\Quickadmin\Observers\UserActionsObserver;


use Illuminate\Database\Eloquent\SoftDeletes;

class Recommendations extends Model {

    use SoftDeletes;

    /**
    * The attributes that should be mutated to dates.
    *
    * @var array
    */
    protected $dates = ['deleted_at'];

    protected $table    = 'recommendations';

    protected $fillable = [
          'recommendations_title',
          'recommendations_slug',
          'recommendations_image',
          'recommendations_short',
          'recommendations_full',
          'recommendations_file'
    ];
    

    public static function boot()
    {
        parent::boot();

        Recommendations::observe(new UserActionsObserver);
    }




}

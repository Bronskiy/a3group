<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Laraveldaily\Quickadmin\Observers\UserActionsObserver;


use Illuminate\Database\Eloquent\SoftDeletes;

class Mission extends Model {

    use SoftDeletes;

    /**
    * The attributes that should be mutated to dates.
    *
    * @var array
    */
    protected $dates = ['deleted_at'];

    protected $table    = 'mission';

    protected $fillable = [
          'mission_title',
          'mission_description',
          'language_id'
    ];


    public static function boot()
    {
        parent::boot();

        Mission::observe(new UserActionsObserver);
    }

    public function language()
    {
        return $this->hasOne('App\Language', 'id', 'language_id');
    }



}

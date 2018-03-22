<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Laraveldaily\Quickadmin\Observers\UserActionsObserver;


use Illuminate\Database\Eloquent\SoftDeletes;

class Recruiting extends Model {

    use SoftDeletes;

    /**
    * The attributes that should be mutated to dates.
    *
    * @var array
    */
    protected $dates = ['deleted_at'];

    protected $table    = 'recruiting';

    protected $fillable = [
          'recruiting_title',
          'recruiting_about',
          'recruiting_features',
          'recruiting_faq',
          'recruiting_contacts',
          'language_id'
    ];


    public static function boot()
    {
        parent::boot();

        Recruiting::observe(new UserActionsObserver);
    }


        public function language()
        {
            return $this->hasOne('App\Language', 'id', 'language_id');
        }


}

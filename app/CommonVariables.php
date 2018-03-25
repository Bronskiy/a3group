<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Laraveldaily\Quickadmin\Observers\UserActionsObserver;


use Illuminate\Database\Eloquent\SoftDeletes;

class CommonVariables extends Model {

    use SoftDeletes;

    /**
    * The attributes that should be mutated to dates.
    *
    * @var array
    */
    protected $dates = ['deleted_at'];

    protected $table    = 'commonvariables';

    protected $fillable = [
          'moscow_address',
          'moscow_phone',
          'moscow_email',
          'moscow_map',
          'kaluga_address',
          'kaluga_phone',
          'kaluga_email',
          'kaluga_map',
          'language_id'
    ];


    public static function boot()
    {
        parent::boot();

        CommonVariables::observe(new UserActionsObserver);
    }


    public function language()
    {
        return $this->hasOne('App\Language', 'id', 'language_id');
    }

}

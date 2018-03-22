<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Laraveldaily\Quickadmin\Observers\UserActionsObserver;

use Illuminate\Database\Eloquent\SoftDeletes;

class Practice extends Model {

    use SoftDeletes;

    /**
    * The attributes that should be mutated to dates.
    *
    * @var array
    */
    protected $dates = ['deleted_at'];

    protected $table    = 'practice';

    protected $fillable = [
      'practice_title',
      'practice_slug',
          'description',
          'projects_id',
          'language_id'
    ];


    public static function boot()
    {
        parent::boot();

        Practice::observe(new UserActionsObserver);
    }


    public function projects()
    {
        return $this->hasOne('App\Projects', 'id', 'projects_id');
    }

        public function language()
        {
            return $this->hasOne('App\Language', 'id', 'language_id');
        }
}

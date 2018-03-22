<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Eloquent\Model;

class CreateTest111Table extends Migration {

    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Model::unguard();
        Schema::create('test111',function(Blueprint $table){
            $table->increments("id");
            $table->string("test_name")->nullable();
            $table->integer("newscategories_id")->references("id")->on("newscategories")->nullable();
            $table->integer("language_id")->references("id")->on("language");
            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::drop('test111');
    }

}
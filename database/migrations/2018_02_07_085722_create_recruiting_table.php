<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Eloquent\Model;

class CreateRecruitingTable extends Migration {

    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Model::unguard();
        Schema::create('recruiting',function(Blueprint $table){
            $table->increments("id");
            $table->string("recruiting_title");
            $table->text("recruiting_about")->nullable();
            $table->text("recruiting_features")->nullable();
            $table->text("recruiting_faq")->nullable();
            $table->text("recruiting_contacts")->nullable();
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
        Schema::drop('recruiting');
    }

}
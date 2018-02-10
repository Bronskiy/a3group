<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Eloquent\Model;

class CreateRecommendationsTable extends Migration {

    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Model::unguard();
        Schema::create('recommendations',function(Blueprint $table){
            $table->increments("id");
            $table->string("recommendations_title");
            $table->string("recommendations_slug");
            $table->string("recommendations_image")->nullable();
            $table->text("recommendations_short")->nullable();
            $table->text("recommendations_full")->nullable();
            $table->string("recommendations_file")->nullable();
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
        Schema::drop('recommendations');
    }

}

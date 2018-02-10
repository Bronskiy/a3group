<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Eloquent\Model;

class CreatePracticeTable extends Migration {

    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Model::unguard();
        Schema::create('practice',function(Blueprint $table){
            $table->increments("id");
            $table->string("practice_title");
            $table->string("practice_slug");
            $table->text("description")->nullable();
            $table->integer("projects_id")->references("id")->on("projects")->nullable();
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
        Schema::drop('practice');
    }

}

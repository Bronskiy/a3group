<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Eloquent\Model;

class CreateTeamMembersTable extends Migration {

    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Model::unguard();
        Schema::create('teammembers',function(Blueprint $table){
            $table->increments("id");
            $table->string("member_name");
            $table->string("member_slug");
            $table->string("member_image")->nullable();
            $table->integer("teamcategories_id")->references("id")->on("teamcategories");
            $table->text("member_about")->nullable();
            $table->string("member_email")->nullable();
            $table->text("member_position")->nullable();
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
        Schema::drop('teammembers');
    }

}
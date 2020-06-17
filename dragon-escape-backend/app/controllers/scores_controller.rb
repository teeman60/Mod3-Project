class ScoresController < ApplicationController

    def create
        Score.create(game: params[:game], user_id:params[:user_id], high_score: 0)
    end

    def update
        # byebug
        # user = User.all.find(params[:id])
        # user.highest_score = params[:highest_score]
        # user.save
    end


end

class ScoresController < ApplicationController

    def create
        Score.create(game: params[:game], user_id:params[:user_id], high_score: 0)
    end

    def update

        score = Score.all.find(params[:id])
        score.high_score = params[:high_score]
        score.save
        # byebug
        # user = User.all.find(params[:id])
        # user.highest_score = params[:highest_score]
        # user.save
    end


end

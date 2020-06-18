class UsersController < ApplicationController

    def index
        users = User.all
        render json: users, :include => :scores 
    end

    def create
        user = User.new(username: params[:username])
        user.save
        Score.create(user_id: user.id, game:"Tetris",high_score: 0)
        Score.create(user_id: user.id, game:"Flappy Bird",high_score: 0)
        Score.create(user_id: user.id, game:"Ping-Pong",high_score: 0)
        Score.create(user_id: user.id, game:"Mountain Runner",high_score: 0)

    end

    def update
        # byebug
        # user = User.all.find(params[:id])
        # user.highest_score = params[:highest_score]
        # user.save
    end

    def destroy
        # byebug
        user = User.all.find(params[:id])
        user.scores.destroy_all
        user.destroy
    end

end

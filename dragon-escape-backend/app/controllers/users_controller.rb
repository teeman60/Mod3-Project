class UsersController < ApplicationController

    def index
        users = User.all
        render json: users, :include => :scores 
    end

    def create
        user = User.new(username: params[:username])
        user.save

        

    end

    def update
        # byebug
        # user = User.all.find(params[:id])
        # user.highest_score = params[:highest_score]
        # user.save
    end

end

class UsersController < ApplicationController

    def index
        users = User.all
        render json: users, except: [:created_at, :updated_at] 
    end

    def create
        user = User.new(username: params[:username], highest_score: 0)
        user.save
    end

    def update
        # byebug
        user = User.all.find(params[:id])
        user.highest_score = params[:highest_score]
        user.save
    end

end

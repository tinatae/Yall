class Api::SessionsController < ApplicationController
    def create
        @user = User.find_by_credentials(
            params[:user][:username],
            params[:user][:password],
        )

        if @user
            login(@user)
            render 'api/users/show'
        else
            render json: ['Invalid username & password combo!'], status: 401
        end
    end

    def destroy
        @user = current_user
        if @user
            logout
            render 'api/users/show'
        else
            render json: ['Ooh! Did you know no one is signed-in? -The Sign-in Ghost'], status: 404
        end
    end
end

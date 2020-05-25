class UsersController < ApplicationController
    def create
        @user = User.create(
            username: user_params[:username],
            password: user_params[:password],
            password_confirmation: user_params[:password]
        )

        if @user
            render json: { status: :created }
        else
            render json: { status: 500 }
        end
    end

    private

        def user_params
            params.require(:user).permit(:username, :password)
        end
end

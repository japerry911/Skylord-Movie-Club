class UsersController < ApplicationController
    def create
        @user = User.create(
            username: user_params[:username],
            password: user_params[:password],
            password_confirmation: user_params[:password]
        )

        if @user.authenticate(user_params[:password])
            payload = {
                user_id: @user.id
            }
            secret_key = Rails.application.secret_key_base

            token = JWT.encode(payload, secret_key)

            render json: { user: { username: @user.username, token: token }}
        else
            render json: { status: 500 }
        end
    end

    private

        def user_params
            params.require(:user).permit(:username, :password)
        end
end

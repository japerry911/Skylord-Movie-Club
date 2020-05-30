class GenreController < ApplicationController
    def index
        @genres = Genre.all 

        render json: { genres: @genres }
    end
end

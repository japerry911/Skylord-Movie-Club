class GenreController < ApplicationController
    def index
        @genre = Genre.all 

        render json: { genre: @genre }
    end
end

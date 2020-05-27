class MoviesController < ApplicationController
    def index
        @movies = Movie.all

        render json: { movies: @movies }, include: { reviews: { only: :rating }}
    end
end

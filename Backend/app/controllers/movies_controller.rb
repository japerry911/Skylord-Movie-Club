class MoviesController < ApplicationController
    def index
        @movies = Movie.all

        render json: { movies: @movies }, include: { genre: { only: :name }, reviews: { only: :rating }}
    end
end

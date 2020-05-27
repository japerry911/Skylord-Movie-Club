class MoviesController < ApplicationController
    def index
        @movies = Movie.all

        render json: { movies: @movies }, include: { genre: { only: :name }, reviews: { only: :rating }}
    end

    def show
        @movie = Movie.find(params[:id])

        render json: { movie: @movie }, include: { genre: { only: :name }, reviews: { include: { user: { only: :username }}}}
    end
end

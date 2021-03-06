class MoviesController < ApplicationController
    def index
        @movies = Movie.all

        render json: { movies: @movies }, include: { genre: { only: :name }, reviews: { only: :rating }}
    end

    def show
        @movie = Movie.find(params[:id])

        render json: { movie: @movie }, include: { genre: { only: :name }, reviews: { include: { user: { only: :username }}}}
    end

    def create
        @created_movie = Movie.create(title: movie_params[:title], genre_id: movie_params[:genre], img_url: movie_params[:img_url])

        render json: { movie: @created_movie }
    end

    private

        def movie_params
            params.require(:movie).permit(:title, :genre, :img_url)
        end
end

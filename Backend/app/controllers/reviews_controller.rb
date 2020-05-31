class ReviewsController < ApplicationController
    def most_recent_reviews
        @recent_reviews = Review.order(created_at: :desc).limit(5)

        json_ready_reviews = @recent_reviews.map {|review| { id: review.id, username: review.user.username, movie: review.movie.title, image: review.movie.img_url,
         genre: review.movie.genre.name, rating: review.rating, date: review.created_at }}

        render json: { reviews: json_ready_reviews }
    end

    def create 
        @created_review = Review.create(review_params)

        render json: { review: @created_review }
    end

    private

        def review_params
            params.require(:require).permit(:rating, :movie_id, :user_id, :description)
        end
end

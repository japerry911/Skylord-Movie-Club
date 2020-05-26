class Movie < ApplicationRecord
  belongs_to :genre
  has_many :users, through: :reviews
  has_many :reviews
end

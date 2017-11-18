class Trip < ApplicationRecord
  belongs_to :user
  has_many :user_trips
  has_many :users, through: :user_trips
  belongs_to :purchaser, class_name: 'User'
end

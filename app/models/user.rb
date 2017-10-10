class User < ApplicationRecord
  has_secure_password
  has_many :trips
  # has_many :user_trips
  # has_many :trips, through: :user_trips
end

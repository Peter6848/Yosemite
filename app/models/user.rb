class User < ApplicationRecord
  has_many :trips
  has_many :user_trips
  has_many :trips, through: :user_trips

  validates :first_name, :last_name, :email, :password, :phone_number, presence: true
  validates :email, :phone_number, uniqueness: true
  has_secure_password

  def full_name
    self.first_name + ' ' + self.last_name
  end

  private

    def downcase_email
      self.email = email.downcase
    end

end

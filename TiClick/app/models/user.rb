class User < ApplicationRecord
  has_secure_password
  validates :email, presence: true
  has_many :categories
  has_many :items, :through => :categories
  validates_uniqueness_of :email

  def to_token_payload
    {
      id: id,
      name: name,
      email: email
    }
  end
end

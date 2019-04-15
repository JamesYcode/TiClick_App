class User < ApplicationRecord
  has_secure_password
  validates :email, presence: true
  has_many :categories, dependent: :destroy
  has_many :items, :through => :categories, dependent: :destroy
  validates_uniqueness_of :email

  def to_token_payload
    {
      id: id,
      name: name,
      email: email
    }
  end
end

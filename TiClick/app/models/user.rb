class User < ApplicationRecord
  has_secure_password
  has_many :categories
  has_many :items, :through => :categories
end

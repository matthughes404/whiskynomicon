class User < ActiveRecord::Base
  has_many :tastes
  has_many :bottles
end

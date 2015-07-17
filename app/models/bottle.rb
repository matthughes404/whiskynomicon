class Bottle < ActiveRecord::Base
  belongs_to :user
  validates :brand, :presence => true
  validates :style, :presence => true
  validates :rating, :presence => true
end

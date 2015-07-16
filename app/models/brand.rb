class Brand < ActiveRecord::Base
  has_many :variants
  validates :name, :presence => true
end

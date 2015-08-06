require 'date_validator'

class Bottle < ActiveRecord::Base
  belongs_to :user
  validates :brand, :presence => true
  validates :style, :presence => true
  validates :rating, :inclusion => { in: 0..5, message: 'must be between 0 and 5' }
  validates :purchase_date, :date => { before: Proc.new { Date.tomorrow }, message: 'cannot be in the future' }
end

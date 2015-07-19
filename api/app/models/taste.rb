require 'date_validator'

class Taste < ActiveRecord::Base
  belongs_to :user
  validates :brand, :presence => true
  validates :style, :presence => true
  validates :rating, :inclusion => { in: 0..5, message: 'must be between 0 and 5' }
  validates :date, :date => { before: Proc.new { Date.tomorrow }, message: 'cannot be in the future' }

  # Exclude fields from json output.
   def as_json(options={})
     options[:except] ||= [:user_id, :created_at, :updated_at]
     super(options)
   end

end

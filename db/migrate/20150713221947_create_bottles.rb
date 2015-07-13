class CreateBottles < ActiveRecord::Migration
  def change
    create_table :bottles do |t|
      t.text :brand
      t.text :variant
      t.text :style
      t.integer :proof
      t.text :size
      t.decimal :cost
      t.datetime :purchase_date
      t.text :purchase_location
      t.decimal :rating
      t.text :review
      t.belongs_to :user

      t.timestamps null: false
    end
  end
end

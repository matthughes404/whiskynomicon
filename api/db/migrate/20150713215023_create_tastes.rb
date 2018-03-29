class CreateTastes < ActiveRecord::Migration[5.1]
  def change
    create_table :tastes do |t|
      t.text :brand
      t.text :variant
      t.text :style
      t.integer :proof
      t.datetime :date
      t.text :location
      t.decimal :rating
      t.text :review
      t.belongs_to :user

      t.timestamps null: false
    end
  end
end

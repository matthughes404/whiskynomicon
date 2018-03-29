class CreateVariants < ActiveRecord::Migration[5.1]
  def change
    create_table :variants do |t|
      t.text :name
      t.text :type
      t.integer :proof
      t.belongs_to :brand

      t.timestamps null: false
    end
  end
end

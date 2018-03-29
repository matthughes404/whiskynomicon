class CreateBrands < ActiveRecord::Migration[5.1]
  def change
    create_table :brands do |t|
      t.text :name

      t.timestamps null: false
    end
  end
end

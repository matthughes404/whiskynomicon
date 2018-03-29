class ActivityAddType < ActiveRecord::Migration[5.1]
  def change
    add_column :activities, :activity_type, :string
  end
end

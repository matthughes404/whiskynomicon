class ActivityAddDetailId < ActiveRecord::Migration[5.1]
  def change
    add_column :activities, :detail_id, :int
  end
end

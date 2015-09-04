class ActivityAddDetailId < ActiveRecord::Migration
  def change
    add_column :activities, :detail_id, :int
  end
end

class RenameVariantType < ActiveRecord::Migration[5.1]
  def change
    rename_column :variants, :type, :style
  end
end

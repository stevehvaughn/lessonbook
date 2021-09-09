class RemoveTimestampsFromLesson < ActiveRecord::Migration[6.1]
  def change
    remove_column :lessons, :created_at, :datetime
    remove_column :lessons, :updated_at, :datetime
  end
end

class AddDateToLesson < ActiveRecord::Migration[6.1]
  def change
    add_column :lessons, :date, :date
  end
end

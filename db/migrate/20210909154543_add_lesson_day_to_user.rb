class AddLessonDayToUser < ActiveRecord::Migration[6.1]
  def change
    add_column :users, :lesson_day, :string
  end
end

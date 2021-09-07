class AddLessonTimeToUser < ActiveRecord::Migration[6.1]
  def change
    add_column :users, :lesson_time, :string
  end
end

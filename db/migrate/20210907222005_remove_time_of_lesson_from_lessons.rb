class RemoveTimeOfLessonFromLessons < ActiveRecord::Migration[6.1]
  def change
    remove_column :lessons, :time_of_lesson
  end
end

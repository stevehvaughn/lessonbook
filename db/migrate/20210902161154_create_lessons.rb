class CreateLessons < ActiveRecord::Migration[6.1]
  def change
    create_table :lessons do |t|
      t.belongs_to :user, null: false, foreign_key: true
      t.datetime :time_of_lesson
      t.string :objective
      t.string :repertoire
      t.string :assignment
      t.integer :status
      t.integer :earned_grade
      t.timestamps
    end
  end
end

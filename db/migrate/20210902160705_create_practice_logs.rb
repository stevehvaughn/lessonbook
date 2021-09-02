class CreatePracticeLogs < ActiveRecord::Migration[6.1]
  def change
    create_table :practice_logs do |t|
      t.belongs_to :user, null: false, foreign_key: true
      t.date :date
      t.integer :duration
      t.string :goal
      t.text :description
      t.timestamps
    end
  end
end

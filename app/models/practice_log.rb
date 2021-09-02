class PracticeLog < ApplicationRecord
  belongs_to :student, foreign_key: "student_id", class_name: "User"
  has_many :comments, as: :commentable
end

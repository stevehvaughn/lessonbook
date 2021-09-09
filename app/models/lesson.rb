class Lesson < ApplicationRecord
  belongs_to :student, foreign_key: "user_id", class_name: "User"
  has_many :comments, as: :commentable

  acts_as_schedulable :schedule
end

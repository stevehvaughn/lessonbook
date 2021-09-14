class Lesson < ApplicationRecord
  belongs_to :student, foreign_key: "user_id", class_name: "User"
  has_many :comments, as: :commentable

  validates :date, presence: true
  validates :objective, presence: true
  validates :repertoire, presence: true
  validates :assignment, presence: true
  
end

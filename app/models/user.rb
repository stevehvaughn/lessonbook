class User < ApplicationRecord
    has_secure_password
   
    has_many :students, class_name: "User", foreign_key: "teacher_id"
    belongs_to :teacher, class_name: "User", optional: true
    
    has_many :lessons
    has_many :practice_logs, foreign_key: "student_id"
end

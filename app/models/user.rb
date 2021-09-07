class User < ApplicationRecord
    has_secure_password
   
    has_many :students, class_name: "User", foreign_key: "teacher_id"
    belongs_to :teacher, class_name: "User", optional: true
    
    has_many :lessons
    has_many :practice_logs, foreign_key: "student_id"

    validates :username, uniqueness: true, presence: true, length: { minimum: 4 }
    validates :email, uniqueness: true, presence: true
    validates :password, presence: true

    def combined_name
        combined_name = self.first_name + " " + self.last_name
    end

    def students_or_teacher
        if self.teacher_id == nil
            students = self.students
        else
            teacher = self.teacher
        end
    end
end

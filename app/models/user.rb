class User < ApplicationRecord
    has_secure_password
   
    has_many :students, class_name: "User", foreign_key: "teacher_id"
    belongs_to :teacher, class_name: "User", optional: true
    
    has_many :lessons, dependent: :destroy
    has_many :practice_logs, foreign_key: "student_id"

    validates :username, uniqueness: true, presence: true, length: { minimum: 4 }
    validates :email, uniqueness: true, presence: true, format: { with: /\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})\z/i, on: :create }
    validates :password, presence: true, length: { minimum: 8 }

    def combined_name
        combined_name = self.first_name.capitalize() + " " + self.last_name.capitalize()
    end

    def self.teachers
        self.where({ teacher_id: nil })
    end

    def self.students
        self.where.not({ teacher_id: nil })
    end
end
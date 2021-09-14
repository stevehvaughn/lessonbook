class UserSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :combined_name, :email, :username, :picture_url, :year_in_school, :lesson_day, :lesson_time, :lessons

  has_many :students, serializer: UserStudentSerializer
  belongs_to :teacher, serializer: UserTeacherSerializer
end
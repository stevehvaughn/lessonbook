class UserStudentSerializer < ActiveModel::Serializer
  attributes :id, :username, :first_name, :last_name, :combined_name, :year_in_school, :picture_url, :lesson_day, :lesson_time, :lessons
end

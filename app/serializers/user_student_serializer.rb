class UserStudentSerializer < ActiveModel::Serializer
  attributes :id, :username, :first_name, :last_name, :combined_name, :picture_url, :lesson_time, :lessons
end

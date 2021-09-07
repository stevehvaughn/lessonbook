class UserSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :combined_name, :picture_url, :students_or_teacher
end

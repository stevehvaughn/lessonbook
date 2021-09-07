class UserSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :combined_name, :students_or_teacher
end

class UserTeacherSerializer < ActiveModel::Serializer
  attributes :id, :email, :username, :combined_name
end

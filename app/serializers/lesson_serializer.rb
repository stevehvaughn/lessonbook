class LessonSerializer < ActiveModel::Serializer
  attributes :id, :student, :date, :objective, :repertoire, :assignment, :earned_grade
end

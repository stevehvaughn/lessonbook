class LessonSerializer < ActiveModel::Serializer
  attributes :id, :date, :objective, :repertoire, :assignment, :earned_grade

  belongs_to :student, serializer: LessonStudentSerializer
end

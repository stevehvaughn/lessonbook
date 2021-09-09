class LessonsController < ApplicationController

    def index 
        lessons = Lesson.all 
        render json: lessons
    end
    
    def show
        lesson = Lesson.find(params[:id])
        render json: lesson
    end
end

class LessonsController < ApplicationController
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response

    def index 
        lessons = Lesson.all 
        render json: lessons
    end
    
    def show
        lesson = Lesson.find(params[:id])
        render json: lesson
    end

    def create 
        lesson = Lesson.create(lesson_params)
        if lesson.valid? 
            render json: lesson, status: :created
        else
            render json: { errors: lesson.errors.full_messages}, status: :unprocessable_entity
        end
    end

    def destroy 
        lesson = Lesson.find(params[:id])
        lesson.destroy
        head :no_content
    end

    private 

        def lesson_params
            params.permit(:objective, :repertoire, :assignment, :date, :user_id, :earned_grade)
        end

        def render_unprocessable_entity_response(invalid)
            render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
        end
end

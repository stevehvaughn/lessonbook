class UsersController < ApplicationController
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response

    def index 
        users = User.all
        render json: users
    end
    
    def teachers
        teachers = User.teachers
        render json: teachers
    end
    
    def create 
        user = User.create(user_params)
        if user.valid? 
            session[:user_id] = user.id
            render json: user, status: :created
        else
            render json: { errors: user.errors.full_messages}, status: :unprocessable_entity
        end
    end

    def show
        user = User.find_by(id: session[:user_id])
        if user
            render json: user, status: :created
        else
            render json: { error: ["Not Authorized"]}, status: :unauthorized
        end
    end


    private 
    def user_params
        params.permit(:username, :password, :email, :first_name, :last_name, :teacher_id)
    end

    def render_unprocessable_entity_response(invalid)
        render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
    end
end

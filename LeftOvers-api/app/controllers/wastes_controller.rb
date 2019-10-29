class WastesController < ApplicationController
    def index
        @wastes = current_user.wastes

        render json: @wastes
    end

    def show
        @waste = Food.find_by(id: params[:id])

        render json: @waste
    end

    def create
        @food = Food.find_by(id: params[:id])
        @food_conversion_rate = @food.conversion_rate
        @quantity = params[:quantity].to_f
        @cost = @quantity * @food_conversion_rate
        @waste = current_user.wastes.new(waste_params)
        @waste.cost = @cost
        @waste.save

        render json: @waste
    end

    private 

    def waste_params
        params.permit(:food_name, :expiration_date, :quantity, :quantity_unit, :value, :food_category, :id, :disposal_method, :disposal_reason, :created_at)
    end
end

class FoodSerializer < ActiveModel::Serializer
  attributes :id, :food_name, :expiration_date, :quantity, :quantity_unit, :value, :food_category
  has_one :user
end

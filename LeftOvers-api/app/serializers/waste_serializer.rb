class WasteSerializer < ActiveModel::Serializer
  attributes :id, :food_name, :cost, :quantity, :quantity_unit, :food_category, :disposal_reason, :disposal_method, :created_at
  has_one :user
end

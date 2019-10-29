class CreateFoods < ActiveRecord::Migration[5.2]
  def change
    create_table :foods do |t|
      t.string :food_name
      t.date :expiration_date
      t.decimal :quantity
      t.string :quantity_unit
      t.decimal :value
      t.string :food_category
      t.decimal :conversion_rate
      t.references :user, foreign_key: true

      t.timestamps
    end
  end
end

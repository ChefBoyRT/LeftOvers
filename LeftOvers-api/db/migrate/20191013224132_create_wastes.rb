class CreateWastes < ActiveRecord::Migration[5.2]
  def change
    create_table :wastes do |t|
      t.string :food_name
      t.decimal :cost, precision: 10, scale: 2
      t.decimal :quantity, precision: 10, scale: 2
      t.string :quantity_unit
      t.string :food_category
      t.string :disposal_reason
      t.string :disposal_method
      t.references :user, foreign_key: true

      t.timestamps
    end
  end
end

# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2019_10_13_224132) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "foods", force: :cascade do |t|
    t.string "food_name"
    t.date "expiration_date"
    t.decimal "quantity"
    t.string "quantity_unit"
    t.decimal "value"
    t.string "food_category"
    t.decimal "conversion_rate"
    t.bigint "user_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_foods_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "username"
    t.string "password_digest"
    t.string "first_name"
    t.string "last_name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "wastes", force: :cascade do |t|
    t.string "food_name"
    t.decimal "cost", precision: 10, scale: 2
    t.decimal "quantity", precision: 10, scale: 2
    t.string "quantity_unit"
    t.string "food_category"
    t.string "disposal_reason"
    t.string "disposal_method"
    t.bigint "user_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_wastes_on_user_id"
  end

  add_foreign_key "foods", "users"
  add_foreign_key "wastes", "users"
end

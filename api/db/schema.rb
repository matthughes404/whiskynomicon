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

ActiveRecord::Schema.define(version: 20150904195656) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "activities", force: :cascade do |t|
    t.datetime  "date"
    t.text      "description"
    t.bigint    "user_id"
    t.datetime  "created_at", null: false
    t.datetime  "updated_at", null: false
    t.string    "activity_type"
    t.integer   "detail_id"
    t.index     ["user_id"], name: "index_activities_on_user_id"
  end

  create_table "bottles", force: :cascade do |t|
    t.text      "brand"
    t.text      "variant"
    t.text      "style"
    t.integer   "proof"
    t.text      "size"
    t.decimal   "cost"
    t.datetime  "purchase_date"
    t.text      "purchase_location"
    t.decimal   "rating"
    t.text      "review"
    t.bigint    "user_id"
    t.datetime  "created_at", null: false
    t.datetime  "updated_at", null: false
    t.index     ["user_id"], name: "index_bottles_on_user_id"
  end

  create_table "brands", force: :cascade do |t|
    t.text      "name"
    t.datetime  "created_at", null: false
    t.datetime  "updated_at", null: false
  end

  create_table "tastes", force: :cascade do |t|
    t.text      "brand"
    t.text      "variant"
    t.text      "style"
    t.integer   "proof"
    t.datetime  "date"
    t.text      "location"
    t.decimal   "rating"
    t.text      "review"
    t.bigint    "user_id"
    t.datetime  "created_at", null: false
    t.datetime  "updated_at", null: false
    t.index     ["user_id"], name: "index_tastes_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string    "provider", null: false
    t.string    "uid", default: "", null: false
    t.string    "encrypted_password", default: "", null: false
    t.string    "reset_password_token"
    t.datetime  "reset_password_sent_at"
    t.datetime  "remember_created_at"
    t.integer   "sign_in_count", default: 0, null: false
    t.datetime  "current_sign_in_at"
    t.datetime  "last_sign_in_at"
    t.string    "current_sign_in_ip"
    t.string    "last_sign_in_ip"
    t.string    "confirmation_token"
    t.datetime  "confirmed_at"
    t.datetime  "confirmation_sent_at"
    t.string    "unconfirmed_email"
    t.string    "name"
    t.string    "username"
    t.string    "image"
    t.string    "email"
    t.text      "tokens"
    t.datetime  "created_at", null: false
    t.datetime  "updated_at", null: false
    t.index     ["email"], name: "index_users_on_email"
    t.index     ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
    t.index     ["uid", "provider"], name: "index_users_on_uid_and_provider", unique: true
  end

  create_table "variants", force: :cascade do |t|
    t.text      "name"
    t.text      "style"
    t.integer   "proof"
    t.bigint    "brand_id"
    t.datetime  "created_at", null: false
    t.datetime  "updated_at", null: false
    t.index     ["brand_id"], name: "index_variants_on_brand_id"
  end

  add_foreign_key "activities", "users"
end

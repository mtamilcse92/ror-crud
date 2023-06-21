# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

# Product.destroy_all

# (1..10).each do |id|
#     Product.create!(
#         id: id,
#         name: Faker::Name.name,
#         description: Faker::Quote.jack_handey,
#         img_url: Faker::LoremFlickr.image,
#     )
# end

#  p "Created #{Product.count} Products"

 Variant.destroy_all

 (1..10).each do |id|
    Variant.create!(
         id: id,
         name: Faker::Name.name,
         description: Faker::Quote.jack_handey,
         img_url: Faker::LoremFlickr.image,
         price: Faker::Number.decimal,
         product_id: 1
     )
 end
 
  p "Created #{Variant.count} Variants"
 
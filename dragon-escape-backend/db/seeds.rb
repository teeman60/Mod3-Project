# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


User.destroy_all

User.create(username: 'tee', highest_score: 5)
User.create(username: 'freddy', highest_score: 150)
User.create(username: 'don', highest_score: 20)
User.create(username: 'tracy', highest_score: 16)
User.create(username: 'paul', highest_score: 9)


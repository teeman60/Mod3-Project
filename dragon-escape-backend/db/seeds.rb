# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


User.destroy_all
Score.destroy_all


u1 = User.create(username: 'tee')
u2 = User.create(username: 'freddy')
u3 = User.create(username: 'don')


Score.create(user_id: u1.id, game: "Tetris", high_score: 21)
Score.create(user_id: u2.id, game: "Tetris", high_score: 0)
Score.create(user_id: u3.id, game: "Tetris", high_score: 7)

Score.create(user_id: u1.id, game: "Flappy Bird", high_score: 17)
Score.create(user_id: u2.id, game: "Flappy Bird", high_score: 1)
Score.create(user_id: u3.id, game: "Flappy Bird", high_score: 7)

Score.create(user_id: u1.id, game: "Ping-Pong", high_score: 10)
Score.create(user_id: u2.id, game: "Ping-Pong", high_score: 0)
Score.create(user_id: u3.id, game: "Ping-Pong", high_score: 15)

Score.create(user_id: u1.id, game: "Mountain Runner", high_score: 40)
Score.create(user_id: u2.id, game: "Mountain Runner", high_score: 8)
Score.create(user_id: u3.id, game: "Mountain Runner", high_score: 6)



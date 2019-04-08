# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

user = User.create({name: 'James', email: 'jim@gmail.com', password: 'thisispass', username: 'jimbob'})

category = Category.create(title: 'Food', user_id: user.id)

item = Item.create([{title: 'Apple', description: 'Best Apple', quantity: 'high', category_id: category.id}, {title: 'Bread', description: 'Best Bread', quantity: 'low', category_id: category.id} ])

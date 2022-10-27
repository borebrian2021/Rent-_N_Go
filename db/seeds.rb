# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

puts "create"


# AdminUser.create!(email: 'admin@rent.com', password: 'password123', password_confirmation: 'password123') if Rails.env.development?
Client.create(first_name:"Brian", last_name:"kimutai", email: "m@gmail.com", phone_number: 703103842, password:"123245", password_confirmation:"123245")
Property.create(client_id: 1, property_name:"KICC", location:"Nairobi", image_url:"hbbhjkhjkjkjk")
Space.create(property_id: 1, room_size:"1 square feet" , image_1: "https://kicc.co.ke/wp-content/uploads/2019/12/Amphitheatre-1.jpg", image_2:"https://kicc.co.ke/wp-content/uploads/2019/12/Lenana-2.jpg", image_3: "https://kicc.co.ke/wp-content/uploads/2019/12/Comesa-Grounds-6.jpg", description: "Lenana and Aberdare Halls, located in the lower ground floor, are perfect for medium-size conferences, meetings and seminar. They each have a sitting capacity .", price_per_hour: 20000, status: true, space_category: "conference room")
Reservation.create(space_id: 1,kickoff_date:"09/09/9999",end_date:"09/10/9999",client_id:"1",total_cash:"50,000")
Review.create(space_id: 1,ratings:"4",review_by:"Brian",review:"Awesome production",property_id:"1",client_id:"1")

puts "complete"
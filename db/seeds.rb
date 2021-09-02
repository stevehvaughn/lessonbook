puts "Removing Data"
User.destroy_all
Lesson.destroy_all
PracticeLog.destroy_all
Comment.destroy_all

puts "Seeding Users as Teachers"
3.times do 
    User.create(
        first_name: Faker::Name.first_name,
        last_name: Faker::Name.last_name,
        email: Faker::Internet.email,
        username: Faker::Internet.username,
        password: "12345678",
    )
end

puts "Seeding Users as Students"
15.times do 
    User.create(
        first_name: Faker::Name.first_name,
        last_name: Faker::Name.last_name,
        email: Faker::Internet.email,
        username: Faker::Internet.username,
        password: "12345678",
        teacher_id: rand(1..3) 
    )
end

puts "Seeding Lessons"

puts "Seeding Practice Logs"

puts "Seeding Comments"

puts "Done Seeding!"



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
        picture_url: Faker::Avatar.image
    )
end

puts "Seeding Users as Students"
id1 = User.first.id 
id2 = User.second.id
id3 = User.third.id

teacher_ids = [id1, id2, id3]
lesson_times = %w(8AM 9AM 10AM 11AM 12PM 1PM 2PM 3PM 4PM 5PM)
15.times do 
    User.create(
        first_name: Faker::Name.first_name,
        last_name: Faker::Name.last_name,
        email: Faker::Internet.email,
        username: Faker::Internet.username,
        password: "12345678",
        teacher_id: teacher_ids.sample, 
        picture_url: Faker::Avatar.image,
        lesson_time: lesson_times.sample
    )
end

puts "Seeding Lessons"

students = User.where.not(id: teacher_ids)
objectives = ["Improve Tone Quality", "Develop Finger Dexterity", "Prepare for Senior Recital", "Preapre for Upcoming Audition", "Improve Lip Flexability"]
repertoires = ["Rochut", "Arbans", "Tyrell", "Excerpts" "Kopprasch" "Sparke Studies", "Pantomime - Philip Sparke", "Fantasia - Gordon Jacob", "Blind Spot - Gilles Rocha", "Fantasy Variations - Ito"]
assignments = ["Rochut 4", "Rochut 5", "Rochut 6", 'Arbans pg. 220', "Arbans pg. 113", "Pantomime Reh A - E", "Stars and Stripes all", "Schoenberg first half", "Kopprasch 11"]
10.times do
    Lesson.create!(
        user_id: students.ids.sample,
        objective: objectives.sample,
        repertoire: repertoires.sample(),
        assignment: assignments.sample(),
        status: 0,
    )
end

puts "Seeding Practice Logs"

puts "Seeding Comments"

puts "Done Seeding!"



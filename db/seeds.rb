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
lesson_times = ['08:00 am', '09:00 am', '10:00 am', '11:00 am', '12:00 pm', '01:00 pm', '02:00 pm', '03:00 pm', '04:00 pm', '05:00 pm']
lesson_days = %w(monday tuesday wednesday thursday friday)
year_in_school_options = ["Freshman", "Sophomore", "Junior", "Senior", "1st Year Masters", "2nd Year Masters", "1st Year Doctorate", "2nd Year Doctorate", "3rd Year Doctorate", "4th+ Year Doctorate"]
15.times do 
    User.create(
        first_name: Faker::Name.first_name,
        last_name: Faker::Name.last_name,
        email: Faker::Internet.email,
        username: Faker::Internet.username,
        password: "12345678",
        teacher_id: teacher_ids.sample, 
        picture_url: Faker::Avatar.image,
        lesson_time: lesson_times.sample,
        lesson_day: lesson_days.sample,
        year_in_school: year_in_school_options.sample
    )
end

puts "Seeding Lessons"

students = User.where.not(id: teacher_ids)
objectives = ["Improve Tone Quality", "Develop Finger Dexterity", "Prepare for Senior Recital", "Preapre for Upcoming Audition", "Improve Lip Flexability"]
repertoires = ["Rochut", "Arbans", "Tyrell", "Excerpts" "Kopprasch" "Sparke Studies", "Pantomime - Philip Sparke", "Fantasia - Gordon Jacob", "Blind Spot - Gilles Rocha", "Fantasy Variations - Ito"]
assignments = ["Rochut 4", "Rochut 5", "Rochut 6", 'Arbans pg. 220', "Arbans pg. 113", "Pantomime Reh A - E", "Stars and Stripes all", "Schoenberg first half", "Kopprasch 11"]
30.times do
    Lesson.create!(
        user_id: students.ids.sample,
        objective: objectives.sample,
        repertoire: repertoires.sample(),
        assignment: assignments.sample(),
        status: 0,
        date: Faker::Date.between(from: '2021-09-01', to: '2021-12-08')
    )
end

puts "Seeding Practice Logs"

puts "Seeding Comments"

puts "Done Seeding!"



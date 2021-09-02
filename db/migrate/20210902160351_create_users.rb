class CreateUsers < ActiveRecord::Migration[6.1]
  def change
    create_table :users do |t|
      t.references :teacher, foreign_key: { to_table: :students }
      t.string :first_name
      t.string :last_name
      t.string :email
      t.string :username
      t.string :password_digest
    end
  end
end

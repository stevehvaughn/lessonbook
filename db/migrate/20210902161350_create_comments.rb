class CreateComments < ActiveRecord::Migration[6.1]
  def change
    create_table :comments do |t|
      t.references :commentable, polymorphic: true
      t.string :created_by
      t.string :content
      t.timestamps
    end
  end
end

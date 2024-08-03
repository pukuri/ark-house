class CreateMembers < ActiveRecord::Migration[8.0]
  def change
    create_table :members do |t|
      t.integer :team_id
      t.string :name
      t.string :title
      t.string :photo

      t.timestamps
    end
  end
end

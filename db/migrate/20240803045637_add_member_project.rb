class AddMemberProject < ActiveRecord::Migration[8.0]
  def change
    create_table :member_projects do |t|
      t.integer :member_id
      t.integer :project_id
    end
  end
end

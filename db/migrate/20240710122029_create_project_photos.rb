class CreateProjectPhotos < ActiveRecord::Migration[8.0]
  def change
    create_table :project_photos do |t|
      t.integer :project_id
      t.string :title
      t.string :photo

      t.timestamps
    end
  end
end

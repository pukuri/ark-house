class AddColumnsToProjects < ActiveRecord::Migration[8.0]
  def change
    add_column :projects, :area, :integer
    add_column :projects, :cost, :integer
    add_column :projects, :thumbnail, :string
  end
end

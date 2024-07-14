json.extract! project, :id, :name, :location, :year, :area, :cost, :description, :created_at, :updated_at
json.thumbnail polymorphic_url(project.thumbnail)

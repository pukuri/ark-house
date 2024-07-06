json.extract! project, :id, :name, :location, :year, :description, :created_at, :updated_at
json.url project_url(project, format: :json)

json.extract! project_photo, :id, :title, :created_at, :updated_at
json.photo polymorphic_url(project_photo.photo)
json.url project_photo_url(project_photo, format: :json)

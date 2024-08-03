json.extract! member, :id, :name, :title, :created_at, :updated_at
json.photo polymorphic_url(member.photo)

class Project < ApplicationRecord
  has_one_attached :thumbnail
  has_many :project_photos
end

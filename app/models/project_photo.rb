class ProjectPhoto < ApplicationRecord
  has_one_attached :photo
  belongs_to :project
end

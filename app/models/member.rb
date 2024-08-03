class Member < ApplicationRecord
  has_one_attached :photo
  has_one :member_projects
end

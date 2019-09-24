class Gallery < ApplicationRecord
  validates :name, presence: true, length: { maximum: 100 }

  mount_uploader :logo, Loyalty::GalleryLogoUploader

end

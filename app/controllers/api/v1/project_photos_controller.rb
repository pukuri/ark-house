class Api::V1::ProjectPhotosController < ApplicationController
  def index
    @project_photos = ProjectPhoto.all
  end

  def show
    @project_photo = ProjectPhoto.find(params[:id])
  end
end

class Api::V1::ProjectsController < ApplicationController
  def index
    @projects = Project.all
  end

  def show
    @project = Project.find(params[:id])
  end

  def photos
    @project_photos = ProjectPhoto.where(project_id: params[:id])

    render :photos
  end
end

class ProjectPhotosController < ApplicationController
  before_action :set_project_photo, only: %i[ show edit update destroy ]

  # GET /project_photos or /project_photos.json
  def index
    @project_photos = ProjectPhoto.all

    render :index, status: :ok
  end

  # GET /project_photos/1 or /project_photos/1.json
  def show
  end

  # GET /project_photos/new
  def new
    @project_photo = ProjectPhoto.new
  end

  # GET /project_photos/1/edit
  def edit
  end

  # POST /project_photos or /project_photos.json
  def create
    @project_photo = ProjectPhoto.new(project_photo_params)

    respond_to do |format|
      if @project_photo.save
        format.html { redirect_to project_photo_url(@project_photo), notice: "Project photo was successfully created." }
        format.json { render :show, status: :created, location: @project_photo }
      else
        format.html { render :new, status: :unprocessable_entity }
        format.json { render json: @project_photo.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /project_photos/1 or /project_photos/1.json
  def update
    respond_to do |format|
      if @project_photo.update(project_photo_params)
        format.html { redirect_to project_photo_url(@project_photo), notice: "Project photo was successfully updated." }
        format.json { render :show, status: :ok, location: @project_photo }
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: @project_photo.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /project_photos/1 or /project_photos/1.json
  def destroy
    @project_photo.destroy!

    respond_to do |format|
      format.html { redirect_to project_photos_url, notice: "Project photo was successfully destroyed." }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_project_photo
      @project_photo = ProjectPhoto.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def project_photo_params
      params.require(:project_photo).permit(:title, :project_id, :photo)
    end
end

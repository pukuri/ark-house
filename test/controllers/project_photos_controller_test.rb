require "test_helper"

class ProjectPhotosControllerTest < ActionDispatch::IntegrationTest
  setup do
    @project_photo = project_photos(:one)
  end

  test "should get index" do
    get project_photos_url
    assert_response :success
  end

  test "should get new" do
    get new_project_photo_url
    assert_response :success
  end

  test "should create project_photo" do
    assert_difference("ProjectPhoto.count") do
      post project_photos_url, params: { project_photo: { photo: @project_photo.photo, project_id: @project_photo.project_id } }
    end

    assert_redirected_to project_photo_url(ProjectPhoto.last)
  end

  test "should show project_photo" do
    get project_photo_url(@project_photo)
    assert_response :success
  end

  test "should get edit" do
    get edit_project_photo_url(@project_photo)
    assert_response :success
  end

  test "should update project_photo" do
    patch project_photo_url(@project_photo), params: { project_photo: { photo: @project_photo.photo, project_id: @project_photo.project_id } }
    assert_redirected_to project_photo_url(@project_photo)
  end

  test "should destroy project_photo" do
    assert_difference("ProjectPhoto.count", -1) do
      delete project_photo_url(@project_photo)
    end

    assert_redirected_to project_photos_url
  end
end

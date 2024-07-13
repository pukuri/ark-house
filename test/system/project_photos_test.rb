require "application_system_test_case"

class ProjectPhotosTest < ApplicationSystemTestCase
  setup do
    @project_photo = project_photos(:one)
  end

  test "visiting the index" do
    visit project_photos_url
    assert_selector "h1", text: "Project photos"
  end

  test "should create project photo" do
    visit project_photos_url
    click_on "New project photo"

    fill_in "Photo", with: @project_photo.photo
    fill_in "Project", with: @project_photo.project_id
    click_on "Create Project photo"

    assert_text "Project photo was successfully created"
    click_on "Back"
  end

  test "should update Project photo" do
    visit project_photo_url(@project_photo)
    click_on "Edit this project photo", match: :first

    fill_in "Photo", with: @project_photo.photo
    fill_in "Project", with: @project_photo.project_id
    click_on "Update Project photo"

    assert_text "Project photo was successfully updated"
    click_on "Back"
  end

  test "should destroy Project photo" do
    visit project_photo_url(@project_photo)
    click_on "Destroy this project photo", match: :first

    assert_text "Project photo was successfully destroyed"
  end
end

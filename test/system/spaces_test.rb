require "application_system_test_case"

class SpacesTest < ApplicationSystemTestCase
  setup do
    @space = spaces(:one)
  end

  test "visiting the index" do
    visit spaces_url
    assert_selector "h1", text: "Spaces"
  end

  test "should create space" do
    visit spaces_url
    click_on "New space"

    fill_in "Client", with: @space.client_id
    fill_in "Description", with: @space.description
    fill_in "Image 1", with: @space.image_1
    fill_in "Image 2", with: @space.image_2
    fill_in "Image 3", with: @space.image_3
    fill_in "Price per hour", with: @space.price_per_hour
    fill_in "Room size", with: @space.room_size
    fill_in "Space category", with: @space.space_category
    fill_in "Status", with: @space.status
    click_on "Create Space"

    assert_text "Space was successfully created"
    click_on "Back"
  end

  test "should update Space" do
    visit space_url(@space)
    click_on "Edit this space", match: :first

    fill_in "Client", with: @space.client_id
    fill_in "Description", with: @space.description
    fill_in "Image 1", with: @space.image_1
    fill_in "Image 2", with: @space.image_2
    fill_in "Image 3", with: @space.image_3
    fill_in "Price per hour", with: @space.price_per_hour
    fill_in "Room size", with: @space.room_size
    fill_in "Space category", with: @space.space_category
    fill_in "Status", with: @space.status
    click_on "Update Space"

    assert_text "Space was successfully updated"
    click_on "Back"
  end

  test "should destroy Space" do
    visit space_url(@space)
    click_on "Destroy this space", match: :first

    assert_text "Space was successfully destroyed"
  end
end

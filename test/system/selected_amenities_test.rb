require "application_system_test_case"

class SelectedAmenitiesTest < ApplicationSystemTestCase
  setup do
    @selected_amenity = selected_amenities(:one)
  end

  test "visiting the index" do
    visit selected_amenities_url
    assert_selector "h1", text: "Selected amenities"
  end

  test "should create selected amenity" do
    visit selected_amenities_url
    click_on "New selected amenity"

    fill_in "Amenity", with: @selected_amenity.amenity_id
    fill_in "Description", with: @selected_amenity.description
    fill_in "Quality", with: @selected_amenity.quality
    fill_in "Reservation", with: @selected_amenity.reservation_id
    click_on "Create Selected amenity"

    assert_text "Selected amenity was successfully created"
    click_on "Back"
  end

  test "should update Selected amenity" do
    visit selected_amenity_url(@selected_amenity)
    click_on "Edit this selected amenity", match: :first

    fill_in "Amenity", with: @selected_amenity.amenity_id
    fill_in "Description", with: @selected_amenity.description
    fill_in "Quality", with: @selected_amenity.quality
    fill_in "Reservation", with: @selected_amenity.reservation_id
    click_on "Update Selected amenity"

    assert_text "Selected amenity was successfully updated"
    click_on "Back"
  end

  test "should destroy Selected amenity" do
    visit selected_amenity_url(@selected_amenity)
    click_on "Destroy this selected amenity", match: :first

    assert_text "Selected amenity was successfully destroyed"
  end
end

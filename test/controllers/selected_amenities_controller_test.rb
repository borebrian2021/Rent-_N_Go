require "test_helper"

class SelectedAmenitiesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @selected_amenity = selected_amenities(:one)
  end

  test "should get index" do
    get selected_amenities_url
    assert_response :success
  end

  test "should get new" do
    get new_selected_amenity_url
    assert_response :success
  end

  test "should create selected_amenity" do
    assert_difference("SelectedAmenity.count") do
      post selected_amenities_url, params: { selected_amenity: { amenity_id: @selected_amenity.amenity_id, description: @selected_amenity.description, quality: @selected_amenity.quality, reservation_id: @selected_amenity.reservation_id } }
    end

    assert_redirected_to selected_amenity_url(SelectedAmenity.last)
  end

  test "should show selected_amenity" do
    get selected_amenity_url(@selected_amenity)
    assert_response :success
  end

  test "should get edit" do
    get edit_selected_amenity_url(@selected_amenity)
    assert_response :success
  end

  test "should update selected_amenity" do
    patch selected_amenity_url(@selected_amenity), params: { selected_amenity: { amenity_id: @selected_amenity.amenity_id, description: @selected_amenity.description, quality: @selected_amenity.quality, reservation_id: @selected_amenity.reservation_id } }
    assert_redirected_to selected_amenity_url(@selected_amenity)
  end

  test "should destroy selected_amenity" do
    assert_difference("SelectedAmenity.count", -1) do
      delete selected_amenity_url(@selected_amenity)
    end

    assert_redirected_to selected_amenities_url
  end
end

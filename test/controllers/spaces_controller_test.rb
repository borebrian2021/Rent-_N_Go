require "test_helper"

class SpacesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @space = spaces(:one)
  end

  test "should get index" do
    get spaces_url
    assert_response :success
  end

  test "should get new" do
    get new_space_url
    assert_response :success
  end

  test "should create space" do
    assert_difference("Space.count") do
      post spaces_url, params: { space: { client_id: @space.client_id, description: @space.description, image_1: @space.image_1, image_2: @space.image_2, image_3: @space.image_3, price_per_hour: @space.price_per_hour, room_size: @space.room_size, space_category: @space.space_category, status: @space.status } }
    end

    assert_redirected_to space_url(Space.last)
  end

  test "should show space" do
    get space_url(@space)
    assert_response :success
  end

  test "should get edit" do
    get edit_space_url(@space)
    assert_response :success
  end

  test "should update space" do
    patch space_url(@space), params: { space: { client_id: @space.client_id, description: @space.description, image_1: @space.image_1, image_2: @space.image_2, image_3: @space.image_3, price_per_hour: @space.price_per_hour, room_size: @space.room_size, space_category: @space.space_category, status: @space.status } }
    assert_redirected_to space_url(@space)
  end

  test "should destroy space" do
    assert_difference("Space.count", -1) do
      delete space_url(@space)
    end

    assert_redirected_to spaces_url
  end
end

require "test_helper"

class PagesControllerTest < ActionDispatch::IntegrationTest
  test "should get acceuil" do
    get pages_acceuil_url
    assert_response :success
  end

  test "should get info" do
    get pages_info_url
    assert_response :success
  end

  test "should get plus" do
    get pages_plus_url
    assert_response :success
  end
end

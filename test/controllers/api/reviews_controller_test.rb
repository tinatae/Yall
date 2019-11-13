require 'test_helper'

class Api::ReviewsControllerTest < ActionDispatch::IntegrationTest
  test "should get show" do
    get api_reviews_show_url
    assert_response :success
  end

end

require 'test_helper'

class BrandsControllerTest < ActionController::TestCase
  test "should get index" do
    get :index
    assert_response :success
  end

  test "should create" do
    brand = { name: "Speyburn" }
    post 'create', brand
    assert_response :success
  end

  test "should get show" do
    skip
    get :show
    assert_response :success
  end

  test "should update" do
    skip
    patch :update
    assert_response :success
  end

  test "should destroy" do
    skip
    delete :destroy
    assert_response :success
  end

end

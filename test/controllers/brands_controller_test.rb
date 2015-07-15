require 'test_helper'

class BrandsControllerTest < ActionController::TestCase
  test "should get index" do
    get :index
    assert_response :success
  end

  test "should create" do
    brand = { name: "Speyburn" }
    post 'create', brand
    assert_response :created
  end

  test "should get show" do
    get :show, { id: 1 }
    assert_response :success
  end

  test "should update" do
    brand = { name: "Glenfiddich" }
    patch :update, { id: 1 }, brand
    assert_response :success
  end

  test "should destroy" do
    delete :destroy, { id: 1 }
    assert_response :no_content
  end
end

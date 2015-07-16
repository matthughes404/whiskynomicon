require 'test_helper'

class VariantsControllerTest < ActionController::TestCase
  test "should get index," do
    get :index, { brand_id: 21 }
    assert_response :success
  end

  test "should get create," do
    get :create
    assert_response :success
  end

  test "should get show," do
    get :show, { brand_id: 21, id: 42 }
    assert_response :success
  end

  test "should get update," do
    get :update
    assert_response :success
  end

  test "should get destroy" do
    get :destroy
    assert_response :success
  end

end

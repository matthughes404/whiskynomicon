require 'test_helper'

class VariantsControllerTest < ActionController::TestCase
  test "should get index," do
    get :index, { brand_id: 1 }
    assert_response :success
  end

  test "should get create," do
    get :create, { brand_id: 1 }
    assert_response :success
  end

  test "should get show," do
    get :show, { brand_id: 1, id: 1 }
    assert_response :success
  end

  test "should get update," do
    patch :update, { brand_id: 1, id: 1 }
    assert_response :success
  end

  test "should get destroy" do
    delete :destroy, { brand_id: 1, id: 1 }
    assert_response :no_content
  end

end

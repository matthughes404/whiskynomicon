class ApplicationController < ActionController::Base
  include DeviseTokenAuth::Concerns::SetUserByToken
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.

  # from http://jaketrent.com/post/jsonapi-errors-serializer-in-rails/
  def error_output(errors)
    return if errors.nil?

    json = {}
    new_hash = errors.to_hash(true).map do |k, v|
      v.map do |msg|
        { id: k, title: msg }
      end
    end.flatten
    json[:errors] = new_hash
    json
  end

  def not_found(input = nil)
    if input
      return { error: "#{input.capitalize} not found" }
    else
      return { error: "Not found" }
    end
  end

  def user_id
    if user_signed_in?
      current_user.id
    else
      nil
    end
  end

  def activity_summary(type, activity)
    summary = ""
    
    if (type == "taste")
      summary = "had a sip of #{activity.brand}"
    end

    if (type == "bottle")
      summary = "bought a bottle of #{activity.brand}"
    end

    if (activity.variant)
      summary += " #{activity.variant}"
    end

    if (type == "taste" && activity.location)
      summary += " at #{activity.location}"
    end

    if (type == "bottle" && activity.purchase_location)
      summary += " at #{activity.purchase_location}"
    end

    return summary
  end
end

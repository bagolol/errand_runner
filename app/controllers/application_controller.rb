class ApplicationController < ActionController::Base

  include Authenticable

  protect_from_forgery
  after_filter :set_access_control_headers
  skip_before_filter :verify_authenticity_token

  def set_access_control_headers
    headers['Access-Control-Allow-Origin'] = '*'
    headers['Access-Control-Request-Method'] = '*'
  end


end

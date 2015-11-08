class ContactsController < ApplicationController
  def create
    contact_params = params.permit(:contact)
    begin
      Contact.new(name: contact_params[:name], email: contact_params[:email], message: contact_params[:message]).save
      redirect_to root_path, notice: 'Your message has been sent successfully.'
    rescue
      redirect_to root_path, alert: 'Error sending message. Please try again later.'
    end
  end
end
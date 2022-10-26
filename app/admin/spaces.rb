ActiveAdmin.register Space do

  # See permitted parameters documentation:
  # https://github.com/activeadmin/activeadmin/blob/master/docs/2-resource-customization.md#setting-up-strong-parameters
  #
  # Uncomment all parameters which should be permitted for assignment
  #
  permit_params :property_id, :room_size, :image_1, :image_2, :image_3, :description, :price_per_hour, :status, :space_category
  
  # or
  #
  # permit_params do
  #   permitted = [:property_id, :room_size, :image_1, :image_2, :image_3, :description, :price_per_hour, :status, :space_category]
  #   permitted << :other if params[:action] == 'create' && current_user.admin?
  #   permitted
  # end
  
end

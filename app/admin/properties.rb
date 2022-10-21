ActiveAdmin.register Property do
  permit_params :client_id, :property_name, :location, :image_url
end
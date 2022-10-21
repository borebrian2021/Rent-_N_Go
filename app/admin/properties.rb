ActiveAdmin.register Property do
  permit_params :property_name, :location, :image_url
end
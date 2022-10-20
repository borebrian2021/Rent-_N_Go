class SelectedAmenitiesController < ApplicationController
  before_action :set_selected_amenity, only: %i[ show edit update destroy ]

  # GET /selected_amenities or /selected_amenities.json
  def index
    @selected_amenities = SelectedAmenity.all
  end

  # GET /selected_amenities/1 or /selected_amenities/1.json
  def show
  end

  # GET /selected_amenities/new
  def new
    @selected_amenity = SelectedAmenity.new
  end

  # GET /selected_amenities/1/edit
  def edit
  end

  # POST /selected_amenities or /selected_amenities.json
  def create
    @selected_amenity = SelectedAmenity.new(selected_amenity_params)

    respond_to do |format|
      if @selected_amenity.save
        format.html { redirect_to selected_amenity_url(@selected_amenity), notice: "Selected amenity was successfully created." }
        format.json { render :show, status: :created, location: @selected_amenity }
      else
        format.html { render :new, status: :unprocessable_entity }
        format.json { render json: @selected_amenity.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /selected_amenities/1 or /selected_amenities/1.json
  def update
    respond_to do |format|
      if @selected_amenity.update(selected_amenity_params)
        format.html { redirect_to selected_amenity_url(@selected_amenity), notice: "Selected amenity was successfully updated." }
        format.json { render :show, status: :ok, location: @selected_amenity }
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: @selected_amenity.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /selected_amenities/1 or /selected_amenities/1.json
  def destroy
    @selected_amenity.destroy

    respond_to do |format|
      format.html { redirect_to selected_amenities_url, notice: "Selected amenity was successfully destroyed." }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_selected_amenity
      @selected_amenity = SelectedAmenity.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def selected_amenity_params
      params.require(:selected_amenity).permit(:reservation_id, :amenity_id, :quality, :description)
    end
end

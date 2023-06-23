class Api::V1::ProductsController < ApplicationController

  # GET /products
  def index
    @products = Product.all
    render json: @products
  end

   #POST /products
   def create
    @product = Product.new(product_payload)
    if @product.save
      render json: @product, status: 201
    else
      render json: { message: 'Product not saved' }, state: 500
  end

   #GET /products/:id
  def show
      @product = Product.find(params[:id])
      render json: @product
    end
  end

  #DELETE /products/:id
  def destroy
    @product = Product.find(params[:id])
    if @product
      @product.destroy
      render json: { message: 'Product successfully deleted'}, status: 200
    else
      render json: { message: 'Product not deleted' }, state: 500
    end
  end

  private

  def product_payload
    params.require(:product).permit(:description, :name, :img_url, variants_attributes: [:description, :name, :img_url, :price])
  end
end
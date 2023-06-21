class Api::V1::OrdersController < ApplicationController
  
   #POST /users
   def create
    @order = Order.new(order_payload)
    if @order.save
      render json: @order, status: 201
    else
      render json: { message: 'order not saved' }, state: 500
    end
  end

  # GET /orders
  def index
    @orders = Order.where(user: request.query_parameters[:user]).all
    render json: @orders
  end

  # GET /orders/:id
  def show
    @order = Order.find(params[:id])
    render json: @order
  end

  # PUT /orders/:id
  def destroy
    @order = Order.find(params[:id])
    if @order
      @order.destroy
      render json: { message: 'Order successfully deleted'}, status: 200
    else
      render json: { message: 'Order not deleted' }, state: 500
    end
  end

  # PUT /orders/:id
  def update
    @order = Order.find(params[:id])
    if @order
      @order.update(order_payload)
      render json: @order, status: 200
    else
      render json: { message: 'Order not updated' }, state: 500
    end
  end

  private

  def order_payload
    params.require(:order).permit(:user, :product, :variant, :status, :comment)
  end
end

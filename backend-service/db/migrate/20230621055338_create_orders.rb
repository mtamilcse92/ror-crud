class CreateOrders < ActiveRecord::Migration[7.0]
  def change
    create_table :orders do |t|
      t.string :status
      t.string :comment
      t.string :order_code
      t.references :user, null: false, foreign_key: true
      t.references :product, null: false, foreign_key: true
      t.references :variant, null: false, foreign_key: true

      t.timestamps
    end
  end
end
